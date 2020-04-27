"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _hasClass = _interopRequireDefault(require("./hasClass"));

var _addClass = _interopRequireDefault(require("./addClass"));

var _removeClass = _interopRequireDefault(require("./removeClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(target, className) {
  if ((0, _hasClass["default"])(target, className)) {
    return (0, _removeClass["default"])(target, className);
  }

  return (0, _addClass["default"])(target, className);
};

exports["default"] = _default;