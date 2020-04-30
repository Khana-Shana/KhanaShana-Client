"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _Transition = _interopRequireDefault(require("./Transition"));

var Bounce = React.forwardRef(function (_ref, ref) {
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["timeout"]);
  return React.createElement(_Transition.default, (0, _extends2.default)({}, props, {
    ref: ref,
    animation: true,
    timeout: timeout,
    enteringClassName: "bounce-in animated",
    enteredClassName: "bounce-in animated",
    exitingClassName: "bounce-out animated",
    exitedClassName: "bounce-out animated"
  }));
});
Bounce.displayName = 'Bounce';
var _default = Bounce;
exports.default = _default;
module.exports = exports.default;