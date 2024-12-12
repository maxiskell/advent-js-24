/**
 * @param {string} packages with parentheses
 * @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  while (packages.indexOf("(") > -1) {
    packages = packages.replace(/\((\w+)\)/, (_, v) =>
      [...v].reverse().join(""),
    );
  }

  return packages;
}
