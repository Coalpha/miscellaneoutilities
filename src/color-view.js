/**
 * Makes color escapes visible
 *
 * @param {String} s the input string
 * @param {Boolean} [hex] uses `\x1b` instead of `\033`
 * @returns {String}
 */
module.exports = function colorView(s, hex = false) {
   return s.replace(/(\033\[([\d;]+)m)/g, `$1\\${hex ? "x1b" : "033"}[$2m`);
}
