import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _isUndefined from "lodash/isUndefined";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { RadioContext } from '../RadioGroup/RadioGroup';
import { prefix, getUnhandledProps, partitionHTMLProps, defaultProps, refType } from '../utils';

var Radio =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Radio, _React$Component);

  function Radio(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.context = {};

    _this.handleChange = function (event) {
      var _this$context$onChang, _this$context;

      var _this$props = _this.props,
          value = _this$props.value,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;
      var checked = true;

      if (disabled) {
        return;
      }

      _this.setState({
        checked: checked
      });

      (_this$context$onChang = (_this$context = _this.context).onChange) === null || _this$context$onChang === void 0 ? void 0 : _this$context$onChang.call(_this$context, value, checked, event);
      onChange === null || onChange === void 0 ? void 0 : onChange(value, checked, event);
    };

    _this.state = {
      checked: props.defaultChecked
    };
    return _this;
  }

  var _proto = Radio.prototype;

  _proto.getCheckedByValue = function getCheckedByValue() {
    var value = this.props.value;

    if (!_isUndefined(this.context.value)) {
      return this.context.value === value;
    }

    return this.props.checked;
  };

  _proto.updateCheckedState = function updateCheckedState(checked, callback) {
    this.setState({
      checked: checked
    }, callback);
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props2 = this.props,
        title = _this$props2.title,
        className = _this$props2.className,
        children = _this$props2.children,
        disabled = _this$props2.disabled,
        defaultChecked = _this$props2.defaultChecked,
        classPrefix = _this$props2.classPrefix,
        tabIndex = _this$props2.tabIndex,
        inputRef = _this$props2.inputRef,
        onClick = _this$props2.onClick,
        props = _objectWithoutPropertiesLoose(_this$props2, ["title", "className", "children", "disabled", "defaultChecked", "classPrefix", "tabIndex", "inputRef", "onClick"]);

    var _this$context2 = this.context,
        _this$context2$inline = _this$context2.inline,
        inline = _this$context2$inline === void 0 ? this.props.inline : _this$context2$inline,
        _this$context2$name = _this$context2.name,
        name = _this$context2$name === void 0 ? this.props.name : _this$context2$name;
    var checked = this.getCheckedByValue();
    var addPrefix = prefix(classPrefix);
    var classes = classNames(classPrefix, className, (_classNames = {}, _classNames[addPrefix('inline')] = inline, _classNames[addPrefix('disabled')] = disabled, _classNames[addPrefix('checked')] = _isUndefined(checked) ? this.state.checked : checked, _classNames));
    var unhandled = getUnhandledProps(Radio, props);

    var _partitionHTMLProps = partitionHTMLProps(unhandled),
        htmlInputProps = _partitionHTMLProps[0],
        rest = _partitionHTMLProps[1];

    var input = React.createElement("span", {
      className: addPrefix('wrapper'),
      "aria-disabled": disabled
    }, React.createElement("input", _extends({}, htmlInputProps, {
      type: "radio",
      checked: checked,
      defaultChecked: defaultChecked,
      ref: inputRef,
      name: name,
      tabIndex: tabIndex,
      disabled: disabled,
      onChange: this.handleChange,
      onClick: function onClick(event) {
        return event.stopPropagation();
      }
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
    }, input, children)));
  };

  return Radio;
}(React.Component);

Radio.contextType = RadioContext;
Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  inline: PropTypes.bool,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  inputRef: refType,
  children: PropTypes.node,
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number
};
Radio.defaultProps = {
  tabIndex: 0
};
export default defaultProps({
  classPrefix: 'radio'
})(Radio);