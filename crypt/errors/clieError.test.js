const CliError = require('./cliError');

describe('Cli Error class tests', () => {
  const cliError = new CliError();
  test('should be extended from Error class', () => {
    expect(cliError instanceof Error).toBeTruthy();
  });

  test('should have correct name', () => {
    expect(cliError.name).toBe('CLI Error');
  });
});
