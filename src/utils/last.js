import isEmptyArray from './isEmptyArray';

/**
 * Gets the last element of `array`.
 *
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 */
const last = array => (
    isEmptyArray ? undefined : array[array.length - 1]
);

export default last;
