"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Column(_props) {
  return null;
}

Column.defaultProps = {
  width: 100
};
Column.propTypes = {
  align: _propTypes["default"].oneOf(['left', 'center', 'right']),
  verticalAlign: _propTypes["default"].oneOf(['top', 'middle', 'bottom']),
  width: _propTypes["default"].number,
  fixed: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['left', 'right'])]),
  resizable: _propTypes["default"].bool,
  sortable: _propTypes["default"].bool,
  flexGrow: _propTypes["default"].number,
  minWidth: _propTypes["default"].number,
  colSpan: _propTypes["default"].number,
  treeCol: _propTypes["default"].bool,
  onResize: _propTypes["default"].func
};
var _default = Column;
exports["default"] = _default;
module.exports = exports.default;