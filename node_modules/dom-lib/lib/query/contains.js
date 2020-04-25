"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _canUseDOM = _interopRequireDefault(require("./canUseDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable */
var fallback = function fallback(context, node) {
  if (node) {
    do {
      if (node === context) {
        return true;
      }
    } while (node = node.parentNode);
  }

  return false;
}; // HTML DOM and SVG DOM may have different support levels,
// so we need to check on context instead of a document root element.


var contains = function contains(context, node) {
  if (context.contains) {
    return context.contains(node);
  } else if (context.compareDocumentPosition) {
    return context === node || !!(context.compareDocumentPosition(node) & 16);
  }

  return fallback(context, node);
};

var _default = function () {
  return _canUseDOM["default"] ? contains : fallback;
}();

exports["default"] = _default;