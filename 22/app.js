/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  let sets = [];

  function backtrack(pos, curr) {
    if (pos >= gifts.length) {
      sets.push([...curr]);
      return;
    }

    curr.push(gifts[pos]);
    backtrack(pos + 1, curr);
    curr.pop();
    backtrack(pos + 1, curr);
  }

  backtrack(0, []);

  return sets
    .filter((s) => s.length > 0)
    .sort((a, b) => a.length - b.length)
    .sort((a, b) => a[0] < b[0]);
}
