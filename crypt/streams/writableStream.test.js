const WritableStream = require('./writableStream');
const { Writable } = require('stream');

describe('writable stream testing', () => {
  const writableStream = new WritableStream('input.txt');
  test('should be instance of writable stream', () => {
    expect(writableStream instanceof Writable).toBe(true);
  });

  test('should write text to file', async () => {
    writableStream.write('text');
    writableStream.end();
    await expect(
      new Promise((resolve) => {
        writableStream.on('finish', () => {
          resolve(true);
        });
      })
    ).resolves.toBeTruthy();
  });

  test('should destory stream after read', async () => {
    writableStream.destroy();
    await expect(
      new Promise((resolve) => {
        writableStream.on('close', () => {
          writableStream.destroy();
          resolve(true);
        });
      })
    ).resolves.toBeTruthy();
  });

  test('should throw err', async () => {
    try {
      const writableStreamErr = new WritableStream();
      await expect(
        new Promise((resolve) => {
          writableStreamErr.on('error', () => {
            resolve(true);
          });
        })
      ).resolves.toBeTruthy();
    } catch (e) {}
  });
});
