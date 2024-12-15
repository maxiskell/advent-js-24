/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  let moves = 0;
  let taken = new Set();
  let dist = 0;
  let mindist = Infinity;
  let closest = 0;

  for (let r of reindeer) {
    dist = 0;
    mindist = Infinity;
    closest = 0;

    for (let s of stables) {
      if (taken.has(s)) continue;

      dist = Math.abs(r - s);
      if (dist < mindist) {
        mindist = dist;
        closest = s;
      }
    }

    if (mindist === Infinity) continue;

    moves += mindist;
    taken.add(closest);
  }

  return moves;
}
