"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = shouldShowRowByExpanded;

var _intersection = _interopRequireDefault(require("lodash/intersection"));

function shouldShowRowByExpanded(expandedRowKeys, parentKeys) {
  if (expandedRowKeys === void 0) {
    expandedRowKeys = [];
  }

  if (parentKeys === void 0) {
    parentKeys = [];
  }

  var intersectionKeys = (0, _intersection["default"])(expandedRowKeys, parentKeys);

  if (intersectionKeys.length === parentKeys.length) {
    return true;
  }

  return false;
}

module.exports = exports.default;