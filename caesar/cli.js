const { pipeline } = require('stream');
const StreamError = require('./errors/streamError/streamError');

const cli = (readableStream, wtitableStream, transormStream) => {
    pipeline(
        readableStream,
        ...transormStream,
        wtitableStream,
        (err) => {
            if (err) {
                try {
                    throw new StreamError('Pipeline error');
                } catch(e) {
                    process.stderr(`[Stream Error]: ${e.message}`);
                    process.exit(1);
                }
            }
        }
    )
}

module.exports = cli;