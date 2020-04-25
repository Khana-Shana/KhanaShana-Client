"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _getOffsetParent = _interopRequireDefault(require("./getOffsetParent"));

var _getOffset = _interopRequireDefault(require("./getOffset"));

var _style = require("../style");

var _scrollTop = _interopRequireDefault(require("./scrollTop"));

var _scrollLeft = _interopRequireDefault(require("./scrollLeft"));

var _nodeName = _interopRequireDefault(require("./nodeName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(node, offsetParent) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset = null; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if ((0, _style.getStyle)(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    offsetParent = offsetParent || (0, _getOffsetParent["default"])(node);
    offset = (0, _getOffset["default"])(node);

    if ((0, _nodeName["default"])(offsetParent) !== 'html') {
      var nextParentOffset = (0, _getOffset["default"])(offsetParent);

      if (nextParentOffset) {
        parentOffset.top = nextParentOffset.top;
        parentOffset.left = nextParentOffset.left;
      }
    }

    parentOffset.top += parseInt((0, _style.getStyle)(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop["default"])(offsetParent) || 0;
    parentOffset.left += parseInt((0, _style.getStyle)(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft["default"])(offsetParent) || 0;
  } // Subtract parent offsets and node margins


  if (offset) {
    return _extends({}, offset, {
      top: offset.top - parentOffset.top - (parseInt((0, _style.getStyle)(node, 'marginTop'), 10) || 0),
      left: offset.left - parentOffset.left - (parseInt((0, _style.getStyle)(node, 'marginLeft'), 10) || 0)
    });
  }

  return null;
};

exports["default"] = _default;