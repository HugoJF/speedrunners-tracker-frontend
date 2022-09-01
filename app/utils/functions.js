export function safeInvoke(func, ...args) {
  if (typeof func === 'function') {
    func(...args);
  }
}
