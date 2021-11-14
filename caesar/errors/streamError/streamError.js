const cliError = require("../cliError");

class StreamError extends cliError {
    constructor(message) {
        super(message);
        this.name = 'Stream error';
    }
}

module.exports = StreamError;