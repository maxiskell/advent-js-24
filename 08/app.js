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
