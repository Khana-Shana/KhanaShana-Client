import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { prefix, getUnhandledProps } from '../utils';

var DropdownMenuGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenuGroup, _React$Component);

  function DropdownMenuGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenuGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        classPrefix = _this$props.classPrefix,
        className = _this$props.className,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "classPrefix", "className"]);

    var addPrefix = prefix(classPrefix);
    var classes = classNames(classPrefix, className);
    var unhandled = getUnhandledProps(DropdownMenuGroup, rest);
    return React.createElement("div", _extends({
      role: "listitem",
      className: classes
    }, unhandled), React.createElement("div", {
      className: addPrefix('title'),
      tabIndex: -1
    }, React.createElement("span", null, children), React.createElement("span", {
      "aria-hidden": "true",
      className: addPrefix('caret')
    })));
  };

  return DropdownMenuGroup;
}(React.Component);

DropdownMenuGroup.propTypes = {
  classPrefix: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
DropdownMenuGroup.defaultProps = {
  classPrefix: 'dropdown-menu-group'
};
export default DropdownMenuGroup;