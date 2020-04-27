"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _nativeRequestAnimationFrame = _interopRequireDefault(require("./nativeRequestAnimationFrame"));

var _emptyFunction = _interopRequireDefault(require("../utils/emptyFunction"));

var _getGlobal = _interopRequireDefault(require("../getGlobal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var g = (0, _getGlobal["default"])();
var lastTime = 0;

function _setTimeout(callback) {
  var currTime = Date.now();
  var timeDelay = Math.max(0, 16 - (currTime - lastTime));
  lastTime = currTime + timeDelay;
  return g.setTimeout(function () {
    callback(Date.now());
  }, timeDelay);
}
/**
 * Here is the native and polyfill version of requestAnimationFrame.
 * Please don't use it directly and use requestAnimationFrame module instead.
 */


var requestAnimationFrame = _nativeRequestAnimationFrame["default"] && _nativeRequestAnimationFrame["default"].bind(g) || _setTimeout; // Works around a rare bug in Safari 6 where the first request is never invoked.


requestAnimationFrame(_emptyFunction["default"]);
var _default = requestAnimationFrame;
exports["default"] = _default;