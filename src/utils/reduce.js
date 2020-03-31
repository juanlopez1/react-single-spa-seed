import isEmptyArray from './isEmptyArray';

/**
 * Reduces `array` to a value which is the accumulated result of running
 * each element in `array` thru `callback`, where each successive
 * invocation is supplied the return value of the previous.
 * The 'callback' is invoked with four arguments:
 * (accumulator, value, index|key, array).
 *
 * @param {Array} array The collection to iterate over.
 * @param {Function} [callback] The function invoked per iteration.
 * @param {*} [initialValue] The initial value.
 * @returns {*} Returns the accumulated value.
 */
const reduce = (array, callback, initialValue) => (
    Array.isArray(array) && !isEmptyArray(array) ? array.reduce(callback, initialValue) : initialValue || undefined
);

export default reduce;
