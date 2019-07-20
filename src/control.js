const controlCharacters = [
   "NUL", "SOH", "STX", "ETX",
   "EOT", "ENQ", "ACK", "BEL",
   "BS", "HT", "LF", "VT",
   "FF", "CR", "SO", "SI",
   "DLE", "DC1", "DC2", "DC3",
   "DC4", "NAK", "SYN", "ETB",
   "CAN", "EOM", "SUB", "ESC",
   "FS", "GS", "RS", "US",
];
/**
 * @param {String} char
 * @returns {[boolean, String]}
 */
function controlChar(char) {
   const cc = controlCharacters[char.charCodeAt(0)];
   if (cc) {
      return [true, cc];
   }
   return [false, char];
}
/**
 * @param {String} string
 * @returns {Array<ControlResult>}
 */
function control(string) {
   return string.split('').map(controlChar);
}
control.char = controlChar;
module.exports = control;
