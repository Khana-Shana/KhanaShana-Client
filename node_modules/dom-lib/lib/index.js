"use strict";

exports.__esModule = true;
var _exportNames = {
  animation: true,
  transition: true,
  translateDOMPositionXY: true,
  getVendorPrefixedName: true,
  BrowserSupportCore: true,
  DOMMouseMoveTracker: true,
  WheelHandler: true
};
exports.animation = void 0;

var _classNames = require("./classNames");

Object.keys(_classNames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _classNames[key];
});

var _style = require("./style");

Object.keys(_style).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _style[key];
});

var _query = require("./query");

Object.keys(_query).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _query[key];
});

var _events = require("./events");

Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _events[key];
});

var _animation = _interopRequireWildcard(require("./animation"));

exports.animation = _animation;

var _transition2 = _interopRequireDefault(require("./transition"));

exports.transition = _transition2["default"];

var _translateDOMPositionXY2 = _interopRequireDefault(require("./transition/translateDOMPositionXY"));

exports.translateDOMPositionXY = _translateDOMPositionXY2["default"];

var _getVendorPrefixedName2 = _interopRequireDefault(require("./getVendorPrefixedName"));

exports.getVendorPrefixedName = _getVendorPrefixedName2["default"];

var _BrowserSupportCore2 = _interopRequireDefault(require("./BrowserSupportCore"));

exports.BrowserSupportCore = _BrowserSupportCore2["default"];

var _DOMMouseMoveTracker2 = _interopRequireDefault(require("./DOMMouseMoveTracker"));

exports.DOMMouseMoveTracker = _DOMMouseMoveTracker2["default"];

var _WheelHandler2 = _interopRequireDefault(require("./WheelHandler"));

exports.WheelHandler = _WheelHandler2["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }