const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function pushChanges() {
  const pullingCommand = 'git pull origin master';
  const addCommand = 'git add site/changes site/.vuepress';
  const commitCommand = 'git commit -m "[ci skip] update the changelog and deploy-info.json files"';
  const configSet = `git config user.email "lakatosandrei@gmail.com" && git config user.name "lakatosandrei"`;
  const pushCommand = 'git push -q https://${GITHUB_TOKEN}@github.com/pie-framework/pie-website.git master';

  const { stdout, stderr } = await exec(`${pullingCommand} && ${configSet} && ${addCommand} && ${commitCommand} && ${pushCommand}`);

  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

pushChanges();