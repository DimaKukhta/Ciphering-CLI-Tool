const error = require('./error');
// const { jest } = require('@jest/globals');
// const {jest: requiredJest} = require('@jest/globals');

test("should get error if the second argument in config isn't valid", () => {
  try {
    error('C3');
  } catch (e) {
    expect(e.message).toBe(
      "Config isn't valid!!! The second argumnet isn't 1 or 2!"
    );
  }
});

test('should get error if the second is in atbash config', () => {
  try {
    error('A0');
  } catch (e) {
    expect(e.message).toBe(
      "Config isn't valid!!! Albash crypt dosen't have the second param"
    );
  }
});

test("should get error if the first argument in config dosen't valid", () => {
  try {
    error('G0');
  } catch (e) {
    expect(e.message).toBe(
      "Config isn't valid!!! The first argumnet is very strange!"
    );
  }
});

test('should get error if input and output file have the same names', () => {
  try {
    error('C1', 'input.txt', 'input.txt');
  } catch (e) {
    expect(e.message).toBe('Input file and Output file have the same name');
  }
});

test('should get error if config item lenght > 2', () => {
  try {
    error('C12');
  } catch (e) {
    expect(e.message).toBe(
      "Config isn't valid, because limit of max len of config item = 2!!!"
    );
  }
});

test('2', () => {
  const realProcess = process;
  const exitMock = jest.fn(() => ()=>1);
  global.process = { ...realProcess, exit: exitMock };
  try {
    error('C1', 'input123.txt');
  } catch (e) {
    expect(true).toBe(true);
  }
  global.process = realProcess;
});

// test('3', () => {
//   const realProcess = process;
//   const exitMock = jest.fn();
//   global.process = { ...realProcess, exit: exitMock };
//   error('C1', 'input.txt', 'output123.txt');
//   expect(exitMock).toHaveBeenCalledWith(1);
//   global.process = realProcess;
// });
