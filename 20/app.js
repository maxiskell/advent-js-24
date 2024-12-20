/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  /** @type GiftsCount **/
  let receivedCount = {};
  for (let r of received) receivedCount[r] = (receivedCount[r] ?? 0) + 1;

  /** @type GiftsCount **/
  let expectedCount = {};
  for (let e of expected) expectedCount[e] = (expectedCount[e] ?? 0) + 1;

  /** @type GiftsCount **/
  let missing = {};
  for (let gift in expectedCount) {
    let diff = expectedCount[gift] - (receivedCount[gift] ?? 0);

    if (diff > 0) missing[gift] = diff;
  }

  /** @type GiftsCount **/
  let extra = {};
  for (let gift in receivedCount) {
    let diff = receivedCount[gift] - (expectedCount[gift] ?? 0);

    if (diff > 0) extra[gift] = diff;
  }

  return { missing, extra };
}
