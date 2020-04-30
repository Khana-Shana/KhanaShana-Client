"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _Transition = _interopRequireDefault(require("./Transition"));

var _Fade = _interopRequireDefault(require("./Fade"));

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _Bounce = _interopRequireDefault(require("./Bounce"));

var _Slide = _interopRequireDefault(require("./Slide"));

var Animation = {
  Transition: _Transition.default,
  Fade: _Fade.default,
  Collapse: _Collapse.default,
  Bounce: _Bounce.default,
  Slide: _Slide.default
};
var _default = Animation;
exports.default = _default;
module.exports = exports.default;