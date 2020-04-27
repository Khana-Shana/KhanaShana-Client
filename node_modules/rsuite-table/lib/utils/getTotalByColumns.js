"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

function getTotalByColumns(columns) {
  var totalFlexGrow = 0;
  var totalWidth = 0;

  var count = function count(items) {
    Array.from(items).forEach(function (column) {
      if (React.isValidElement(column)) {
        var _column$props = column.props,
            flexGrow = _column$props.flexGrow,
            _column$props$width = _column$props.width,
            width = _column$props$width === void 0 ? 0 : _column$props$width;
        totalFlexGrow += flexGrow || 0;
        totalWidth += flexGrow ? 0 : width;
      } else if (Array.isArray(column)) {
        count(column);
      }
    });
  };

  if (Array.isArray(columns)) {
    count(columns);
  } else if ((0, _isPlainObject["default"])(columns)) {
    var _columns$props = columns.props,
        flexGrow = _columns$props.flexGrow,
        _columns$props$width = _columns$props.width,
        width = _columns$props$width === void 0 ? 0 : _columns$props$width;
    totalFlexGrow = flexGrow || 0;
    totalWidth = flexGrow ? 0 : width;
  }

  return {
    totalFlexGrow: totalFlexGrow,
    totalWidth: totalWidth
  };
}

var _default = getTotalByColumns;
exports["default"] = _default;
module.exports = exports.default;