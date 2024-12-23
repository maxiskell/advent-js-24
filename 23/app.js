/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  return [
    ...new Set(
      Array.from({ length: Math.max(...nums) }).map((_, i) => i + 1),
    ).difference(new Set(nums)),
  ];
}
