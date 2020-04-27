import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { defaultProps, prefix, createContext } from '../utils';
export var ContainerContext = createContext({});

var Container =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Container, _React$Component);

  function Container(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.setContextState = function (nextState) {
      _this.setState(nextState);
    };

    _this.state = {
      hasSidebar: false
    };
    return _this;
  }

  var _proto = Container.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props = this.props,
        className = _this$props.className,
        _this$props$children = _this$props.children,
        children = _this$props$children === void 0 ? [] : _this$props$children,
        classPrefix = _this$props.classPrefix,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "classPrefix"]);

    var addPrefix = prefix(classPrefix);
    var classes = classNames(classPrefix, className, (_classNames = {}, _classNames[addPrefix('has-sidebar')] = this.state.hasSidebar, _classNames));
    return React.createElement(ContainerContext.Provider, {
      value: {
        setContextState: this.setContextState
      }
    }, React.createElement("div", _extends({}, props, {
      className: classes
    }), children));
  };

  return Container;
}(React.Component);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  classPrefix: PropTypes.string
};
export default defaultProps({
  classPrefix: 'container'
})(Container);