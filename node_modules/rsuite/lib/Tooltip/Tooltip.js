"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../utils");

var _Whisper = require("../Whisper/Whisper");

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Tooltip, _React$Component);

  function Tooltip() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tooltip.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        classPrefix = _this$props.classPrefix,
        children = _this$props.children,
        style = _this$props.style,
        visible = _this$props.visible,
        htmlElementRef = _this$props.htmlElementRef,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["className", "classPrefix", "children", "style", "visible", "htmlElementRef"]);
    var addPrefix = (0, _utils.prefix)(classPrefix);
    var classes = (0, _classnames.default)(classPrefix, className);
    var styles = (0, _extends2.default)({
      opacity: visible ? 1 : undefined
    }, style);
    return React.createElement("div", (0, _extends2.default)({}, (0, _omit2.default)(rest, _Whisper.overlayProps), {
      role: "tooltip",
      className: classes,
      style: styles,
      ref: htmlElementRef
    }), React.createElement("div", {
      className: addPrefix('arrow')
    }), React.createElement("div", {
      className: addPrefix('inner')
    }, children));
  };

  return Tooltip;
}(React.Component);

Tooltip.propTypes = {
  visible: _propTypes.default.bool,
  classPrefix: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  children: _propTypes.default.node
};

var _default = (0, _utils.defaultProps)({
  classPrefix: 'tooltip'
})(Tooltip);

exports.default = _default;
module.exports = exports.default;