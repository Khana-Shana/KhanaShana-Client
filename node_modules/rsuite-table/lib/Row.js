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

var _utils = require("./utils");

var _TableContext = _interopRequireDefault(require("./TableContext"));

var Row =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inheritsLoose2["default"])(Row, _React$PureComponent);

  function Row() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props = this.props,
        className = _this$props.className,
        width = _this$props.width,
        height = _this$props.height,
        top = _this$props.top,
        style = _this$props.style,
        isHeaderRow = _this$props.isHeaderRow,
        headerHeight = _this$props.headerHeight,
        rowRef = _this$props.rowRef,
        classPrefix = _this$props.classPrefix,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["className", "width", "height", "top", "style", "isHeaderRow", "headerHeight", "rowRef", "classPrefix"]);
    var addPrefix = (0, _utils.prefix)(classPrefix);
    var classes = (0, _classnames["default"])(classPrefix, className, (_classNames = {}, _classNames[addPrefix('header')] = isHeaderRow, _classNames));
    var styles = (0, _extends2["default"])({
      minWidth: width,
      height: isHeaderRow ? headerHeight : height
    }, style);
    var unhandledProps = (0, _utils.getUnhandledProps)(Row, rest);
    return React.createElement(_TableContext["default"].Consumer, null, function (_ref) {
      var translateDOMPositionXY = _ref.translateDOMPositionXY;
      translateDOMPositionXY === null || translateDOMPositionXY === void 0 ? void 0 : translateDOMPositionXY(styles, 0, top);
      return React.createElement("div", (0, _extends2["default"])({}, unhandledProps, {
        ref: rowRef,
        className: classes,
        style: styles
      }));
    });
  };

  return Row;
}(React.PureComponent);

Row.propTypes = {
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  headerHeight: _propTypes["default"].number,
  top: _propTypes["default"].number,
  isHeaderRow: _propTypes["default"].bool,
  rowRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  className: _propTypes["default"].string,
  classPrefix: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Row.defaultProps = {
  classPrefix: (0, _utils.defaultClassPrefix)('table-row'),
  height: 46,
  headerHeight: 40
};
var _default = Row;
exports["default"] = _default;
module.exports = exports.default;