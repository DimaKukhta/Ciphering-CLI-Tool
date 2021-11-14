const cliError = require('../cliError');

class InputOuputError extends cliError {
    constructor(message) {
        super(message);
        this.name = 'Input / Output Error';
    }
}

module.exports = InputOuputError;