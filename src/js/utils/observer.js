// return a debounced observer that watches a DOM element and triggers when its chidren change.
// used to update things based on FinSweet filters.

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function createObserver(element, callback, delay = 300) {
  if (!element || typeof callback !== "function") {
    throw new Error("A valid element and callback function must be provided.");
  }

  const debouncedCallback = debounce(callback, delay);

  const observer = new MutationObserver(() => {
    debouncedCallback();
  });

  observer.observe(element, {
    childList: true,
    characterData: true,
    subtree: true,
  });

  return observer;
}

export { createObserver };
