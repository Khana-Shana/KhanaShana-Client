import { addClass, removeClass } from 'dom-lib';

var toggleClass = function toggleClass(node, className, condition) {
  if (condition) {
    addClass(node, className);
  } else {
    removeClass(node, className);
  }
};

export default (function (node, className, condition) {
  if (!node) {
    return;
  }

  if (Array.isArray(node) || Object.getPrototypeOf(node).hasOwnProperty('length')) {
    node = node;
    Array.from(node).forEach(function (item) {
      toggleClass(item, className, condition);
    });
    return;
  }

  toggleClass(node, className, condition);
});