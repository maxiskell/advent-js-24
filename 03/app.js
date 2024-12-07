/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  let result = {};

  for (let item of inventory) {
    if (!result[item.category]) {
      result[item.category] = {};
    }

    result[item.category][item.name] =
      (result[item.category][item.name] ?? 0) + item.quantity;
  }

  return result;
}
