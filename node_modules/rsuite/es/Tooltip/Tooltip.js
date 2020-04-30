import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _omit from "lodash/omit";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { prefix, defaultProps } from '../utils';
import { overlayProps } from '../Whisper/Whisper';

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Tooltip, _React$Component);

  function Tooltip() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tooltip.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        classPrefix = _this$props.classPrefix,
        children = _this$props.children,
        style = _this$props.style,
        visible = _this$props.visible,
        htmlElementRef = _this$props.htmlElementRef,
        rest = _objectWithoutPropertiesLoose(_this$props, ["className", "classPrefix", "children", "style", "visible", "htmlElementRef"]);

    var addPrefix = prefix(classPrefix);
    var classes = classNames(classPrefix, className);

    var styles = _extends({
      opacity: visible ? 1 : undefined
    }, style);

    return React.createElement("div", _extends({}, _omit(rest, overlayProps), {
      role: "tooltip",
      className: classes,
      style: styles,
      ref: htmlElementRef
    }), React.createElement("div", {
      className: addPrefix('arrow')
    }), React.createElement("div", {
      className: addPrefix('inner')
    }, children));
  };

  return Tooltip;
}(React.Component);

Tooltip.propTypes = {
  visible: PropTypes.bool,
  classPrefix: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
export default defaultProps({
  classPrefix: 'tooltip'
})(Tooltip);