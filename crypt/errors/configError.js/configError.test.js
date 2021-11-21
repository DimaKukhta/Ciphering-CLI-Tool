const CliError = require('../cliError');
const ConfigError = require('./configError');

describe('Config Error class tests', () => {
  const configError = new ConfigError();
  test('should be extended from the Error class', () => {
    expect(configError instanceof Error).toBeTruthy();
  });
  test('should be extended from the Cli Error class', () => {
    expect(configError instanceof CliError).toBeTruthy();
  });

  test('should have correct name', () => {
    expect(configError.name).toBe('Config Error');
  });
});