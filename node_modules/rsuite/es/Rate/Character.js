import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _characterStatus;

import * as React from 'react';
import classNames from 'classnames';
import { prefix, defaultClassPrefix } from '../utils';
import { contains } from 'dom-lib';
var characterStatus = (_characterStatus = {}, _characterStatus[0] = 'empty', _characterStatus[0.5] = 'half', _characterStatus[1] = 'full', _characterStatus);

var getKey = function getKey(a, b) {
  return contains(a, b) ? 'before' : 'after';
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
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "vertical", "onClick", "onKeyDown", "status", "disabled", "onMouseMove"]);

  var classPrefix = defaultClassPrefix('rate-character');
  var addPrefix = prefix(classPrefix);
  var beforeRef = React.createRef();

  var handleMouseMove = function handleMouseMove(event) {
    onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(getKey(beforeRef.current, event.target), event);
  };

  var handleClick = function handleClick(event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(getKey(beforeRef.current, event.target), event);
  };

  return React.createElement("li", _extends({}, rest, {
    ref: ref,
    tabIndex: 0,
    onClick: disabled ? null : handleClick,
    onKeyDown: disabled ? null : onKeyDown,
    onMouseMove: disabled ? null : handleMouseMove,
    className: classNames(classPrefix, addPrefix(characterStatus[status]))
  }), React.createElement("div", {
    ref: beforeRef,
    className: classNames(addPrefix('before'), (_classNames = {}, _classNames[addPrefix('vertical')] = vertical, _classNames))
  }, children), React.createElement("div", {
    className: addPrefix('after')
  }, children));
});
Character.displayName = 'Character';
export default Character;