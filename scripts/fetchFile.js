#!/usr/bin/env node
const gunzip = require("gunzip-maybe");
const { extract } = require("tar-stream");
const pacote = require("pacote");
const debug = require("debug");
const log = debug("tt");
const { Writable } = require("stream");

class StringWritable extends Writable {
  constructor(done) {
    super();
    this.done = done;
    this.parts = [];
  }

  _write(chunk, enc, next) {
    this.parts.push(chunk);
    next();
  }
  end() {
    this.done(null, this.parts.join(""));
  }
}

const getFile = (tarStream, path) => {
  let fileArray = Array.isArray(path) ? path : [path];

  return new Promise((resolve, reject) => {
    const e = extract();
    const data = {};

    e.on("entry", async (header, stream, done) => {
      log("entry:", header.name);
      let isRightFile = false;
      let fileIndex = null;

      fileArray.forEach((el, index) => {
        if (el === header.name) {
          isRightFile = true;
          fileIndex = index;
        }
      });

      if (isRightFile) {
        const ws = new StringWritable((err, content) => {
          log("error");
          data[fileIndex] = content;
          done(err);
        });
        stream.pipe(ws);
      } else {
        stream.on("end", done);
        stream.resume();
      }
    });

    e.on("close", () => {
      log("close:");
      resolve(Object.values(data).join(''));
    });

    e.on("finish", () => {
      log("finish:");
      resolve(Object.values(data).join(''));
    });

    e.on("error", err => reject(err));

    log("begin piping...");
    tarStream.pipe(gunzip()).pipe(e);
  });
};

const run = async (packageName, file) => {
  const n = packageName;
  const tarball = pacote.tarball.stream(n);
  const readme = await getFile(tarball, file);
  log(readme);
  return readme;
};

module.exports = run;
