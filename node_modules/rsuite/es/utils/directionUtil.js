/**
 * gets computed document direction
 */
export default (function () {
  return typeof window !== 'undefined' && window.getComputedStyle(document.body).direction === 'rtl';
});