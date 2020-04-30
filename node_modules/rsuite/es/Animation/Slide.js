import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import classNames from 'classnames';
import Transition from './Transition';
var Slide = React.forwardRef(function (_ref, ref) {
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'right' : _ref$placement,
      props = _objectWithoutPropertiesLoose(_ref, ["timeout", "placement"]);

  var enterClassName = classNames('slide-in', placement, 'animated');
  var exitClassName = classNames('slide-out', placement, 'animated');
  return React.createElement(Transition, _extends({}, props, {
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
export default Slide;