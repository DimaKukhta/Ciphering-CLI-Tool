const { Writable } = require("stream");
const fs = require('fs');

class WritableStream extends Writable {
  constructor(file) {
    super();
    this.file = file;
    this.fd = null;
  }

  _construct(callback) {
    if (this.file) {
      fs.open(this.file, 'a', (err, fd) => {
        if (err) {
          callback(err);
        } else {
          this.fd = fd;
          callback();
        }
      });
    } else {
      process.stdout.setEncoding('utf8');
      callback();
    }
  }

  _write(chunk, encoding, callback) {
    if (this.file) {
      fs.write(this.fd, chunk, callback);
    } else {
      process.stdout.write(chunk);
      callback();
    }
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (e) => callback(e || err));
    } else {
      callback(err);
    }
  }
}

module.exports = WritableStream;