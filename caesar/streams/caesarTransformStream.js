const { Transform } = require('stream');
const caesar = require('../crypt');

class caesarTransform extends Transform {
  constructor(config) {
    super();
    this.config = config;
  }
  _transform(chunk, encoding = 'utf-8', callback) {
    const stuff = this.config === 1 ? 1 : -1;
    chunk = caesar(chunk.toString(), 'caesar', stuff);
    callback(null, chunk);
  }
}

module.exports = caesarTransform;