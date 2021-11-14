class cliError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CLI Error';
    }
}

module.exports = cliError;