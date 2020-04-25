"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _getWindow = _interopRequireDefault(require("./getWindow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node, val) {
  var win = (0, _getWindow["default"])(node);
  var left = node.scrollLeft;
  var top = 0;

  if (win) {
    left = 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft;
    top = 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop;
  }

  if (val !== undefined) {
    if (win) {
      win.scrollTo(val, top);
    } else {
      node.scrollLeft = val;
    }
  }

  return left;
};

exports["default"] = _default;