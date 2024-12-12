/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  return filename.match(/_([\w-]+\.\w+)/)[1];
}
