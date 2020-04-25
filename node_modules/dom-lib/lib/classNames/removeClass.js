"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(target, className) {
  if (className) {
    if (target.classList) {
      target.classList.remove(className);
    } else {
      target.className = target.className.replace(new RegExp("(^|\\s)" + className + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
      .replace(/^\s*|\s*$/g, ''); // trim the ends
    }
  }

  return target;
};

exports["default"] = _default;