/**
 * Removes trailing LF or CRLF
 * @param {String} string
 * @returns {String}
 */
function chomp(string) {
   const [secondLast, last] = string.slice(-2);
   if (last === '\n') {
      if (secondLast === '\r') {
         return string.slice(0, -2);
      } else {
         return string.slice(0, -1);
      }
   }
   return string;
}
/**
 * Removes trailing LF
 * @param {String} string
 * @returns {String}
 */
function chompLF(string) {
   if (string.slice(-1) === '\n') {
      return string.slice(0, -1);
   }
   return string;
}
/**
 * Removes trailing CRLF
 * @param {String} string
 * @returns {String}
 */
function chompCRLF(string) {
   if (string.slice(-2) === "\r\n") {
      return string.slice(0, -2);
   }
   return string;
}
/** The chomp.js module */
module.exports = {
   chomp,
   chompLF,
   chompCRLF,
};
