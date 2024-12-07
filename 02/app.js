/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  let longestLength = Math.max(...names.map((n) => n.length));

  return `${"".padEnd(longestLength + 4, "*")}
${names.map((name) => `* ${name.padEnd(longestLength, " ")} *`).join("\n")}
${"".padEnd(longestLength + 4, "*")}`;
}
