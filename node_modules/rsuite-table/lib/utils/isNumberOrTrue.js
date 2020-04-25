"use strict";

exports.__esModule = true;
exports["default"] = isNumberOrTrue;

function isNumberOrTrue(value) {
  return !!value || value === 0;
}

module.exports = exports.default;