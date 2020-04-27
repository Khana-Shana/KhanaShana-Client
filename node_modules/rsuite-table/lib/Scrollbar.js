"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _domLib = require("dom-lib");

var _constants = require("./constants");

var _utils = require("./utils");

var _TableContext = _interopRequireDefault(require("./TableContext"));

var Scrollbar =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inheritsLoose2["default"])(Scrollbar, _React$PureComponent);

  function Scrollbar(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.scrollOffset = 0;
    _this.mouseMoveTracker = null;
    _this.handleRef = void 0;
    _this.barRef = void 0;

    _this.handleMouseDown = function (event) {
      var _this$mouseMoveTracke, _this$props$onMouseDo, _this$props;

      _this.mouseMoveTracker = _this.getMouseMoveTracker();
      (_this$mouseMoveTracke = _this.mouseMoveTracker) === null || _this$mouseMoveTracke === void 0 ? void 0 : _this$mouseMoveTracke.captureMouseMoves(event);

      _this.setState({
        handlePressed: true
      });

      (_this$props$onMouseDo = (_this$props = _this.props).onMouseDown) === null || _this$props$onMouseDo === void 0 ? void 0 : _this$props$onMouseDo.call(_this$props, event);
    };

    _this.handleDragEnd = function () {
      _this.releaseMouseMoves();

      _this.setState({
        handlePressed: false
      });
    };

    _this.handleDragMove = function (deltaX, deltaY, event) {
      var _window, _window$event;

      var vertical = _this.props.vertical;

      if (!_this.mouseMoveTracker || !_this.mouseMoveTracker.isDragging()) {
        return;
      }

      if ((event === null || event === void 0 ? void 0 : event.buttons) === 0 || ((_window = window) === null || _window === void 0 ? void 0 : (_window$event = _window.event) === null || _window$event === void 0 ? void 0 : _window$event['buttons']) === 0) {
        _this.releaseMouseMoves();

        return;
      }

      _this.handleScroll(vertical ? deltaY : deltaX, event);
    };

    _this.handleClick = function (event) {
      var _this$handleRef$curre;

      if (_this.handleRef.current && ((_this$handleRef$curre = _this.handleRef.current) === null || _this$handleRef$curre === void 0 ? void 0 : _this$handleRef$curre.contains(event.target))) {
        return;
      }

      var _this$props2 = _this.props,
          vertical = _this$props2.vertical,
          length = _this$props2.length,
          scrollLength = _this$props2.scrollLength;
      var barOffset = _this.state.barOffset;
      var offset = vertical ? event.pageY - barOffset.top : event.pageX - barOffset.left;
      var handleWidth = length / scrollLength * length;
      var delta = offset - handleWidth;
      var nextDelta = offset > _this.scrollOffset ? delta - _this.scrollOffset : offset - _this.scrollOffset;

      _this.handleScroll(nextDelta, event);
    };

    _this.state = {
      barOffset: {
        top: 0,
        left: 0
      },
      handlePressed: false
    };
    _this.handleRef = React.createRef();
    _this.barRef = React.createRef();
    return _this;
  }

  var _proto = Scrollbar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.initBarOffset();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.releaseMouseMoves();
  };

  _proto.onWheelScroll = function onWheelScroll(delta) {
    var _this$props3 = this.props,
        length = _this$props3.length,
        scrollLength = _this$props3.scrollLength;
    var nextDelta = delta / (scrollLength / length);
    this.updateScrollBarPosition(nextDelta);
  };

  _proto.getMouseMoveTracker = function getMouseMoveTracker() {
    return this.mouseMoveTracker || new _domLib.DOMMouseMoveTracker(this.handleDragMove, this.handleDragEnd, document.body);
  };

  _proto.initBarOffset = function initBarOffset() {
    var _this2 = this;

    setTimeout(function () {
      _this2.barRef.current && _this2.setState({
        barOffset: (0, _domLib.getOffset)(_this2.barRef.current)
      });
    }, 1);
  };

  _proto.handleScroll = function handleScroll(delta, event) {
    var _this$props$onScroll, _this$props5;

    var _this$props4 = this.props,
        length = _this$props4.length,
        scrollLength = _this$props4.scrollLength;
    var scrollDelta = delta * (scrollLength / length);
    this.updateScrollBarPosition(delta);
    (_this$props$onScroll = (_this$props5 = this.props).onScroll) === null || _this$props$onScroll === void 0 ? void 0 : _this$props$onScroll.call(_this$props5, scrollDelta, event);
  };

  _proto.resetScrollBarPosition = function resetScrollBarPosition(forceDelta) {
    if (forceDelta === void 0) {
      forceDelta = 0;
    }

    this.scrollOffset = 0;
    this.updateScrollBarPosition(0, forceDelta);
  };

  _proto.updateScrollBarPosition = function updateScrollBarPosition(delta, forceDelta) {
    var _this$props6 = this.props,
        vertical = _this$props6.vertical,
        length = _this$props6.length,
        scrollLength = _this$props6.scrollLength;
    var translateDOMPositionXY = this.context.translateDOMPositionXY;
    var max = scrollLength && length ? length - Math.max(length / scrollLength * length, _constants.SCROLLBAR_MIN_WIDTH + 2) : 0;
    var styles = {};

    if (typeof forceDelta === 'undefined') {
      this.scrollOffset += delta;
      this.scrollOffset = Math.max(this.scrollOffset, 0);
      this.scrollOffset = Math.min(this.scrollOffset, max);
    } else {
      this.scrollOffset = forceDelta || 0;
    }

    if (vertical) {
      translateDOMPositionXY === null || translateDOMPositionXY === void 0 ? void 0 : translateDOMPositionXY(styles, 0, this.scrollOffset);
    } else {
      translateDOMPositionXY === null || translateDOMPositionXY === void 0 ? void 0 : translateDOMPositionXY(styles, this.scrollOffset, 0);
    }

    (0, _domLib.addStyle)(this.handleRef.current, styles);
  };

  _proto.releaseMouseMoves = function releaseMouseMoves() {
    var _this$mouseMoveTracke2, _this$mouseMoveTracke3;

    (_this$mouseMoveTracke2 = this.mouseMoveTracker) === null || _this$mouseMoveTracke2 === void 0 ? void 0 : (_this$mouseMoveTracke3 = _this$mouseMoveTracke2.releaseMouseMoves) === null || _this$mouseMoveTracke3 === void 0 ? void 0 : _this$mouseMoveTracke3.call(_this$mouseMoveTracke2);
    this.mouseMoveTracker = null;
  };

  _proto.render = function render() {
    var _classNames, _styles;

    var _this$props7 = this.props,
        vertical = _this$props7.vertical,
        length = _this$props7.length,
        scrollLength = _this$props7.scrollLength,
        classPrefix = _this$props7.classPrefix,
        className = _this$props7.className,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props7, ["vertical", "length", "scrollLength", "classPrefix", "className"]);
    var handlePressed = this.state.handlePressed;
    var addPrefix = (0, _utils.prefix)(classPrefix);
    var classes = (0, _classnames["default"])(classPrefix, className, (_classNames = {}, _classNames[addPrefix('vertical')] = vertical, _classNames[addPrefix('horizontal')] = !vertical, _classNames[addPrefix('hide')] = scrollLength <= length, _classNames[addPrefix('pressed')] = handlePressed, _classNames));
    var styles = (_styles = {}, _styles[vertical ? 'height' : 'width'] = length / scrollLength * 100 + "%", _styles[vertical ? 'minHeight' : 'minWidth'] = _constants.SCROLLBAR_MIN_WIDTH, _styles);
    var unhandled = (0, _utils.getUnhandledProps)(Scrollbar, rest);
    return React.createElement("div", (0, _extends2["default"])({}, unhandled, {
      ref: this.barRef,
      className: classes,
      onClick: this.handleClick,
      role: "toolbar"
    }), React.createElement("div", {
      ref: this.handleRef,
      className: addPrefix('handle'),
      style: styles,
      onMouseDown: this.handleMouseDown,
      role: "button",
      tabIndex: -1
    }));
  };

  return Scrollbar;
}(React.PureComponent);

Scrollbar.contextType = _TableContext["default"];
Scrollbar.propTypes = {
  vertical: _propTypes["default"].bool,
  length: _propTypes["default"].number,
  scrollLength: _propTypes["default"].number,
  className: _propTypes["default"].string,
  classPrefix: _propTypes["default"].string,
  onScroll: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func
};
Scrollbar.defaultProps = {
  classPrefix: (0, _utils.defaultClassPrefix)('table-scrollbar'),
  scrollLength: 1,
  length: 1
};
var _default = Scrollbar;
exports["default"] = _default;
module.exports = exports.default;