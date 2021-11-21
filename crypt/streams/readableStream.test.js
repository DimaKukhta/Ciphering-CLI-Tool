const readableStream = require('./readableStream');
const { Readable } = require('stream');

test('should be instance of readable stream', () => {
    expect(new readableStream('input.txt') instanceof Readable).toBe(true);
})