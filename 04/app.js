/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  let level = ornament;
  let padding = height - 1;
  let tree = `${"_".repeat(padding)}${level}${"_".repeat(padding)}\n`;
  let trunk = `${"_".repeat(padding)}#${"_".repeat(padding)}
${"_".repeat(padding)}#${"_".repeat(padding)}`;

  for (let i = 0; i < height - 1; i++) {
    level = `${ornament}${level}${ornament}`;
    padding = height - i - 2;
    tree += `${"_".repeat(padding)}${level}${"_".repeat(padding)}\n`;
  }

  tree += trunk;

  return tree;
}
