const cliError = require("../cliError")

class ConfigError extends cliError {
    constructor(message) {
        super(message);
        this.name = 'Config Error';
    }
}

module.exports = ConfigError;