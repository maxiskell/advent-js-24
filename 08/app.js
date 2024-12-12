/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  return indices
    .map((pos, i) => {
      let lane = Array(length)
        .fill("~")
        .with(pos, pos !== 0 ? "r" : "~")
        .join("");

      return `${lane.padStart(length + indices.length - ++i)} /${i}`;
    })
    .join("\n");
}
const races = [
  drawRace([0, 5, -3], 10),
  /*
  ~~~~~~~~~~ /1
  ~~~~~r~~~~ /2
  ~~~~~~~r~~ /3
  */

  drawRace([2, -1, 0, 5], 8),
  /*
  ~~r~~~~~ /1
  ~~~~~~~r /2
  ~~~~~~~~ /3
  ~~~~~r~~ /4
  */

  drawRace([3, 7, -2], 12),
  /*
  ~~~r~~~~~~~~ /1
  ~~~~~~~~r~~~ /2
  ~~~~~~~~~r~~ /3
  */
];

for (let r of races) console.log(r);
