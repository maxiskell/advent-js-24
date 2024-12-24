/**
 * @typedef {object} TreeNode
 * @property {string} value
 * @property {TreeNode} [left]
 * @property {TreeNode} [right]
 */

/**
 * @param {TreeNode} tree1 - The first binary tree.
 * @param {TreeNode} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  /**
   * @param {TreeNode | undefined} tree1 - The first binary tree.
   * @param {TreeNode | undefined} tree2 - The second binary tree.
   * @returns {boolean}
   */
  function areMirroredTrees(tree1, tree2) {
    if (tree1 === undefined && tree2 === undefined) {
      return true;
    }

    if (tree1 === undefined || tree2 === undefined) {
      return false;
    }

    return (
      tree1?.value === tree2?.value &&
      areMirroredTrees(tree1.left, tree2.right) &&
      areMirroredTrees(tree1.right, tree2.left)
    );
  }

  return [areMirroredTrees(tree1, tree2), tree1.value];
}
