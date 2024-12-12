/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  return filename.match(/(\d+\_)([a-zA-Z-_]+\.[a-zA-Z-_]+)/)?.[2];
}
