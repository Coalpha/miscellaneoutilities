/**
 * Removes terminal color
 *
 * @param {String} s the input string
 * @returns {String}
 */
module.exports = function colorDrain(s) {
   return s.replace(/(\033\[([\d;]+)m)/g, '');
}
