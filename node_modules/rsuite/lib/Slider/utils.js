"use strict";

exports.__esModule = true;
exports.checkValue = exports.precisionMath = void 0;

var precisionMath = function precisionMath(value) {
  return parseFloat(value.toFixed(10));
};

exports.precisionMath = precisionMath;

var checkValue = function checkValue(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};

exports.checkValue = checkValue;