/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable(data) {
  let colwidth = {};
  for (let row of data) {
    for (let [k, v] of Object.entries(row)) {
      colwidth[k] = Math.max(~~colwidth[k], k.length + 2, `${v}`.length + 2);
    }
  }

  let separator = `+${Object.keys(colwidth)
    .map((k) => `${"-".repeat(colwidth[k])}`)
    .join("+")}+`;

  let header = "|";
  for (let col in colwidth) {
    header +=
      ` ${col[0].toUpperCase()}${col.slice(1)}`.padEnd(colwidth[col]) + "|";
  }

  let rows = data
    .map(
      (row) =>
        `|${Object.keys(colwidth)
          .map((col) => ` ${row[col]}`.padEnd(colwidth[col]))
          .join("|")}|`,
    )
    .join("\n");

  return `${separator}
${header}
${separator}
${rows}
${separator}`;
}
