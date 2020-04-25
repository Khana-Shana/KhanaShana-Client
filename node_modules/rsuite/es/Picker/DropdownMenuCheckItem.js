import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import { prefix, getUnhandledProps, defaultProps } from '../utils';
import Checkbox from '../Checkbox';
import classNames from 'classnames';

var DropdownMenuCheckItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenuCheckItem, _React$Component);

  function DropdownMenuCheckItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleChange = function (value, checked, event) {
      var _this$props$onSelect, _this$props;

      (_this$props$onSelect = (_this$props = _this.props).onSelect) === null || _this$props$onSelect === void 0 ? void 0 : _this$props$onSelect.call(_this$props, value, event, checked);
    };

    _this.handleCheck = function (event) {
      var _this$props2 = _this.props,
          value = _this$props2.value,
          disabled = _this$props2.disabled,
          onCheck = _this$props2.onCheck,
          active = _this$props2.active;

      if (!disabled) {
        onCheck === null || onCheck === void 0 ? void 0 : onCheck(value, event, !active);
      }
    };

    _this.handleSelectItem = function (event) {
      var _this$props3 = _this.props,
          value = _this$props3.value,
          disabled = _this$props3.disabled,
          onSelectItem = _this$props3.onSelectItem,
          active = _this$props3.active;

      if (!disabled) {
        onSelectItem === null || onSelectItem === void 0 ? void 0 : onSelectItem(value, event, !active);
      }
    };

    return _this;
  }

  var _proto = DropdownMenuCheckItem.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props4 = this.props,
        value = _this$props4.value,
        active = _this$props4.active,
        onKeyDown = _this$props4.onKeyDown,
        disabled = _this$props4.disabled,
        focus = _this$props4.focus,
        children = _this$props4.children,
        className = _this$props4.className,
        classPrefix = _this$props4.classPrefix,
        checkable = _this$props4.checkable,
        indeterminate = _this$props4.indeterminate,
        Component = _this$props4.componentClass,
        CheckboxItem = _this$props4.checkboxComponentClass,
        rest = _objectWithoutPropertiesLoose(_this$props4, ["value", "active", "onKeyDown", "disabled", "focus", "children", "className", "classPrefix", "checkable", "indeterminate", "componentClass", "checkboxComponentClass"]);

    var addPrefix = prefix(classPrefix);
    var unhandled = getUnhandledProps(DropdownMenuCheckItem, rest);
    var checkboxItemClasses = classNames(classPrefix, (_classNames = {}, _classNames[addPrefix('focus')] = focus, _classNames));
    return React.createElement(Component, _extends({}, unhandled, {
      className: className,
      role: "menuitem",
      tabIndex: -1
    }), React.createElement(CheckboxItem, {
      value: value,
      role: "presentation",
      disabled: disabled,
      checked: active,
      checkable: checkable,
      indeterminate: indeterminate,
      className: checkboxItemClasses,
      onKeyDown: disabled ? null : onKeyDown,
      onChange: this.handleChange,
      onClick: this.handleSelectItem,
      onCheckboxClick: this.handleCheck
    }, children));
  };

  return DropdownMenuCheckItem;
}(React.Component);

DropdownMenuCheckItem.propTypes = {
  classPrefix: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  checkable: PropTypes.bool,
  indeterminate: PropTypes.bool,
  value: PropTypes.any,
  onSelect: PropTypes.func,
  onCheck: PropTypes.func,
  onSelectItem: PropTypes.func,
  onKeyDown: PropTypes.func,
  focus: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  getItemData: PropTypes.func,
  componentClass: PropTypes.elementType,
  checkboxComponentClass: PropTypes.elementType
};
DropdownMenuCheckItem.defaultProps = {
  checkable: true,
  componentClass: 'div',
  checkboxComponentClass: Checkbox
};
export default defaultProps({
  classPrefix: 'check-item'
})(DropdownMenuCheckItem);