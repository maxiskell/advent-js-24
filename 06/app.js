/**
 * @param {string[]} box
 * @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  for (let i = 1; i < box.length - 1; ++i) {
    let pos = box[i].indexOf("*");
    if (pos === -1) {
      continue;
    }

    return pos > 0 && pos < box[i].length - 1;
  }

  return false;
}
