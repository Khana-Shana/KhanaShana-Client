"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(target, className) {
  if (target.classList) {
    return !!className && target.classList.contains(className);
  }

  return (" " + target.className + " ").indexOf(" " + className + " ") !== -1;
};

exports["default"] = _default;