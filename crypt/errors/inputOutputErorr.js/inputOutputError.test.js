const CliError = require('../cliError');
const InputOutputError = require('./inputOutputError');

describe('Input / Output Error class tests', () => {
  const inputOutputError = new InputOutputError();
  test('should be extended from the Error class', () => {
    expect(inputOutputError instanceof Error).toBeTruthy();
  });
  test('should be extended from the Cli Error class', () => {
    expect(inputOutputError instanceof CliError).toBeTruthy();
  });

  test('should have correct name', () => {
    expect(inputOutputError.name).toBe('Input / Output Error');
  });
});
