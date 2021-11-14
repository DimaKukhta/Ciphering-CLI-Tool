const { Readable } = require('stream');
const fs = require('fs');

class readableStream extends Readable {
  constructor(file) {
    super();
    this.file = file;
    this.fd = null;
  }

  _construct(callback) {
    if (this.file) {
      fs.open(this.file, (err, fd) => {
        if (err) {
          callback(err);
        } else {
          this.fd = fd;
          callback();
        }
      });
    } else {
      process.stdin.setEncoding('utf8');
      callback();
    }
  }

  _read(n) {
    const buf = Buffer.alloc(n);
    if (this.file) {
      fs.read(this.fd, buf, 0, n, null, (err, bytesRead) => {
        if (err) {
          this.destroy(err);
        } else {
          this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
        }
      });
    } else {
      process.stdin.on('data', (chunk) => {
        this.push(chunk);
      });
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

module.exports = readableStream;
