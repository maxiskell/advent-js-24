/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let resultMap = {
    "·": "none",
    "*": "eat",
    o: "crash",
    undefined: "crash",
  };

  let y = board.findIndex((row) => row.includes("@"));
  let x = board[y].indexOf("@");

  let nextPositions = {
    U: [x, y - 1],
    D: [x, y + 1],
    L: [x - 1, y],
    R: [x + 1, y],
  };

  let [nextx, nexty] = nextPositions[mov];

  return resultMap[board[nexty]?.[nextx]];
}
