const CaesarStream = require('./caesarTransformStream');
const { Transform } = require('stream');

describe('caesar stream testing', () => {

  test('should be instance of transfrom stream', () => {
    const caesarStream = new CaesarStream();
    expect(caesarStream instanceof Transform).toBe(true);
  });

  test('should crypt text', async () => {
    const caesarStream = new CaesarStream();
    caesarStream.config = 1;
    caesarStream.write('abc');

    await expect(
      new Promise((resolve, reject) => {
        caesarStream.on('data', (chunk) => {
          resolve(chunk.toString());
        });
      })
    ).resolves.toBe('bcd');
  });

  test('should decrypt text', async () => {
    const caesarStream = new CaesarStream();
    caesarStream.write('abc');

    await expect(
      new Promise((resolve, reject) => {
        caesarStream.on('data', (chunk) => {
          resolve(chunk.toString());
        });
      })
    ).resolves.toBe('zab');
  });
});