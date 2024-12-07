/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  let count = {};
  for (let shoe of shoes) {
    if (!count[shoe.size]) {
      count[shoe.size] = { I: 0, R: 0 };
    }

    count[shoe.size][shoe.type]++;
  }

  let result = [];
  for (let size in count) {
    let pairs = Math.min(count[size].I, count[size].R);

    for (let i = 0; i < pairs; ++i) {
      result.push(size);
    }
  }

  return result.map(Number);
}
