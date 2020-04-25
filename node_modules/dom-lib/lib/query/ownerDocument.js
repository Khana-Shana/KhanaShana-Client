"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(node) {
  return node && node.ownerDocument || document;
};

exports["default"] = _default;