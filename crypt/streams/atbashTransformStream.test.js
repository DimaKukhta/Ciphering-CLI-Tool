const AtbashStream = require('./atbashTransfromStream');
const { Transform } = require('stream');

describe('atbash stream testing', () => {
  const atbashStream = new AtbashStream();

  test('should be instance of transfrom stream', () => {
    expect(atbashStream instanceof Transform).toBe(true);
  });

  test('should crypt text', async () => {
    atbashStream.write('abc');

    await expect(
      new Promise((resolve, reject) => {
        atbashStream.on('data', (chunk) => {
          resolve(chunk.toString());
        });
      })
    ).resolves.toBe('zyx');
  });
});
