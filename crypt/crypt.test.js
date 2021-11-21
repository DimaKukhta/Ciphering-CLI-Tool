const crypt = require('./crypt');

describe('should crypt text', () => {
  test('should crypt by caesar', () => {
    expect(crypt('abc!')).toBe('bcd!');
  });

  test('should crypt by caesar with UpperCase', () => {
    expect(crypt('abC!')).toBe('bcD!');
  });

  test('should crypt by rot-8', () => {
    expect(crypt('abc', 'caesar', 8)).toBe('ijk');
  });

  test('should crypt by atbash', () => {
    expect(crypt('abC', '')).toBe('zyX');
  });
});

describe('should decrypt text', () => {
  test('should decrypt by caesar', () => {
    expect(crypt('abc', 'caesar', -1)).toBe('zab');
  });

  test('should decrypt by rot-8', () => {
    expect(crypt('abC', 'caesar', -8)).toBe('stU');
  });

  test('should decrypt by rot-8 with Upper letters', () => {
    expect(crypt('ABC', 'caesar', -8)).toBe('STU');
  });
});
