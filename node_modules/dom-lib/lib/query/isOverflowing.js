"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _getWindow = _interopRequireDefault(require("./getWindow"));

var _ownerDocument = _interopRequireDefault(require("./ownerDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument["default"])(node);
  var win = (0, _getWindow["default"])(doc);
  var fullWidth = win.innerWidth;

  if (doc.body) {
    return doc.body.clientWidth < fullWidth;
  }

  return false;
}

var _default = function _default(container) {
  var win = (0, _getWindow["default"])(container);
  var isBody = container && container.tagName.toLowerCase() === 'body';
  return win || isBody ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
};

exports["default"] = _default;