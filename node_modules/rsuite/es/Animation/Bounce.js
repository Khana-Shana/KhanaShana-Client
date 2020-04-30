import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import Transition from './Transition';
var Bounce = React.forwardRef(function (_ref, ref) {
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      props = _objectWithoutPropertiesLoose(_ref, ["timeout"]);

  return React.createElement(Transition, _extends({}, props, {
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
export default Bounce;