const toAlhpabetNumber = require('./utils');

test('should get number only from 0 to 25', () => {
    expect(toAlhpabetNumber(27)).toBe(1);
    expect(toAlhpabetNumber(-5)).toBe(21);
})