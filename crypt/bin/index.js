#!/usr/bin/env node
const { config, input, output } = require('./../program/commander');
const CaesarTransormStream = require('../streams/caesarTransformStream');
const RotTransformStream = require('../streams/rotTransformStream');
const AtbashTransformStream = require('../streams/atbashTransfromStream');
const cli = require('./../cli');
const error = require('./../program/error');
const ReadableStream = require('../streams/readableStream');
const InputOuputError = require('../errors/inputOutputErorr.js/inputOutputError');
const ConfigError = require('../errors/configError.js/configError');
const WritableStream = require('../streams/writableStream');

try {
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
  cli(readStream, writeStream, transformSteams);
} catch (e) {
  process.stderr('[CLI Error]: Stream errors');
  process.exit(1);
}
