/**
 * @param {{ value: string; left: any; right: any } | null} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
  if (tree === null) return 0;

  let lh = treeHeight(tree.left);
  let rh = treeHeight(tree.right);

  return 1 + Math.max(lh, rh);
}
