const { Transform } = require('stream');
const crypt = require('../crypt');

class AlbashTransform extends Transform {
  _transform(chunk, encoding = 'utf-8', callback) {
      chunk = crypt(chunk.toString(), '');
    callback(null, chunk);
  }
}

module.exports = AlbashTransform;