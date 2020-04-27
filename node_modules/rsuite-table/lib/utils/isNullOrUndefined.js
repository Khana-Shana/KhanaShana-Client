"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = isNullOrUndefined;

var _isNull = _interopRequireDefault(require("lodash/isNull"));

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));

function isNullOrUndefined(value) {
  return (0, _isNull["default"])(value) || (0, _isUndefined["default"])(value);
}

module.exports = exports.default;