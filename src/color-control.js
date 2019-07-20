const controlChar = require("./control").char;
/**
 * @param {string} string
 * @returns {Array<[("color"|"control"|"null"), string]>}
 */
module.exports = function colorControl(string) {
   /** @type {Array<[type_t, string]>} */
   const out = [];
   const len = string.length;
   for (let i = 0; i < len; ++i) {
      const c = string[i];
      if (c === '\033' && string[i + 1] === '[') {
         for (let j = i + 2; j < len; ++j) {
            const c = string[j];
            if (/[\d;]/.test(c)) {
               continue;
            } else if (c === 'm') {
               out.push(["color", string.slice(i + 2, j + 1)]);
               i = j;
            }
            break;
         }
         out.push(["control", "ESC"]);
      } else {
         const [isControl, string] = controlChar(c);
         out.push([isControl ? "control" : "null", string]);
      }
   }
   return out;
}
