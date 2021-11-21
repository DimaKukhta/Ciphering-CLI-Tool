const CliError = require('../cliError');
const StreamError = require('./streamError');

describe('Stream Error class tests', () => {
  const streamError = new StreamError();
  test('should be extended from Error class', () => {
    expect(streamError instanceof Error).toBeTruthy();
  });
  test('should be extended from Cli Error class', () => {
    expect(streamError instanceof CliError).toBeTruthy();
  });

  test('should have correct name', () => {
    expect(streamError.name).toBe('Stream error');
  });
});
