"use strict";

exports.__esModule = true;
exports["default"] = exports.getTranslateDOMPositionXY = void 0;

var _BrowserSupportCore = _interopRequireDefault(require("../BrowserSupportCore"));

var _getVendorPrefixedName = _interopRequireDefault(require("../getVendorPrefixedName"));

var _getGlobal = _interopRequireDefault(require("../getGlobal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Source code reference from:
 * https://github.com/facebook/fbjs/blob/d308fa83c9/packages/fbjs/src/dom/translateDOMPositionXY.js
 */
var g = (0, _getGlobal["default"])();
var TRANSFORM = (0, _getVendorPrefixedName["default"])('transform');
var BACKFACE_VISIBILITY = (0, _getVendorPrefixedName["default"])('backfaceVisibility');

var getTranslateDOMPositionXY = function getTranslateDOMPositionXY(conf) {
  if (conf === void 0) {
    conf = {
      enable3DTransform: true
    };
  }

  if (_BrowserSupportCore["default"].hasCSSTransforms()) {
    var ua = g.window ? g.window.navigator.userAgent : 'UNKNOWN';
    var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua); // It appears that Safari messes up the composition order
    // of GPU-accelerated layers
    // (see bug https://bugs.webkit.org/show_bug.cgi?id=61824).
    // Use 2D translation instead.

    if (!isSafari && _BrowserSupportCore["default"].hasCSS3DTransforms() && conf.enable3DTransform) {
      return function (style, x, y) {
        if (x === void 0) {
          x = 0;
        }

        if (y === void 0) {
          y = 0;
        }

        style[TRANSFORM] = "translate3d(" + x + "px," + y + "px,0)";
        style[BACKFACE_VISIBILITY] = 'hidden';
        return style;
      };
    }

    return function (style, x, y) {
      if (x === void 0) {
        x = 0;
      }

      if (y === void 0) {
        y = 0;
      }

      style[TRANSFORM] = "translate(" + x + "px," + y + "px)";
      return style;
    };
  }

  return function (style, x, y) {
    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    style.left = x + "px";
    style.top = y + "px";
    return style;
  };
};

exports.getTranslateDOMPositionXY = getTranslateDOMPositionXY;
var translateDOMPositionXY = getTranslateDOMPositionXY();
var _default = translateDOMPositionXY;
exports["default"] = _default;