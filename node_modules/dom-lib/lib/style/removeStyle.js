"use strict";

exports.__esModule = true;
exports["default"] = void 0;

function removeStyle(node, key) {
  if ('removeProperty' in node.style) {
    node.style.removeProperty(key);
  } else if (typeof node.style.removeAttribute === 'function') {
    node.style.removeAttribute(key);
  }
}
/**
 * key(s) typeof [string , array] ?
 */


var _default = function _default(node, keys) {
  if (typeof keys === 'string') {
    removeStyle(node, keys);
  } else if (Object.prototype.toString.call(keys) === '[object Array]') {
    keys.forEach(function (key) {
      return removeStyle(node, key);
    });
  }
};

exports["default"] = _default;