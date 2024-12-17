/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  let p = 1;

  while (p < s.length) {
    if (s[p - 1] === s[p]) {
      s = s.slice(0, p - 1) + s.slice(p + 1);
      p--;
    } else {
      p++;
    }
  }

  return s;
}
