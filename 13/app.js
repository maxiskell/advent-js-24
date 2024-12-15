/**
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  let inverted = {
    L: "R",
    R: "L",
    U: "D",
    D: "U",
  };

  let dirs = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  let mods = {
    "*": false,
    "!": false,
    "?": false,
  };

  let x = 0;
  let y = 0;
  let dir = [0, 0];

  let seen = new Set();

  for (let i = 0; i < moves.length; ++i) {
    let m = moves[i];

    if (Object.keys(mods).includes(m)) {
      mods[m] = true;
      continue;
    }

    if (mods["!"]) {
      m = inverted[m];
      mods["!"] = false;
    }

    dir = dirs[m];

    if (mods["*"]) {
      dir = dir.map((d) => d * 2);
      mods["*"] = false;
    }

    if (mods["?"]) {
      dir = !seen.has(m) ? dir : [0, 0];
      mods["?"] = false;
    }

    x += dir[0];
    y += dir[1];

    seen.add(m);
  }

  if (x !== 0 || y !== 0) {
    return [x, y];
  }

  return true;
}

let tests = [
  // isRobotBack("R"), // [1, 0]
  // isRobotBack("RL"), // true
  // isRobotBack("RLUD"), // true
  isRobotBack("*RU"), // [2, 1]
  // isRobotBack("R*U"), // [1, 2]
  // isRobotBack("LLL!R"), // [-4, 0]
  // isRobotBack("R?R"), // [1, 0]
  // isRobotBack("U?D"), // true
  // isRobotBack("R!L"), // [2,0]
  // isRobotBack("U!D"), // [0,2]
  // isRobotBack("R?L"), // true
  // isRobotBack("U?U"), // [0,1]
  // isRobotBack("*U?U"), // [0,2]
  // isRobotBack("U?D?U"), // true
  //
  // // Step-by-step examples:
  // isRobotBack("R!U?U"), // [1,0]
  // 'R'  -> moves to the right
  // '!U' -> inverts and becomes 'D'
  // '?U' -> moves upwards, because the 'U' movement hasn't been done yet

  // isRobotBack("UU!U?D"), // [0,1]
  // 'U'  -> moves upwards
  // 'U'  -> moves upwards
  // '!U' -> inverts and becomes 'D'
  // '?D' -> does not move, since the 'D' movement has already been done
];

for (let t of tests) console.log(t);
