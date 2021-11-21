#!/usr/bin/env node
const CaesarTransormStream = require('../streams/caesarTransformStream');
const RotTransformStream = require('../streams/rotTransformStream');
const AtbashTransformStream = require('../streams/atbashTransfromStream');
const error = require('./../program/error');
const ReadableStream = require('../streams/readableStream');
const InputOuputError = require('../errors/inputOutputErorr.js/inputOutputError');
const ConfigError = require('../errors/configError.js/configError');
const WritableStream = require('../streams/writableStream');
const StreamError = require('../errors/streamError/streamError');
const { pipeline } = require('stream');

let config, input, output = null;

const getCommandArguments = () => {
  const getValue = (flag) => {
    const flagIndex = process.argv.indexOf(flag);
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
  };
  
  const config =
    getValue('-c') !== null ? getValue('-c') : getValue('--config');
  const input = getValue('-i') !== null ? getValue('-i') : getValue('--input');
  const output =
    getValue('-o') !== null ? getValue('-o') : getValue('--output');

  if (!config) {
    throw new ConfigError('Config not found!');
  } else if (config && input && output && process.argv.length > 8) {
    throw new ConfigError('Count of Arguments length error!');
  } else if (config && (input || output) && !(input || output) && process.argv.length > 6) {
    throw new ConfigError('Count of Arguments length error!');
  } else if (config && !input && !output && process.argv.length > 4) {
    throw new ConfigError('Count of Arguments length error!');
  }

  return { config, input, output };
};

try {
  const args = getCommandArguments();
  input = args.input;
  output = args.output;
  config = args.config;

  error(config, input, output);
} catch (e) {
  if (e instanceof InputOuputError) {
    process.stderr.write(`[Input / Output Error]: ${e.message}`);
  } else if (e instanceof ConfigError) {
    process.stderr.write(`[Config Error]: ${e.message}`);
  } else {
    process.stderr.write('[Cli Error]: Validation error!');
  }
  process.exit(1);
}

const transformSteams = config.split('-').map((config) => {
  if (config[0] === 'C') {
    return new CaesarTransormStream(+config[1]);
  } else if (config[0] === 'R') {
    return new RotTransformStream(+config[1]);
  } else {
    return new AtbashTransformStream();
  }
});

try {
  const readStream = input ? new ReadableStream(input) : process.stdin;
  const writeStream = output ? new WritableStream(output) : process.stdout;
  pipeline(readStream, ...transformSteams, writeStream, (err) => {
    if (err) {
      try {
        throw new StreamError('Pipeline error');
      } catch (e) {
        process.stderr(`[Stream Error]: ${e.message}`);
        process.exit(1);
      }
    }
  });
} catch (e) {
  process.stderr('[CLI Error]: Stream errors');
  process.exit(1);
}
