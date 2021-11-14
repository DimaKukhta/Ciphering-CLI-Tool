const getNumberLessThanTwentySix = (number) => {
    if (number < 26) {
        return number;
    }
    while (number >= 26) {
        number -= 26;
    }
    return number;
}

const toAlhpabetNumber = (n) => {
    const lenghtOfAlphabet = 26;
    if (n < 0) {
        while (n + lenghtOfAlphabet < lenghtOfAlphabet) {
            n += + lenghtOfAlphabet;
        }
        return n;
    } else {
        return getNumberLessThanTwentySix(n);
    }
}

module.exports = toAlhpabetNumber;