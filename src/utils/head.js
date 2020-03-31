import isEmptyArray from './isEmptyArray';

/**
 * Gets the first element of `array`.
 *
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 */
const head = array => (
    isEmptyArray(array) ? undefined : array[0]
);

export default head;
