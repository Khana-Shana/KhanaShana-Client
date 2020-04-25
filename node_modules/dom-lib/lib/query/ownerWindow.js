"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _ownerDocument = _interopRequireDefault(require("./ownerDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(componentOrElement) {
  var doc = (0, _ownerDocument["default"])(componentOrElement);
  return doc.defaultView;
};

exports["default"] = _default;