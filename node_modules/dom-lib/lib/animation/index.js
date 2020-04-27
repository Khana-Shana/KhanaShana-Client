"use strict";

exports.__esModule = true;

var _cancelAnimationFramePolyfill2 = _interopRequireDefault(require("./cancelAnimationFramePolyfill"));

exports.cancelAnimationFramePolyfill = _cancelAnimationFramePolyfill2["default"];

var _nativeRequestAnimationFrame2 = _interopRequireDefault(require("./nativeRequestAnimationFrame"));

exports.nativeRequestAnimationFrame = _nativeRequestAnimationFrame2["default"];

var _requestAnimationFramePolyfill2 = _interopRequireDefault(require("./requestAnimationFramePolyfill"));

exports.requestAnimationFramePolyfill = _requestAnimationFramePolyfill2["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }