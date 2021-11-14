const fs = require('fs');
const ConfigError = require('../errors/configError.js/configError');
const InputOuputError = require('../errors/inputOutputErorr.js/inputOutputError');

const error = (config, input, output) => {
  config.split('-').forEach((configItem) => {
    if (
      configItem[0] === 'A' ||
      configItem[0] === 'C' ||
      configItem[0] === 'R'
    ) {
      if (
        configItem[0] !== 'A' &&
        configItem[1] !== '0' &&
        configItem[1] !== '1'
      ) {
        throw new ConfigError(
          "Config isn't valid!!! The second argumnet isn't 1 or 2!"
        );
      }
      if (configItem[0] === 'A' && configItem[1]) {
        throw new ConfigError(
          "Config isn't valid!!! Albash crypt dosen't have the second param"
        );
      }
    } else {
      throw new ConfigError(
        "Config isn't valid!!! The first argumnet is very strange!"
      );
    }

    if (configItem.length > 2) {
      throw new ConfigError(
        "Config isn't valid, because limit of max len of config item = 2!!!"
      );
    }
  });

  if (input && output) {
    if (input === output) {
      throw new InputOuputError(
        'Input file and Output file have the same name'
      );
    }
  }

  if (input) {
    fs.access(input, fs.F_OK, (err) => {
      if (err) {
        try {
          throw new InputOuputError('File input not found');
        } catch (e) {
          process.stderr.write(`[Input Error]: ${e.message}`);
          process.exit(1);
        }
      }
    });
  }

  if (output) {
    fs.access(output, fs.F_OK, (err) => {
      if (err) {
        try {
          throw new InputOuputError('File output not found');
        } catch (e) {
          process.stderr.write(`[Output Error]: ${e.message}`);
          process.exit(1);
        }
      }
    });
  }
};

module.exports = error;
