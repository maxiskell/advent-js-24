/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let result = [];

  let line = [];
  for (let i = 0; i < indices.length; ++i) {
    line = Array(length).fill("~");

    if (indices[i] > 0) {
      line[indices[i]] = "r";
    } else if (indices[i] < 0) {
      line[length - Math.abs(indices[i])] = "r";
    }

    result.push(
      `${" ".repeat(indices.length - i - 1)}${line.join("")} /${i + 1}`,
    );
  }

  return result.join("\n");
}
