/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  let ip = 0;
  let regs = {};
  let ops = {
    MOV: (a1, a2) => (regs[a2] = isNaN(a1) ? Number(regs[a1]) : Number(a1)),
    INC: (reg) => (regs[reg] += 1),
    DEC: (reg) => (regs[reg] -= 1),
    JMP: (a1, a2) => regs[a1] === 0 && (ip = a2 - 1),
  };

  while (ip < instructions.length) {
    let [op, a1, a2] = instructions[ip].split(" ");

    regs[a1] ??= 0;
    ops[op](a1, a2);
    ip++;
  }

  return regs.A;
}
