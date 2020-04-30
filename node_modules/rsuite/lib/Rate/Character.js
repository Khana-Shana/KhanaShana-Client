"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../utils");

var _domLib = require("dom-lib");

var _characterStatus;

var characterStatus = (_characterStatus = {}, _characterStatus[0] = 'empty', _characterStatus[0.5] = 'half', _characterStatus[1] = 'full', _characterStatus);

var getKey = function getKey(a, b) {
  return (0, _domLib.contains)(a, b) ? 'before' : 'after';
};

var Character = React.forwardRef(function (_ref, ref) {
  var _classNames;

  var children = _ref.children,
      vertical = _ref.vertical,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      status = _ref.status,
      disabled = _ref.disabled,
      onMouseMove = _ref.onMouseMove,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "vertical", "onClick", "onKeyDown", "status", "disabled", "onMouseMove"]);
  var classPrefix = (0, _utils.defaultClassPrefix)('rate-character');
  var addPrefix = (0, _utils.prefix)(classPrefix);
  var beforeRef = React.createRef();

  var handleMouseMove = function handleMouseMove(event) {
    onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(getKey(beforeRef.current, event.target), event);
  };

  var handleClick = function handleClick(event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(getKey(beforeRef.current, event.target), event);
  };

  return React.createElement("li", (0, _extends2.default)({}, rest, {
    ref: ref,
    tabIndex: 0,
    onClick: disabled ? null : handleClick,
    onKeyDown: disabled ? null : onKeyDown,
    onMouseMove: disabled ? null : handleMouseMove,
    className: (0, _classnames.default)(classPrefix, addPrefix(characterStatus[status]))
  }), React.createElement("div", {
    ref: beforeRef,
    className: (0, _classnames.default)(addPrefix('before'), (_classNames = {}, _classNames[addPrefix('vertical')] = vertical, _classNames))
  }, children), React.createElement("div", {
    className: addPrefix('after')
  }, children));
});
Character.displayName = 'Character';
var _default = Character;
exports.default = _default;
module.exports = exports.default;