"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _getGlobal = _interopRequireDefault(require("../getGlobal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var g = (0, _getGlobal["default"])();

var _default = g.cancelAnimationFrame || g.webkitCancelAnimationFrame || g.mozCancelAnimationFrame || g.oCancelAnimationFrame || g.msCancelAnimationFrame || g.clearTimeout;

exports["default"] = _default;