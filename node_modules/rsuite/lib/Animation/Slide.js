"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Transition = _interopRequireDefault(require("./Transition"));

var Slide = React.forwardRef(function (_ref, ref) {
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'right' : _ref$placement,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["timeout", "placement"]);
  var enterClassName = (0, _classnames.default)('slide-in', placement, 'animated');
  var exitClassName = (0, _classnames.default)('slide-out', placement, 'animated');
  return React.createElement(_Transition.default, (0, _extends2.default)({}, props, {
    ref: ref,
    animation: true,
    timeout: timeout,
    enteringClassName: enterClassName,
    enteredClassName: enterClassName,
    exitingClassName: exitClassName,
    exitedClassName: exitClassName
  }));
});
Slide.displayName = 'Slide';
var _default = Slide;
exports.default = _default;
module.exports = exports.default;