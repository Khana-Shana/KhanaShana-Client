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

var _utils = require("../utils");

var DropdownMenuGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(DropdownMenuGroup, _React$Component);

  function DropdownMenuGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenuGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        classPrefix = _this$props.classPrefix,
        className = _this$props.className,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["children", "classPrefix", "className"]);
    var addPrefix = (0, _utils.prefix)(classPrefix);
    var classes = (0, _classnames.default)(classPrefix, className);
    var unhandled = (0, _utils.getUnhandledProps)(DropdownMenuGroup, rest);
    return React.createElement("div", (0, _extends2.default)({
      role: "listitem",
      className: classes
    }, unhandled), React.createElement("div", {
      className: addPrefix('title'),
      tabIndex: -1
    }, React.createElement("span", null, children), React.createElement("span", {
      "aria-hidden": "true",
      className: addPrefix('caret')
    })));
  };

  return DropdownMenuGroup;
}(React.Component);

DropdownMenuGroup.propTypes = {
  classPrefix: _propTypes.default.string,
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
DropdownMenuGroup.defaultProps = {
  classPrefix: 'dropdown-menu-group'
};
var _default = DropdownMenuGroup;
exports.default = _default;
module.exports = exports.default;