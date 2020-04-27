import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
var SafeAnchor = React.forwardRef(function (props, ref) {
  var _props$componentClass = props.componentClass,
      Component = _props$componentClass === void 0 ? 'a' : _props$componentClass,
      disabled = props.disabled,
      rest = _objectWithoutPropertiesLoose(props, ["componentClass", "disabled"]);

  var handleClick = function handleClick(event) {
    var _rest$onClick;

    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    (_rest$onClick = rest.onClick) === null || _rest$onClick === void 0 ? void 0 : _rest$onClick.call(rest, event);
  };

  if (disabled) {
    rest.tabIndex = -1;
    rest['aria-disabled'] = true;
  }

  return React.createElement(Component, _extends({
    ref: ref
  }, rest, {
    onClick: handleClick
  }));
});
SafeAnchor.displayName = 'SafeAnchor';
SafeAnchor.propTypes = {
  disabled: PropTypes.bool,

  /** @default 'a' */
  componentClass: PropTypes.elementType
};
export default SafeAnchor;