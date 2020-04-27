"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _camelizeStyleName = _interopRequireDefault(require("./camelizeStyleName"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle"));

var _hyphenateStyleName = _interopRequireDefault(require("./hyphenateStyleName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node, property) {
  if (property) {
    var value = node.style[(0, _camelizeStyleName["default"])(property)];

    if (value) {
      return value;
    }

    var styles = (0, _getComputedStyle["default"])(node);

    if (styles) {
      return styles.getPropertyValue((0, _hyphenateStyleName["default"])(property));
    }
  }

  return node.style || (0, _getComputedStyle["default"])(node);
};

exports["default"] = _default;