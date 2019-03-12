const fetchFile = require("./fetchFile");
const { resolve } = require("path");

const { readJsonSync, writeFileSync } = require("fs-extra");

const file = './site/.vuepress/pie-packages.json';
const json = readJsonSync(resolve(file)).slice(0);

const promises = Promise.all(
  json.map(nv => {
    return fetchFile(`${nv.name}@next`, ['package/NEXT.CHANGELOG.md', 'package/CHANGELOG.md']).then(r => {
      const elementName = nv.name.slice(13);
      const formattedName = elementName.indexOf('-') > 0 ? elementName : `x-${elementName}`;

      return { ...nv, name: formattedName, packageName: nv.name, data: r };
    });
  })
);

promises.then(results => {
  results.forEach(({ packageName, label, data }) => {
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

    writeFileSync(`./site/changelogs/pie-${formattedName}.md`, text);
  });
});
