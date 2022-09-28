export default function debounce(func, delay) {
  let timeout;
  function executedFunc(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
  executedFunc.cancel = () => {
    clearTimeout(timeout);
  }
  return executedFunc
}