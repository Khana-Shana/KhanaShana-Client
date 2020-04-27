"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Flippy", {
  enumerable: true,
  get: function get() {
    return _Flippy.default;
  }
});
Object.defineProperty(exports, "FrontSide", {
  enumerable: true,
  get: function get() {
    return _FlippyCard.FrontSide;
  }
});
Object.defineProperty(exports, "BackSide", {
  enumerable: true,
  get: function get() {
    return _FlippyCard.BackSide;
  }
});
exports.default = void 0;

var _Flippy = _interopRequireDefault(require("./Flippy"));

var _FlippyCard = require("./FlippyCard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Flippy.default;
exports.default = _default;