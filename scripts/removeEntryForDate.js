const moment = require('moment');
const { close, existsSync, openSync, readFileSync, writeSync } = require("fs-extra");

module.exports = (fileName, date) => {
  const readOptions = existsSync(fileName) ? {
    encoding: 'utf8'
  } : {
    flag: 'w+'
  };
  const data = readFileSync(fileName, readOptions);

  const momentDate = moment(date);
  const dateForEntry = momentDate.format('MM/D/YYYY');

  const dateIndex = data.indexOf(`## ${dateForEntry}`);

  if (dateIndex >= 0) {
    const prevData = data.slice(0, dateIndex);
    const nextEntryIndex = data.slice(dateIndex + 14).search(/\n\#{2} /g);
    const restOfChanges = data.slice(dateIndex + 15 + nextEntryIndex);
    const newData = `${prevData}${restOfChanges}`;

    console.log(`${prevData}${restOfChanges}`);

    const fd = openSync(fileName, 'w+');

    if (data) {
      writeSync(fd, newData);
    } else {
      console.log('File not read');
    }

    close(fd, (err) => {
      if (err) throw err;
    });
  }
};
