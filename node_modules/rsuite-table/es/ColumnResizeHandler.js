import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import clamp from 'lodash/clamp';
import { DOMMouseMoveTracker } from 'dom-lib';
import { defaultClassPrefix, getUnhandledProps } from './utils';
import TableContext from './TableContext';

var ColumnResizeHandler =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ColumnResizeHandler, _React$Component);

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
      _this.columnWidth = clamp(defaultColumnWidth + (rtl ? -_this.cursorDelta : _this.cursorDelta), 20, 20000);
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
    return this.mouseMoveTracker || new DOMMouseMoveTracker(this.onMove, this.onColumnResizeEnd, document.body);
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
        rest = _objectWithoutPropertiesLoose(_this$props4, ["columnLeft", "classPrefix", "height", "className", "style", "columnFixed"]);

    if (columnFixed === 'right') {
      return null;
    }

    var rtl = this.context.rtl;

    var styles = _extends((_extends2 = {}, _extends2[rtl ? 'right' : 'left'] = this.columnWidth + columnLeft - 2, _extends2.height = height, _extends2), style);

    var classes = classNames(classPrefix, className);
    var unhandled = getUnhandledProps(ColumnResizeHandler, rest);
    return React.createElement("div", _extends({}, unhandled, {
      className: classes,
      style: styles,
      onMouseDown: this.onColumnResizeMouseDown,
      role: "button",
      tabIndex: -1
    }));
  };

  return ColumnResizeHandler;
}(React.Component);

ColumnResizeHandler.contextType = TableContext;
ColumnResizeHandler.propTypes = {
  height: PropTypes.number,
  defaultColumnWidth: PropTypes.number,
  columnLeft: PropTypes.number,
  columnFixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right'])]),
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  style: PropTypes.object,
  onColumnResizeStart: PropTypes.func,
  onColumnResizeEnd: PropTypes.func,
  onColumnResizeMove: PropTypes.func
};
ColumnResizeHandler.defaultProps = {
  classPrefix: defaultClassPrefix('table-column-resize-spanner')
};
export default ColumnResizeHandler;