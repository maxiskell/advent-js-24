/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  let found = agenda.split("\n").filter((entry) => entry.includes(phone));

  if (found.length !== 1) return null;

  return {
    name: found[0].match(/<(.*)>/)[1],
    address: found[0].replace(/<(.*)>|\+[\d-]+/g, "").trim(),
  };
}
