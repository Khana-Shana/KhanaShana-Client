"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _domLib = require("dom-lib");

var _positionUtils = _interopRequireDefault(require("./positionUtils"));

var _shallowEqual = _interopRequireDefault(require("../utils/shallowEqual"));

var _getDOMNode = _interopRequireDefault(require("../utils/getDOMNode"));

var Position =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Position, _React$Component);

  function Position(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.utils = null;
    _this.lastTarget = false;
    _this.needsFlush = null;
    _this.container = null;
    _this.containerScrollListener = null;
    _this.childRef = void 0;

    _this.updatePosition = function (placementChanged) {
      if (placementChanged === void 0) {
        placementChanged = true;
      }

      var target = _this.getTargetSafe();

      var shouldUpdatePosition = _this.props.shouldUpdatePosition;
      /**
       * 如果 target 没有变化，同时不允许更新位置，placement 位置也没有改变，则返回
       */

      if (target === _this.lastTarget && !shouldUpdatePosition && !placementChanged) {
        return;
      }

      _this.lastTarget = target;

      if (!target) {
        _this.setState({
          positionLeft: 0,
          positionTop: 0,
          arrowOffsetLeft: null,
          arrowOffsetTop: null
        });

        return;
      }

      var overlay = (0, _getDOMNode.default)((0, _assertThisInitialized2.default)(_this));
      var container = (0, _domLib.getContainer)(_this.props.container, (0, _domLib.ownerDocument)((0, _assertThisInitialized2.default)(_this)).body);

      var nextPosition = _this.utils.calcOverlayPosition(overlay, target, container);

      _this.container = container;

      _this.setState(nextPosition);
    };

    _this.state = {
      positionLeft: 0,
      positionTop: 0,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };
    _this.utils = (0, _positionUtils.default)({
      placement: props.placement,
      preventOverflow: props.preventOverflow,
      padding: props.containerPadding
    });
    _this.childRef = React.createRef();
    return _this;
  }

  var _proto = Position.prototype;

  _proto.getHTMLElement = function getHTMLElement() {
    /**
     * findDOMNode is deprecated in StrictMode.
     * Replace findDOMNode with ref. Provided for `Transition` calls.
     * https://fb.me/react-strict-mode-find-node
     */
    return (0, _getDOMNode.default)(this.childRef.current);
  };

  _proto.componentDidMount = function componentDidMount() {
    this.updatePosition(false);

    if (this.container && this.props.preventOverflow) {
      this.containerScrollListener = (0, _domLib.on)(this.container.tagName === 'BODY' ? window : this.container, 'scroll', this.updatePosition);
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (!(0, _shallowEqual.default)(nextProps, this.props)) {
      this.needsFlush = true;
      return true;
    }

    if (!(0, _shallowEqual.default)(nextState, this.state)) {
      return true;
    }

    return false;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.needsFlush) {
      this.needsFlush = false;
      this.updatePosition(prevProps.placement !== this.props.placement);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$containerScroll;

    this.lastTarget = null;
    (_this$containerScroll = this.containerScrollListener) === null || _this$containerScroll === void 0 ? void 0 : _this$containerScroll.off();
  };

  _proto.getTargetSafe = function getTargetSafe() {
    var target = this.props.target;

    if (!target) {
      return null;
    }

    var targetSafe = target(this.props);

    if (!targetSafe) {
      return null;
    }

    return targetSafe;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["children", "className"]);
    var _this$state = this.state,
        positionLeft = _this$state.positionLeft,
        positionTop = _this$state.positionTop,
        positionClassName = _this$state.positionClassName,
        arrowPosition = (0, _objectWithoutPropertiesLoose2.default)(_this$state, ["positionLeft", "positionTop", "positionClassName"]);

    if (typeof children === 'function') {
      return children({
        className: (0, _classnames.default)(className, positionClassName),
        left: positionLeft,
        top: positionTop
      }, this.childRef);
    }

    var child = React.Children.only(children);
    return React.cloneElement(child, (0, _extends2.default)({}, (0, _omit2.default)(rest, ['target', 'container', 'containerPadding', 'preventOverflow']), {}, arrowPosition, {
      positionLeft: positionLeft,
      positionTop: positionTop,
      className: (0, _classnames.default)(className, positionClassName, child.props.className),
      htmlElementRef: this.childRef,
      style: (0, _extends2.default)({}, child.props.style, {
        left: positionLeft,
        top: positionTop
      })
    }));
  };

  return Position;
}(React.Component);

Position.displayName = 'Position';
Position.defaultProps = {
  containerPadding: 0,
  placement: 'right',
  shouldUpdatePosition: false
};
var _default = Position;
exports.default = _default;
module.exports = exports.default;