const args = require("minimist")(process.argv.slice(2));
const moment = require("moment");
const reduce = require("lodash/reduce");
const forEach = require("lodash/forEach");
const isArray = require("lodash/isArray");
const fetchFile = require("./fetchFile");
const { resolve } = require("path");
const { readFileSync, readJsonSync, writeFileSync } = require("fs-extra");

const removeEntryForDate = require('./removeEntryForDate');
const prependFileSync = require("./prependFileSync");

const deployFile = './site/.vuepress/deploy-info.json';
const deployJSON = readJsonSync(resolve(deployFile));

const run = (dateForBuild, recursive) => {
  /*const deployJSON = {
   date: args._[1]
   };*/
  const file = './site/.vuepress/pie-packages.json';
  const json = readJsonSync(resolve(file)).slice(0);
  const packagesMap = json.reduce((obj, j) => {
    obj[j.name] = j.label;

    return obj;
  }, {});

  const type = args._[0] || 'latest';
  const isNext = type === 'next';

  const promises = Promise.all(
    json.map(nv => {
      return fetchFile(
        `${nv.name}@${type}`,
        [
          'package/NEXT.CHANGELOG.json',
          'package/CHANGELOG.json',
          'package/package.json',
          'package/configure/package.json'
        ]
      ).then(r => {
        const elementName = nv.name.slice(13);
        const formattedName = elementName.indexOf('-') > 0 ? elementName : `x-${elementName}`;

        return { ...nv, name: formattedName, packageName: nv.name, data: r };
      });
    })
  );

  const dataMap = {};

  const startDate = moment(dateForBuild, 'YYYY-MM-DD HH:mm:ss').startOf('day');
  const currentDate = moment().startOf('day');
  const endDate = moment(dateForBuild, 'YYYY-MM-DD HH:mm:ss').endOf('day');

  const getInfoFromChangeLogData = (changeLogData, packageName, parentPackage) => {
    const formattedData = [];
    const dependencyOf = parentPackage ? packagesMap[parentPackage] : parentPackage;

    let packLabel = '';

    changeLogData.forEach((log) => {
      packLabel = packagesMap[packageName] || packageName;

      if (packLabel === '') {
        console.log('empty data', changeLogData);
        console.log('packLabel', packLabel);
      }

      const date = moment(log.committerDate, 'YYYY-MM-DD HH:mm:ss');

      if (date > startDate && date <= endDate) {
        const dateKey = moment(dateForBuild, 'YYYY-MM-DD').format('MM/DD/YYYY');

        if (!dataMap[dateKey]) {
          dataMap[dateKey] = {};
        }

        if (dependencyOf) {
          if (!dataMap[dateKey][dependencyOf]) {
            dataMap[dateKey][dependencyOf] = {};
          }

          if (!dataMap[dateKey][dependencyOf].dependencies) {
            dataMap[dateKey][dependencyOf].dependencies = {};
          }

          if (!dataMap[dateKey][dependencyOf].dependencies[packLabel]) {
            dataMap[dateKey][dependencyOf].dependencies[packLabel] = {};
          }

          if (!dataMap[dateKey][dependencyOf].dependencies[packLabel][log.type]) {
            dataMap[dateKey][dependencyOf].dependencies[packLabel][log.type] = [];
          }

          dataMap[dateKey][dependencyOf].dependencies[packLabel][log.type].push({ ...log, packageName });
        } else {
          if (!dataMap[dateKey][packLabel]) {
            dataMap[dateKey][packLabel] = {};
          }

          if (!dataMap[dateKey][packLabel][log.type]) {
            dataMap[dateKey][packLabel][log.type] = [];
          }

          dataMap[dateKey][packLabel][log.type].push({ ...log, packageName });
        }
      }
    });

    if (changeLogData && changeLogData.length) {
      formattedData.push(`## ${packLabel}\n`);
    }

    return formattedData.join('\n');
  };

  const getInfoFromChangeLogs = (data, packageName) => new Promise((resolve) => {
    const nextData = data[0] ? JSON.parse(data[0]) : [];
    const latestData = data[1] ? JSON.parse(data[1]) : [];
    const elementPackage = data[2] ? JSON.parse(data[2]) : [];
    const configurePackage = data[3] ? JSON.parse(data[3]) : [];
    const pieUiEl = reduce(elementPackage.dependencies, (str, dep, key) => {
      if (key.indexOf('pie-ui') >= 0) {
        return `${key}@${dep.replace(/\^/g, '')}`;
      }

      return str;
    }, '');
    const otherLibPromises = [
      fetchFile(pieUiEl, ['package/NEXT.CHANGELOG.json', 'package/CHANGELOG.json'])
        .then(r => ({ files: r, packageName}))
    ];

    forEach(configurePackage.dependencies, (dep, key) => {
      if (key.indexOf('pie-lib') >= 0) {
        const packageName = `${key}@${dep.replace(/\^/g, '')}`;

        otherLibPromises.push(
          fetchFile(packageName, ['package/NEXT.CHANGELOG.json', 'package/CHANGELOG.json'])
            .then(r => ({ files: r, packageName}))
        );
      }
    });

    let totalData = `${isNext ? `${getInfoFromChangeLogData(nextData, packageName)}\n` : ''}${getInfoFromChangeLogData(latestData, packageName)}`;

    console.log(packageName);

    Promise
      .all(otherLibPromises)
      .then((values) => {
        values.forEach(({ files, packageName: depName }) => {
          const nextJSON = files[0] ? JSON.parse(files[0]) : [];
          const latestJSON = files[1] ? JSON.parse(files[1]) : [];
          const nextData = isNext ? `\n${getInfoFromChangeLogData(nextJSON, depName, packageName)}` : '';
          const latestData = getInfoFromChangeLogData(latestJSON, depName, packageName);

          if (nextData || latestData) {
            totalData = `${totalData}${nextData}\n${latestData}`;
          }
        });

        resolve();
      })
      .catch(err => console.log(err));
  });

  promises.then(results => {
    const totalDataPromises = [];

    results.forEach(({ data, packageName }) => {
      totalDataPromises.push(getInfoFromChangeLogs(data, packageName));
    });

    Promise
      .all(totalDataPromises)
      .then(() => {
        const formattedData = [];
        const typeMap = {
          chore: 'Chores',
          feat: 'Features',
          fix: 'Bug Fixes'
        };

        // writeFileSync(`./test.json`, JSON.stringify(dataMap));

        Object.keys(dataMap).forEach((key) => {
          if (dataMap.hasOwnProperty(key)) {
            const logsA = dataMap[key];

            console.log('Key', key);

            formattedData.push(`## ${key}\n`);

            const recursiveFn = (logs, isDep) => {
              Object.keys(logs).forEach((elName) => {
                const usedKeys = {};

                formattedData.push(`###${isDep ? '##' : ''} ${elName}\n`);

                Object.keys(logs[elName]).forEach((logType) => {
                  if (isArray(logs[elName][logType])) {
                    formattedData.push(`####${isDep ? '##' : ''} ${typeMap[logType]}\n`);

                    logs[elName][logType].forEach((log) => {
                      if (!usedKeys[log.elementLabel]) {
                        usedKeys[log.elementLabel] = true;
                      }

                      const tag = log.tag || log.earliestTag || '';

                      const version = tag.slice(tag.lastIndexOf('@') + 1);
                      const commiterDate = moment(log.committerDate, 'YYYY-MM-DD HH:mm:ss').format('MM/DD/YYYY HH:mm:ss');

                      formattedData.push(`Commit Date: ${commiterDate}\n`);
                      formattedData.push(`Version: '${version}'\n`);
                      formattedData.push(`${log.header}\n`);
                    });
                  } else {
                    formattedData.push(`#### Dependencies \n`);
                    recursiveFn(logs[elName][logType], true);
                  }
                });
              });
            };

            recursiveFn(logsA);
          }
        });
        const totalData = formattedData.join('\n');

        removeEntryForDate(`./site/changes/${type}_introduction.md`, startDate);
        prependFileSync(`./site/changes/${type}_introduction.md`, totalData);

        const allData = readFileSync(`./site/changes/${type}_introduction.md`);

        writeFileSync('./site/changes/introduction.md', allData);
        writeFileSync(deployFile,
          `{
  "date": "${moment().format('YYYY-MM-DD HH:mm:ss')}"
}`);

        if (!recursive && currentDate.format('YYYY-MM-DD') !== startDate.format('YYYY-MM-DD')) {
          run(currentDate.format('YYYY-MM-DD HH:mm:ss'), true);
        }
      })
      .catch(err => console.log(err));
  });
};

run(deployJSON.date);
