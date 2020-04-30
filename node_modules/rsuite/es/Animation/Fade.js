import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import classNames from 'classnames';
import Transition from './Transition';
var Fade = React.forwardRef(function (_ref, ref) {
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["timeout", "className"]);

  return React.createElement(Transition, _extends({}, props, {
    ref: ref,
    timeout: timeout,
    className: classNames(className, 'fade'),
    enteredClassName: "in",
    enteringClassName: "in"
  }));
});
Fade.displayName = 'Fade';
export default Fade;