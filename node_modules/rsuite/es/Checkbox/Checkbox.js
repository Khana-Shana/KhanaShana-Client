import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _isUndefined from "lodash/isUndefined";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { prefix, defaultProps, getUnhandledProps, partitionHTMLProps, refType } from '../utils';
import { CheckboxContext } from '../CheckboxGroup/CheckboxGroup';

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Checkbox, _React$Component);

  function Checkbox(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.context = {};

    _this.handleChange = function (event) {
      var _this$context$onChang, _this$context;

      var _this$props = _this.props,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          value = _this$props.value;
      var checked = !_this.isChecked();

      if (disabled) {
        return;
      }

      _this.setState({
        checked: checked
      });

      onChange === null || onChange === void 0 ? void 0 : onChange(value, checked, event);
      (_this$context$onChang = (_this$context = _this.context).onChange) === null || _this$context$onChang === void 0 ? void 0 : _this$context$onChang.call(_this$context, value, checked, event);
    };

    _this.state = {
      checked: props.defaultChecked
    };
    return _this;
  }

  var _proto = Checkbox.prototype;

  _proto.getCheckedByValue = function getCheckedByValue() {
    var _this2 = this;

    var value = this.context.value;

    if (!_isUndefined(value) && !_isUndefined(this.props.value)) {
      return value.some(function (i) {
        return i === _this2.props.value;
      });
    }

    return this.props.checked;
  };

  _proto.isChecked = function isChecked() {
    var checked = this.getCheckedByValue();
    return _isUndefined(checked) ? this.state.checked : checked;
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        className = _this$props2.className,
        children = _this$props2.children,
        title = _this$props2.title,
        inputRef = _this$props2.inputRef,
        indeterminate = _this$props2.indeterminate,
        tabIndex = _this$props2.tabIndex,
        classPrefix = _this$props2.classPrefix,
        onClick = _this$props2.onClick,
        onCheckboxClick = _this$props2.onCheckboxClick,
        checkable = _this$props2.checkable,
        props = _objectWithoutPropertiesLoose(_this$props2, ["disabled", "className", "children", "title", "inputRef", "indeterminate", "tabIndex", "classPrefix", "onClick", "onCheckboxClick", "checkable"]);

    var checked = this.isChecked();
    var _this$context2 = this.context,
        _this$context2$inline = _this$context2.inline,
        inline = _this$context2$inline === void 0 ? this.props.inline : _this$context2$inline,
        _this$context2$name = _this$context2.name,
        name = _this$context2$name === void 0 ? this.props.name : _this$context2$name,
        controlled = _this$context2.controlled;
    var addPrefix = prefix(classPrefix);
    var classes = classNames(classPrefix, className, (_classNames = {}, _classNames[addPrefix('inline')] = inline, _classNames[addPrefix('indeterminate')] = indeterminate, _classNames[addPrefix('disabled')] = disabled, _classNames[addPrefix('checked')] = checked, _classNames));
    var unhandled = getUnhandledProps(Checkbox, props);

    var _partitionHTMLProps = partitionHTMLProps(unhandled),
        htmlInputProps = _partitionHTMLProps[0],
        rest = _partitionHTMLProps[1];

    if (!_isUndefined(controlled)) {
      htmlInputProps[controlled ? 'checked' : 'defaultChecked'] = checked;
    }

    var input = React.createElement("span", {
      className: addPrefix('wrapper'),
      onClick: onCheckboxClick,
      "aria-disabled": disabled
    }, React.createElement("input", _extends({}, htmlInputProps, {
      name: name,
      type: "checkbox",
      ref: inputRef,
      tabIndex: tabIndex,
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      disabled: disabled,
      onChange: this.handleChange
    })), React.createElement("span", {
      className: addPrefix('inner'),
      "aria-hidden": true,
      role: "presentation"
    }));
    return React.createElement("div", _extends({}, rest, {
      onClick: onClick,
      className: classes
    }), React.createElement("div", {
      className: addPrefix('checker')
    }, React.createElement("label", {
      title: title
    }, checkable ? input : null, children)));
  };

  return Checkbox;
}(React.Component);

Checkbox.contextType = CheckboxContext;
Checkbox.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  inputRef: refType,
  value: PropTypes.any,
  children: PropTypes.node,
  classPrefix: PropTypes.string,
  tabIndex: PropTypes.number,
  checkable: PropTypes.bool,
  onCheckboxClick: PropTypes.func
};
Checkbox.defaultProps = {
  checkable: true,
  tabIndex: 0
};
export default defaultProps({
  classPrefix: 'checkbox'
})(Checkbox);