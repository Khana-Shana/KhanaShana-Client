import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _isUndefined from "lodash/isUndefined";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { defaultProps, getUnhandledProps, prefix, createContext } from '../utils';
export var RadioContext = createContext({});

var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RadioGroup, _React$Component);

  function RadioGroup(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleChange = function (nextValue, _itemChecked, event) {
      var _this$props$onChange, _this$props;

      _this.setState({
        value: nextValue
      });

      (_this$props$onChange = (_this$props = _this.props).onChange) === null || _this$props$onChange === void 0 ? void 0 : _this$props$onChange.call(_this$props, nextValue, event);
    };

    _this.getContextProps = function () {
      var _this$props2 = _this.props,
          inline = _this$props2.inline,
          name = _this$props2.name;

      var value = _this.getValue();

      return {
        inline: inline,
        name: name,
        value: _isUndefined(value) ? null : value,
        onChange: _this.handleChange
      };
    };

    _this.state = {
      value: props.defaultValue
    };
    return _this;
  }

  var _proto = RadioGroup.prototype;

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
        appearance = _this$props3.appearance,
        rest = _objectWithoutPropertiesLoose(_this$props3, ["className", "inline", "children", "classPrefix", "appearance"]);

    var addPrefix = prefix(classPrefix);
    var classes = classNames(classPrefix, addPrefix(appearance), className, (_classNames = {}, _classNames[addPrefix('inline')] = inline, _classNames));
    var unhandled = getUnhandledProps(RadioGroup, rest);
    return React.createElement(RadioContext.Provider, {
      value: this.getContextProps()
    }, React.createElement("div", _extends({}, unhandled, {
      className: classes,
      role: "button"
    }), children));
  };

  return RadioGroup;
}(React.Component);

RadioGroup.propTypes = {
  appearance: PropTypes.oneOf(['default', 'picker']),
  name: PropTypes.string,
  inline: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func
};
RadioGroup.defaultProps = {
  appearance: 'default'
};
export default defaultProps({
  classPrefix: 'radio-group'
})(RadioGroup);