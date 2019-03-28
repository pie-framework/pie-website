const { close, existsSync, openSync, readFileSync, writeSync } = require("fs-extra");

module.exports = (fileName, text) => {
  const readOptions = existsSync(fileName) ? {} : {
    flag: 'w+'
  };
  const data = readFileSync(fileName, readOptions);
  const fd = openSync(fileName, 'w+');
  const insert = Buffer.from(text);
  let delimiter = 0;

  if (data) {
    if (existsSync(fileName)) {
      writeSync(fd, data, 0, data.length >= 81 ? 81 : 0, 0);
      delimiter = 81;
    }

    writeSync(fd, insert, 0, insert.length, delimiter);
    writeSync(fd, data, delimiter, (data.length - delimiter), (insert.length + delimiter));
  } else {
    console.log('File not read');
  }

  close(fd, (err) => {
    if (err) throw err;
  });
};