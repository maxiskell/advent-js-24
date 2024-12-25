/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let ip = 0;
  let val = 0;

  while (ip < code.length) {
    let instruction = code[ip];

    switch (instruction) {
      case "+":
        val++;
        break;
      case "-":
        val--;
        break;
      case "[":
      case "]":
        if (val === 0) ip = code.indexOf("]", ip);
        else ip = code.lastIndexOf("[", ip);
        break;
      case "{":
        if (val === 0) ip = code.indexOf("}", ip);
        break;
    }

    ip++;
  }

  return val;
}
