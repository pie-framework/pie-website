const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function pushChanges() {
  const addCommand = 'git add site/changes site/.vuepress';
  const commitCommand = 'git commit -m "[ci skip] update the changelog and deploy-info.json files"';
  const pushCommand = 'git push origin master';

  const { stdout, stderr } = await exec(`${addCommand} && ${commitCommand} && ${pushCommand}`);

  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

pushChanges();