/**
 * Slurps an entire readable stream into a String.
 * @example
 * console.log(await slurp(process.stdin));
 * @param {NodeJS.ReadableStream} stream
 * @returns {Promise<String>} 
 */
module.exports = function slurp(stream) {
   const data = [];
   return new Promise((res, rej) => {
      stream.on("error", rej);
      stream.on("data", datum => data.push(datum));
      stream.on("end", () => res(Buffer.concat(data).toString("utf8")));
   });
}
