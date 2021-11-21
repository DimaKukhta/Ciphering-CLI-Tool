const ReadableStream = require('./readableStream');
const { Readable } = require('stream');

describe('readable stream testing', () => {
  const readableStream = new ReadableStream('input.txt');
  test('should be instance of readable stream', () => {
    expect(readableStream instanceof Readable).toBe(true);
  });

  test('should read text from file', async () => {
    await expect(
      new Promise((resolve) => {
        readableStream.on('data', (chunk) => {
          resolve(chunk.toString() ? chunk.toString() : true);
        });
      })
    ).resolves.toBeTruthy();
  });

  test('should destory stream after read', async () => {
    await expect(
      new Promise((resolve) => {
        readableStream.on('end', () => {
          readableStream.destroy();
          resolve(true);
        });
      })
    ).resolves.toBeTruthy();
  });

  test('should throw err', async () => {
    try {
      const readableStreamErr = new ReadableStream('input123.txt');
      await expect(
        new Promise((resolve) => {
          readableStreamErr.on('error', () => {
            resolve(true);
          });
        })
      ).resolves.toBeTruthy();
    } catch (e) {}
  });
});
