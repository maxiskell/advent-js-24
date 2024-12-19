/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  let boxes = [];

  while (weight > 0) {
    if (weight >= 10) {
      weight -= 10;
      boxes.push([...boxRepresentations[10]]);
    } else if (weight >= 5) {
      weight -= 5;
      boxes.push([...boxRepresentations[5]]);
    } else if (weight >= 2) {
      weight -= 2;
      boxes.push([...boxRepresentations[2]]);
    } else {
      boxes.push([...boxRepresentations[1]]);
      break;
    }
  }

  boxes.reverse();

  let stack = `${boxes[0].join("\n")}\n`;

  for (let i = 1; i < boxes.length; ++i) {
    let box = [...boxes[i]];
    box[0] = box[0].slice(boxes[i - 1][0].length);
    stack = `${stack.slice(0, -1)}${box.map((l) => l.trim()).join("\n")}\n`;
  }

  return stack.slice(0, -1);
}
