#!/usr/bin/env node
const { config, input, output } = require('./../program/commander');
const caesarTransormStream = require('../streams/caesarTransformStream');
const rotTransformStream = require('../streams/rotTransformStream');
const atbashTransformStream = require('../streams/atbashTransfromStream');
const cli = require('./../cli');
const error = require('./../program/error');
const readableStream = require('../streams/readableStream');
const InputOuputError = require('../errors/inputOutputErorr.js/inputOutputError');
const ConfigError = require('../errors/configError.js/configError');
const WritableStream = require('../streams/witableStream');

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
    return new caesarTransormStream(+config[1]);
  } else if (config[0] === 'R') {
    return new rotTransformStream(+config[1]);
  } else {
    return new atbashTransformStream();
  }
});

try {
  const readStream = new readableStream(input ? input : false);
  const writeStream = new WritableStream(output ? output : false);
  cli(readStream, writeStream, transformSteams);
} catch (e) {
  process.stderr('[CLI Error]: Stream errors');
  process.exit(1);
}
