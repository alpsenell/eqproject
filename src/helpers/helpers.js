/**
 * @param {function} callback
 * @param {number} delay
 * @return {function}
 */
export function debounce (callback, delay) {
  let timeout;

  return function (...args) {
    const that = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(that, args), delay);
  };
}
