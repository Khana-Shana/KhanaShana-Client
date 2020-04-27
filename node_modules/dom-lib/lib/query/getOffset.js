"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _ownerDocument = _interopRequireDefault(require("./ownerDocument"));

var _getWindow = _interopRequireDefault(require("./getWindow"));

var _contains = _interopRequireDefault(require("./contains"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var doc = (0, _ownerDocument["default"])(node);
  var win = (0, _getWindow["default"])(doc);
  var docElem = doc && doc.documentElement;
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };

  if (!doc) {
    return null;
  } // Make sure it's not a disconnected DOM node


  if (!(0, _contains["default"])(docElem, node)) {
    return box;
  }

  if (node.getBoundingClientRect !== undefined) {
    box = node.getBoundingClientRect();
  }

  if ((box.width || box.height) && docElem && win) {
    box = {
      top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
      left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
      width: (box.width === null ? node.offsetWidth : box.width) || 0,
      height: (box.height === null ? node.offsetHeight : box.height) || 0
    };
  }

  return box;
};

exports["default"] = _default;