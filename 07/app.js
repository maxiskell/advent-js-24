/**
 * @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let stack = [];

  for (let p of packages) {
    if (p !== ")") {
      stack.push(p);
    } else {
      let tmp = [];
      let c = stack.pop();
      while (stack.length > 0 && c !== "(") {
        tmp.push(c);
        c = stack.pop();
      }

      stack.push(...tmp);
    }
  }

  return stack.join("");
}
