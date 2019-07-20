/**
 * If there are command line arguments,
 * `join` returns them. If not, `join`
 * slurps `process.stdin` and returns the resulting utf-8 string
 * @example
 * const cliInput = await require("join");
 * @returns {Promise<String>}
 */
module.exports = process.stdin.length > 2 ? new Promise.resolve(process.argv.slice(2).join(' ')) : require("./stdin");
