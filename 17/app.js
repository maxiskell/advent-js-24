/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const res = grid.map(() => []);

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      res[i][j] =
        !!grid[i - 1]?.[j - 1] +
        !!grid[i - 1]?.[j] +
        !!grid[i - 1]?.[j + 1] +
        !!grid[i]?.[j - 1] +
        !!grid[i]?.[j + 1] +
        !!grid[i + 1]?.[j - 1] +
        !!grid[i + 1]?.[j] +
        !!grid[i + 1]?.[j + 1];
    }
  }

  return res;
}
