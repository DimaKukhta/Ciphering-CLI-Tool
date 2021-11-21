const writableStream = require('./writableStream');
const { Writable } = require('stream');

test('should be instance of writable stream', () => {
    expect(new writableStream('input.txt') instanceof Writable).toBe(true);
})