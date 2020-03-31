/**
 * Checks if `array` is an Array and it's empty Array.
 *
 * @param {Array} array The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
const isEmptyArray = array => Array.isArray(array) && array.length === 0;

export default isEmptyArray;
