/**
 * **This is probably not the function you want to use.**
 * It turns *any* `\n` into `\r\n`!
 * This includes `\r\n`!
 * You must be absolutely sure that every line ending is `LF`!
 * It does weird things like `\r\r\n` otherwise.
 * @example
 * assert.equal(lf2clrf("foo\n"), "foo\r\n");
 * assert.notEqual(lf2clrf("bar\r\n"), "bar\r\n");
 * assert.equal(lf2clrf("baz\r\n"), "baz\r\r\n");
 * @param {String} string
 * @returns {String}
 */
function anylf2crlf(string) {
   return string.replace(/\n/g, "\r\n");
}
/**
 * It turns any `\n` who's previous character is not `\r` into `\r\n`!
 * @example
 * assert.equal(lf2clrf("foo\n"), "foo\r\n");
 * assert.equal("bar\r\n", "bar\r\n");
 * assert.notEqual(lf2clrf("baz\r\n"), "baz\r\r\n");
 * @param {String} string
 * @returns {String}
 */
function lf2crlf(string) {
   return string.replace(/(?<!\r)\n/g, "\r\n");
}
/**
 * It turns `\r\n` into `\n`
 * @param {String} string
 * @returns {String}
 */
function crlf2lf(string) {
   return string.replace(/\r\n/g, '\n');
}
/** The line.js module */
module.exports = { anylf2crlf, lf2crlf, crlf2lf };
