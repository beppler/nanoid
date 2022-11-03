// compatible with https://github.com/ai/nanoid
const crypto = require('node:crypto').webcrypto;

function nanoid(size = 21) {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-';
    const mask = 63;
    const pool = crypto.getRandomValues(new Uint8Array(size));
    // eslint-disable-next-line no-bitwise
    return pool.reduce((previous, next) => previous + alphabet[next & mask], '');
}

module.exports = nanoid;
