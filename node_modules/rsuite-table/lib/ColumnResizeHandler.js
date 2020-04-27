"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _clamp = _interopRequireDefault(require("lodash/clamp"));

var _domLib = require("dom-lib");

var _utils = require("./utils");

var _TableContext = _interopRequireDefault(require("./TableContext"));

var ColumnResizeHandler =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(ColumnResizeHandler, _React$Component);

  function ColumnResizeHandler(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.columnWidth = 0;
    _this.cursorDelta = 0;
    _this.mouseMoveTracker = void 0;
    _this.isKeyDown = void 0;

    _this.onMove = function (deltaX) {
      if (!_this.isKeyDown) {
        return;
      }

      var _this$props = _this.props,
          onColumnResizeMove = _this$props.onColumnResizeMove,
          defaultColumnWidth = _this$props.defaultColumnWidth,
          columnLeft = _this$props.columnLeft,
          columnFixed = _this$props.columnFixed;
      var rtl = _this.context.rtl;
      _this.cursorDelta += deltaX;
      _this.columnWidth = (0, _clamp["default"])(defaultColumnWidth + (rtl ? -_this.cursorDelta : _this.cursorDelta), 20, 20000);
      onColumnResizeMove === null || onColumnResizeMove === void 0 ? void 0 : onColumnResizeMove(_this.columnWidth, columnLeft, columnFixed);
    };

    _this.onColumnResizeEnd = function () {
      var _this$props$onColumnR, _this$props2, _this$mouseMoveTracke, _this$mouseMoveTracke2;

      _this.isKeyDown = false;
      (_this$props$onColumnR = (_this$props2 = _this.props).onColumnResizeEnd) === null || _this$props$onColumnR === void 0 ? void 0 : _this$props$onColumnR.call(_this$props2, _this.columnWidth, _this.cursorDelta);
      (_this$mouseMoveTracke = _this.mouseMoveTracker) === null || _this$mouseMoveTracke === void 0 ? void 0 : (_this$mouseMoveTracke2 = _this$mouseMoveTracke.releaseMouseMoves) === null || _this$mouseMoveTracke2 === void 0 ? void 0 : _this$mouseMoveTracke2.call(_this$mouseMoveTracke);
      _this.mouseMoveTracker = null;
    };

    _this.onColumnResizeMouseDown = function (event) {
      var _this$props$onColumnR2, _this$props3;

      _this.mouseMoveTracker = _this.getMouseMoveTracker();

      _this.mouseMoveTracker.captureMouseMoves(event);

      _this.isKeyDown = true;
      _this.cursorDelta = 0;
      var client = {
        clientX: event.clientX,
        clientY: event.clientY,
        preventDefault: Function()
      };
      (_this$props$onColumnR2 = (_this$props3 = _this.props).onColumnResizeStart) === null || _this$props$onColumnR2 === void 0 ? void 0 : _this$props$onColumnR2.call(_this$props3, client);
    };

    _this.columnWidth = props.defaultColumnWidth || 0;
    return _this;
  }

  var _proto = ColumnResizeHandler.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.mouseMoveTracker) {
      this.mouseMoveTracker.releaseMouseMoves();
      this.mouseMoveTracker = null;
    }
  };

  _proto.getMouseMoveTracker = function getMouseMoveTracker() {
    return this.mouseMoveTracker || new _domLib.DOMMouseMoveTracker(this.onMove, this.onColumnResizeEnd, document.body);
  };

  _proto.render = function render() {
    var _extends2;

    var _this$props4 = this.props,
        _this$props4$columnLe = _this$props4.columnLeft,
        columnLeft = _this$props4$columnLe === void 0 ? 0 : _this$props4$columnLe,
        classPrefix = _this$props4.classPrefix,
        height = _this$props4.height,
        className = _this$props4.className,
        style = _this$props4.style,
        columnFixed = _this$props4.columnFixed,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props4, ["columnLeft", "classPrefix", "height", "className", "style", "columnFixed"]);

    if (columnFixed === 'right') {
      return null;
    }

    var rtl = this.context.rtl;
    var styles = (0, _extends3["default"])((_extends2 = {}, _extends2[rtl ? 'right' : 'left'] = this.columnWidth + columnLeft - 2, _extends2.height = height, _extends2), style);
    var classes = (0, _classnames["default"])(classPrefix, className);
    var unhandled = (0, _utils.getUnhandledProps)(ColumnResizeHandler, rest);
    return React.createElement("div", (0, _extends3["default"])({}, unhandled, {
      className: classes,
      style: styles,
      onMouseDown: this.onColumnResizeMouseDown,
      role: "button",
      tabIndex: -1
    }));
  };

  return ColumnResizeHandler;
}(React.Component);

ColumnResizeHandler.contextType = _TableContext["default"];
ColumnResizeHandler.propTypes = {
  height: _propTypes["default"].number,
  defaultColumnWidth: _propTypes["default"].number,
  columnLeft: _propTypes["default"].number,
  columnFixed: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['left', 'right'])]),
  className: _propTypes["default"].string,
  classPrefix: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onColumnResizeStart: _propTypes["default"].func,
  onColumnResizeEnd: _propTypes["default"].func,
  onColumnResizeMove: _propTypes["default"].func
};
ColumnResizeHandler.defaultProps = {
  classPrefix: (0, _utils.defaultClassPrefix)('table-column-resize-spanner')
};
var _default = ColumnResizeHandler;
exports["default"] = _default;
module.exports = exports.default;