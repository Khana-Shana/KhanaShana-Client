import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _remove from "lodash/remove";
import _cloneDeep from "lodash/cloneDeep";
import _isUndefined from "lodash/isUndefined";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from '../utils/shallowEqual';
import { getUnhandledProps, defaultProps, prefix, createContext } from '../utils';
export var CheckboxContext = createContext({});

var CheckboxGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.getContextProps = function () {
      var _this$props = _this.props,
          inline = _this$props.inline,
          name = _this$props.name,
          value = _this$props.value;
      return {
        inline: inline,
        name: name,
        value: _this.getValue(),
        controlled: !_isUndefined(value),
        onChange: _this.handleChange
      };
    };

    _this.handleChange = function (itemValue, itemChecked, event) {
      var _this$props$onChange, _this$props2;

      var nextValue = _cloneDeep(_this.getValue()) || [];

      if (itemChecked) {
        nextValue.push(itemValue);
      } else {
        _remove(nextValue, function (i) {
          return shallowEqual(i, itemValue);
        });
      }

      _this.setState({
        value: nextValue
      });

      (_this$props$onChange = (_this$props2 = _this.props).onChange) === null || _this$props$onChange === void 0 ? void 0 : _this$props$onChange.call(_this$props2, nextValue, event);
    };

    _this.state = {
      value: props.defaultValue || []
    };
    return _this;
  }

  var _proto = CheckboxGroup.prototype;

  _proto.getValue = function getValue() {
    var value = this.props.value;
    return _isUndefined(value) ? this.state.value : value;
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props3 = this.props,
        className = _this$props3.className,
        inline = _this$props3.inline,
        children = _this$props3.children,
        classPrefix = _this$props3.classPrefix,
        props = _objectWithoutPropertiesLoose(_this$props3, ["className", "inline", "children", "classPrefix"]);

    var addPrefix = prefix(classPrefix);
    var classes = classNames(classPrefix, className, (_classNames = {}, _classNames[addPrefix('inline')] = inline, _classNames));
    var unhandled = getUnhandledProps(CheckboxGroup, props);
    return React.createElement(CheckboxContext.Provider, {
      value: this.getContextProps()
    }, React.createElement("div", _extends({}, unhandled, {
      role: "group",
      className: classes
    }), children));
  };

  return CheckboxGroup;
}(React.Component);

CheckboxGroup.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  inline: PropTypes.bool,
  value: PropTypes.array,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func,
  children: PropTypes.array,
  classPrefix: PropTypes.string
};
export default defaultProps({
  classPrefix: 'checkbox-group'
})(CheckboxGroup);