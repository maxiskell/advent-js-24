/**
 * @param {string} ornaments
 * @return {number|undefined} - The price of the tree
 */
function calculatePrice(ornaments) {
  let prices = new Map([
    ["*", 1],
    ["o", 5],
    ["^", 10],
    ["#", 50],
    ["@", 100],
  ]);

  return (
    ornaments
      .split("")
      .reduce(
        (acc, curr, i, arr) =>
          acc +
          [1, -1][Number(prices.get(curr) < prices.get(arr[++i]))] *
            prices.get(curr),
        0,
      ) || undefined
  );
}
