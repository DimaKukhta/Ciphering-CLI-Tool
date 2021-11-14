const ConfigError = require('../errors/configError.js/configError');

const getValue = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
};

const getCommandArguments = () => {
  const config =
    getValue('-c') !== null ? getValue('-c') : getValue('--config');
  const input = getValue('-i') !== null ? getValue('-i') : getValue('--input');
  const output =
    getValue('-o') !== null ? getValue('-o') : getValue('--output');

  if (!config) {
    throw new ConfigError('Config not found!');
  } else if (config && input && output && process.argv.length > 8) {
    throw new ConfigError('Count of Arguments length error!');
  } else if (config && (input || output) && process.argv.length > 6) {
    throw new ConfigError('Count of Arguments length error!');
  } else if (config && !input && !output && process.argv.length > 4) {
    throw new ConfigError('Count of Arguments length error!');
  }

  return { config, input, output };
};

try {
  module.exports = { config, input, output } = getCommandArguments();
} catch (e) {
  process.stderr.write(`[Config Error]: ${e.message}`);
  process.exit(1);
}
