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

const getFile = (tarStream, path) =>
  new Promise((resolve, reject) => {
    const e = extract();
    let data = "";
    e.on("entry", async (header, stream, done) => {
      log("entry:", header.name);

      if (header.name === path) {
        const ws = new StringWritable((err, content) => {
          log("error");
          data = content;
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
      resolve(data);
    });

    e.on("finish", () => {
      log("finish:");
      resolve(data);
    });

    e.on("error", err => reject(err));

    log("begin piping...");
    tarStream.pipe(gunzip()).pipe(e);
  });

const run = async (packageName, file) => {
  const n = packageName;
  const tarball = pacote.tarball.stream(n);
  const readme = await getFile(tarball, file);
  log(readme);
  return readme;
};

module.exports = run;
