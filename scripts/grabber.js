const args = require("minimist")(process.argv.slice(2));
const jsonBeautify = require("json-beautify");
const { request: graphQlRequest } = require("graphql-request");
const { resolve } = require("path");
const { readJsonSync, writeFile } = require("fs-extra");
const versionChangelogger = require('./versionChangelogger');
const pacote = require("pacote");
const file = args._[0];

const json = readJsonSync(resolve(file));

const promises = Promise.all(
  json.map(nv => {
    return pacote.manifest(`${nv.name}@next`).then(r => {
      const elementName = nv.name.slice(13);
      const formattedName = elementName.indexOf('-') > 0 ? elementName : `x-${elementName}`;

      return { ...nv, name: formattedName, packageName: nv.name, version: r.version };
    });
  })
);

const changeLogsFn = (results) => {
  const versionPromises = Promise.all(
    results.map((nv, index) => {
      return versionChangelogger
        .getChangeLogs(nv.packageName, 'all', 'next')
        .then(data => ({
          label: json[index].label,
          packageName: nv.packageName,
          data
        }));
    })
  );

  versionPromises.then((versionResults) => {
    versionResults.forEach(({ packageName, label, data }) => {
      const formattedName = packageName.slice(13);
      const text = `---
title: ${label}
sidebar: false
navbar: false
layout: DefaultLayout
noSearchBox: true
---
${data}
`;

      writeFile(`./site/changes/pie-${formattedName}.md`, text);
    });
  });
};

let tries = 1;

const handlePromises = (elementPromises) => {
  let checks = 0;

  elementPromises.then((results) => {
    const query = `mutation { 
  createBundle(deps: [
    ${results.reduce((str, json, index) => {
      return `${str}{ name: "${json.packageName}", version: "${json.version}" }${index === results.length - 1 ? '' : ',\n'}`;
    }, '')}
  ], overwrite: {
          controllers: false
          srcViews:false
          bundles: true
      }) {
    id
        hash
        deps {
          name
          version
        }
      }
}`;

    console.log(query);

    graphQlRequest('http://pits-dot-pie-dev-221718.appspot.com/graphql?', query).then((data) => {
      if (data && data.createBundle) {
        const statusPoll = (bundleData) => {
          const statusQuery = `
query {
  build(id:"${bundleData.createBundle.id}"){
    deps{
      name 
      version 
    }
    scope{
      controllers
    }
    
    status 
  }
}`;
          checks += 1;
          console.log(checks);

          graphQlRequest('http://pits-dot-pie-dev-221718.appspot.com/graphql?', statusQuery)
            .then((data) => {
              if (data && data.build.status === 'started') {
                setTimeout(() => {
                  statusPoll(bundleData);
                }, 30000);
              } else if (data.build.status !== 'failed') {
                changeLogsFn(results);

                console.log('Done building');

                writeFile('./site/.vuepress/elements.json', jsonBeautify(results, null, 2, 30), function (err) {
                  if (err) throw err;
                  console.log('Saved!');
                });
              } else if (tries === 1) {
                console.log('Rechecking');

                tries += 1;
                handlePromises(elementPromises);
              }
            });
        };

        statusPoll(data);
      }
    });
  });
};

handlePromises(promises);
