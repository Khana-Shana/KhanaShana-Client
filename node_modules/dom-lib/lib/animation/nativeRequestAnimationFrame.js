"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _getGlobal = _interopRequireDefault(require("../getGlobal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var g = (0, _getGlobal["default"])();

var _default = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame;

exports["default"] = _default;