"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(node) {
  if (node === node.window) {
    return node;
  }

  return node.nodeType === 9 ? node.defaultView || node.parentWindow : null;
};

exports["default"] = _default;