const args = require("minimist")(process.argv.slice(2));
const jsonBeautify = require("json-beautify");
const { request: graphQlRequest } = require("graphql-request");
const { resolve } = require("path");
const { readJsonSync, writeFile } = require("fs-extra");
const pacote = require("pacote");
const file = args._[0];
const type = args._[1] || 'latest';

const json = readJsonSync(resolve(file));

const promises = Promise.all(
  json.map(nv => {
    return pacote.manifest(`${nv.name}@${type}`).then(r => {
      const elementName = nv.name.slice(13);
      const formattedName = elementName.indexOf('-') > 0 ? elementName : `x-${elementName}`;

      return { ...nv, name: formattedName, packageName: nv.name, version: r.version };
    });
  })
);

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
                console.log('Done building');

                writeFile('./site/.vuepress/elements.json', jsonBeautify(results, null, 2, 30), function (err) {
                  if (err) throw err;
                  console.log('Saved!');
                });
              } else if (tries === 1) {
                console.log('Rechecking');

                tries += 1;
                handlePromises(elementPromises);
              } else {
                console.log('Failed');
              }
            });
        };

        statusPoll(data);
      }
    });
  });
};

handlePromises(promises);
