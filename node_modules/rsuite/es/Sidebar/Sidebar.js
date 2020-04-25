import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { defaultProps, prefix } from '../utils';
import { ContainerContext } from '../Container/Container';

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Sidebar, _React$Component);

  function Sidebar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Sidebar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$context;

    if ((_this$context = this.context) === null || _this$context === void 0 ? void 0 : _this$context.setContextState) {
      /** Notify the Container that the Sidebar is in the child node of the Container. */
      this.context.setContextState({
        hasSidebar: true
      });
    }
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props = this.props,
        className = _this$props.className,
        classPrefix = _this$props.classPrefix,
        collapsible = _this$props.collapsible,
        width = _this$props.width,
        style = _this$props.style,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "classPrefix", "collapsible", "width", "style"]);

    var addPrefix = prefix(classPrefix);
    var classes = classNames(classPrefix, className, (_classNames = {}, _classNames[addPrefix('collapse')] = collapsible, _classNames));

    var styles = _extends({
      flex: "0 0 " + width + "px",
      width: width
    }, style);

    return React.createElement("div", _extends({}, props, {
      className: classes,
      style: styles
    }));
  };

  return Sidebar;
}(React.Component);

Sidebar.contextType = ContainerContext;
Sidebar.propTypes = {
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  collapsible: PropTypes.bool,
  style: PropTypes.object
};
Sidebar.defaultProps = {
  width: 260
};
export default defaultProps({
  classPrefix: 'sidebar'
})(Sidebar);