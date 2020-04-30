"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _domLib = require("dom-lib");

var _elementResizeEvent = _interopRequireWildcard(require("element-resize-event"));

var _utils = require("../utils");

var Affix =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Affix, _React$Component);

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
      var containerOffset = node ? (0, _domLib.getOffset)(node) : null;

      _this.setState({
        containerOffset: containerOffset
      });

      return containerOffset;
    };

    _this.updateMountNodeOffset = function () {
      _this.setState(function () {
        return {
          offset: (0, _domLib.getOffset)(_this.mountRef.current)
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
    this.scrollListener = (0, _domLib.on)(window, 'scroll', this.updatePosition);
    (0, _elementResizeEvent.default)(this.mountRef.current, this.updateMountNodeOffset);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.scrollListener) {
      this.scrollListener.off();
    }

    if (this.mountRef.current) {
      (0, _elementResizeEvent.unbind)(this.mountRef.current);
    }
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props2 = this.props,
        classPrefix = _this$props2.classPrefix,
        children = _this$props2.children,
        top = _this$props2.top,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["classPrefix", "children", "top"]);
    var _this$state = this.state,
        fixed = _this$state.fixed,
        offset = _this$state.offset;
    var classes = (0, _classnames.default)((_classNames = {}, _classNames[classPrefix] = fixed, _classNames));
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
    var unhandledProps = (0, _utils.getUnhandledProps)(Affix, rest);
    return React.createElement("div", (0, _extends2.default)({
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
  top: _propTypes.default.number,
  onChange: _propTypes.default.func,
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func])
};
Affix.defaultProps = {
  top: 0
};

var _default = (0, _utils.defaultProps)({
  classPrefix: 'affix'
})(Affix);

exports.default = _default;
module.exports = exports.default;