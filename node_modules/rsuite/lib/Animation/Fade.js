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

var Fade = React.forwardRef(function (_ref, ref) {
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["timeout", "className"]);
  return React.createElement(_Transition.default, (0, _extends2.default)({}, props, {
    ref: ref,
    timeout: timeout,
    className: (0, _classnames.default)(className, 'fade'),
    enteredClassName: "in",
    enteringClassName: "in"
  }));
});
Fade.displayName = 'Fade';
var _default = Fade;
exports.default = _default;
module.exports = exports.default;