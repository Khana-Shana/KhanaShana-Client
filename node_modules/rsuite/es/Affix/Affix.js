import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { on, getOffset } from 'dom-lib';
import bindElementResize, { unbind as unbindElementResize } from 'element-resize-event';
import { defaultProps, getUnhandledProps } from '../utils';

var Affix =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Affix, _React$Component);

  function Affix(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.mountRef = null;
    _this.scrollListener = null;

    _this.getContainerOffset = function () {
      var container = _this.props.container;
      var offset = _this.state.containerOffset;

      if (offset) {
        return offset;
      }

      var node = typeof container === 'function' ? container() : container;
      var containerOffset = node ? getOffset(node) : null;

      _this.setState({
        containerOffset: containerOffset
      });

      return containerOffset;
    };

    _this.updateMountNodeOffset = function () {
      _this.setState(function () {
        return {
          offset: getOffset(_this.mountRef.current)
        };
      });
    };

    _this.updatePosition = function () {
      var offset = _this.state.offset;
      var _this$props = _this.props,
          top = _this$props.top,
          onChange = _this$props.onChange;
      var scrollY = window.scrollY || window.pageYOffset;

      var containerOffset = _this.getContainerOffset();

      var fixed = scrollY - (offset.top - top) >= 0;

      if (containerOffset) {
        fixed = fixed && scrollY < containerOffset.top + containerOffset.height;
      }

      if (fixed !== _this.state.fixed) {
        _this.setState({
          fixed: fixed
        });

        onChange === null || onChange === void 0 ? void 0 : onChange(fixed);
      }
    };

    _this.state = {
      offset: null,
      fixed: false,
      containerOffset: null
    };
    _this.mountRef = React.createRef();
    return _this;
  }

  var _proto = Affix.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateMountNodeOffset();
    this.scrollListener = on(window, 'scroll', this.updatePosition);
    bindElementResize(this.mountRef.current, this.updateMountNodeOffset);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.scrollListener) {
      this.scrollListener.off();
    }

    if (this.mountRef.current) {
      unbindElementResize(this.mountRef.current);
    }
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props2 = this.props,
        classPrefix = _this$props2.classPrefix,
        children = _this$props2.children,
        top = _this$props2.top,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["classPrefix", "children", "top"]);

    var _this$state = this.state,
        fixed = _this$state.fixed,
        offset = _this$state.offset;
    var classes = classNames((_classNames = {}, _classNames[classPrefix] = fixed, _classNames));
    var placeholderStyles = fixed ? {
      width: offset.width,
      height: offset.height
    } : undefined;
    var affixStyle = fixed ? {
      position: 'fixed',
      top: top,
      left: offset.left,
      width: offset.width,
      zIndex: 10
    } : null;
    var unhandledProps = getUnhandledProps(Affix, rest);
    return React.createElement("div", _extends({
      ref: this.mountRef
    }, unhandledProps), React.createElement("div", {
      className: classes,
      style: affixStyle
    }, children), fixed && React.createElement("div", {
      "aria-hidden": "true",
      style: placeholderStyles
    }));
  };

  return Affix;
}(React.Component);

Affix.propTypes = {
  top: PropTypes.number,
  onChange: PropTypes.func,
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
Affix.defaultProps = {
  top: 0
};
export default defaultProps({
  classPrefix: 'affix'
})(Affix);