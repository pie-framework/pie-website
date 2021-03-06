const args = require("minimist")(process.argv.slice(2));
const jsonBeautify = require("json-beautify");
const { resolve } = require("path");
const { readJsonSync, writeFile } = require("fs-extra");
const pacote = require("pacote");
const request = require("request");

const file = args._[0];
const type = args._[1] || "latest";

const json = readJsonSync(resolve(file));

const promises = Promise.all(
  json.map(nv => {
    return pacote.manifest(`${nv.name}@${type}`).then(r => {
      const elementName = nv.name.slice(13);
      const formattedName =
        elementName.indexOf("-") > 0 ? elementName : `x-${elementName}`;

      return {
        ...nv,
        name: formattedName,
        packageName: nv.name,
        version: r.version
      };
    });
  })
);

let tries = 1;
const pitsHost =
  args.host ||
  process.env.PITS_HOST ||
  "https://pits-dot-pie-dev-221718.appspot.com";

const handlePromises = elementPromises => {
  let checks = 0;

  elementPromises.then(results => {
    const packages = results.map(
      (json) => `${json.packageName}@${json.version}`
    );
    const url = `${pitsHost}/bundles/${packages.join("+")}/editor.js`;

    console.log(packages);
    console.log(url);

    const writeFiles = () => {
      writeFile(
        "./site/.vuepress/elements.json",
        jsonBeautify(results, null, 2, 30),
        function(err) {
          if (err) throw err;
          console.log("Saved!");
        }
      );
    };

    const statusPoll = () => {
      checks += 1;
      console.log(checks);

      // sanity check
      if (checks > 30) {
        console.error("Failed to grab elements");

        process.exit(1);
      }

      request(url, (err, res) => {
        if (err) {
          if (tries === 1) {
            console.log("Rechecking");

            tries += 1;
            handlePromises(elementPromises);
          } else {
            console.error("Failed to grab elements");

            process.exit(1);
          }
        }

        if (res.statusCode === 503) {
          return setTimeout(() => {
            statusPoll();
          }, 30000);
        }

        console.log("Done building");

        writeFiles();
      });
    };

    // statusPoll();
    writeFiles();
  });
};

handlePromises(promises);
