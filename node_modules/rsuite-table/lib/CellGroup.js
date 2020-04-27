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

var CellGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inheritsLoose2["default"])(CellGroup, _React$PureComponent);

  function CellGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _this.addPrefix = function (name) {
      return (0, _utils.prefix)(_this.props.classPrefix)(name);
    };

    return _this;
  }

  var _proto = CellGroup.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props = this.props,
        fixed = _this$props.fixed,
        width = _this$props.width,
        left = _this$props.left,
        height = _this$props.height,
        style = _this$props.style,
        classPrefix = _this$props.classPrefix,
        className = _this$props.className,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["fixed", "width", "left", "height", "style", "classPrefix", "className"]);
    var classes = (0, _classnames["default"])(classPrefix, className, (_classNames = {}, _classNames[this.addPrefix("fixed-" + (fixed || ''))] = fixed, _classNames[this.addPrefix('scroll')] = !fixed, _classNames));
    var styles = (0, _extends2["default"])({
      width: width,
      height: height
    }, style);
    var unhandledProps = (0, _utils.getUnhandledProps)(CellGroup, rest);
    return React.createElement(_TableContext["default"].Consumer, null, function (_ref) {
      var translateDOMPositionXY = _ref.translateDOMPositionXY;
      translateDOMPositionXY === null || translateDOMPositionXY === void 0 ? void 0 : translateDOMPositionXY(styles, left, 0);
      return React.createElement("div", (0, _extends2["default"])({}, unhandledProps, {
        className: classes,
        style: styles
      }));
    });
  };

  return CellGroup;
}(React.PureComponent);

CellGroup.propTypes = {
  fixed: _propTypes["default"].oneOf(['left', 'right']),
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  left: _propTypes["default"].number,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  classPrefix: _propTypes["default"].string
};
CellGroup.defaultProps = {
  classPrefix: (0, _utils.defaultClassPrefix)('table-cell-group')
};
var _default = CellGroup;
exports["default"] = _default;
module.exports = exports.default;