"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _hyphenateStyleName = _interopRequireDefault(require("./hyphenateStyleName"));

var _removeStyle = _interopRequireDefault(require("./removeStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node, property, value) {
  var css = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      throw new Error('value is undefined');
    }

    (props = {})[property] = value;
  }

  if (typeof props === 'object') {
    for (var key in props) {
      if (Object.prototype.hasOwnProperty.call(props, key)) {
        if (!props[key] && props[key] !== 0) {
          (0, _removeStyle["default"])(node, (0, _hyphenateStyleName["default"])(key));
        } else {
          css += (0, _hyphenateStyleName["default"])(key) + ":" + props[key] + ";";
        }
      }
    }
  }

  node.style.cssText += ";" + css;
};

exports["default"] = _default;