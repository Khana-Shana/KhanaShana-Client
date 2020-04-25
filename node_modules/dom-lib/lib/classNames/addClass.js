"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _hasClass = _interopRequireDefault(require("./hasClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(target, className) {
  if (className) {
    if (target.classList) {
      target.classList.add(className);
    } else if (!(0, _hasClass["default"])(target, className)) {
      target.className = target.className + " " + className;
    }
  }

  return target;
};

exports["default"] = _default;