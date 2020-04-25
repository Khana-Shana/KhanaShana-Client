export var precisionMath = function precisionMath(value) {
  return parseFloat(value.toFixed(10));
};
export var checkValue = function checkValue(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};