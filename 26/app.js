/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
  let [wh, wm, ws] = timeWorked.split(":").map(Number);
  let [th, tm, ts] = totalTime.split(":").map(Number);

  let wsecs = wh * 3600 + wm * 60 + ws;
  let tsecs = th * 3600 + tm * 60 + ts;

  return `${Math.round((wsecs / tsecs) * 100)}%`;
}
