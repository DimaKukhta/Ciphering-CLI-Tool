const RotStream = require('./rotTransformStream');
const { Transform } = require('stream');

describe('caesar stream testing', () => {

  test('should be instance of transfrom stream', () => {
    const rotStream = new RotStream();
    expect(rotStream instanceof Transform).toBe(true);
  });

  test('should crypt text', async () => {
    const rotStream = new RotStream();
    rotStream.config = 1;
    rotStream.write('abc');

    await expect(
      new Promise((resolve, reject) => {
        rotStream.on('data', (chunk) => {
          resolve(chunk.toString());
        });
      })
    ).resolves.toBe('ijk');
  });

  test('should decrypt text', async () => {
    const rotStream = new RotStream();
    rotStream.write('abc');

    await expect(
      new Promise((resolve, reject) => {
        rotStream.on('data', (chunk) => {
          resolve(chunk.toString());
        });
      })
    ).resolves.toBe('stu');
  });
});
