/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let nextx = 0;
  let nexty = 0;

  for (let y = 0; y < board.length; y++) {
    let x = board[y].indexOf("@");
    if (x === -1) {
      continue;
    }

    nextx = x;
    nexty = y;
  }

  switch (mov) {
    case "U":
      nexty -= 1;
      break;
    case "D":
      nexty += 1;
      break;
    case "L":
      nextx -= 1;
      break;
    case "R":
      nextx += 1;
      break;
    default:
      break;
  }

  // out of bound
  if (
    nextx < 0 ||
    nexty < 0 ||
    nexty >= board.length ||
    nextx >= board[nexty].length ||
    board[nexty][nextx] === "0"
  ) {
    return "crash";
  }

  switch (board[nexty][nextx]) {
    case "o":
      return "crash";
    case "*":
      return "eat";
    default:
      return "none";
  }
}
