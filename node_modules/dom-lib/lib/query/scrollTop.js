"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _getWindow = _interopRequireDefault(require("./getWindow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node, val) {
  var win = (0, _getWindow["default"])(node);
  var top = node.scrollTop;
  var left = 0;

  if (win) {
    top = 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop;
    left = 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft;
  }

  if (val !== undefined) {
    if (win) {
      win.scrollTo(left, val);
    } else {
      node.scrollTop = val;
    }
  }

  return top;
};

exports["default"] = _default;