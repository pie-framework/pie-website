const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function pullLatest() {
  const configSet = `git config user.email "lakatosandrei@gmail.com" && git config user.name "lakatosandrei"`;
  const pullCommand = 'git pull origin master';

  try {
    const { stdout, stderr } = await exec(`${configSet} && ${pullCommand}`);

    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

pullLatest();