const toAlhpabetNumber = require('./utils');

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const reverseLoverLetters = [...lowerLetters].reverse();
const reverseUpperletters = [...upperLetters].reverse();

const crypt = (str, type = 'caesar', stuff = 1) => {
  const strSplit = str.split('');
  const result = [];
  for (let i = 0; i < strSplit.length; i++) {
    let isUpperCase = true;
    let index = lowerLetters.indexOf(strSplit[i]);
    index !== -1 ? (isUpperCase = false) : isUpperCase;
    if (index === -1) {
      index = upperLetters.indexOf(strSplit[i]);
    }
    if (index === -1) {
      result.push(strSplit[i]);
    } else {
      if (type === 'caesar') {
        let indexWithStuff = index;
        indexWithStuff = toAlhpabetNumber(index + stuff);
        isUpperCase
          ? result.push(upperLetters[indexWithStuff])
          : result.push(lowerLetters[indexWithStuff]);
      } else {
        isUpperCase
        ? result.push(reverseUpperletters[index])
        : result.push(reverseLoverLetters[index]);
      }
    }
  }
  return result.join('');
};

module.exports = crypt;
