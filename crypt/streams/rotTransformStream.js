const { Transform } = require('stream');
const caesar = require('../crypt');

class RotTransform extends Transform {
  constructor(config) {
    super();
    this.config = config;
  }
  _transform(chunk, encoding, callback) {
    const stuff = this.config === 1 ? 8 : -8;
    chunk = caesar(chunk.toString(), 'caesar', stuff);
    callback(null, chunk);
  }
}

module.exports = RotTransform;