"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _ownerDocument = _interopRequireDefault(require("./ownerDocument"));

var _nodeName = _interopRequireDefault(require("./nodeName"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var doc = (0, _ownerDocument["default"])(node);
  var offsetParent = node && node.offsetParent;

  while (offsetParent && (0, _nodeName["default"])(node) !== 'html' && (0, _style.getStyle)(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || doc.documentElement;
};

exports["default"] = _default;