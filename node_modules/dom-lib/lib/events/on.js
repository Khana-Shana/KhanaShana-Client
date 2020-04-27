"use strict";

exports.__esModule = true;
exports["default"] = void 0;

/**
 * Bind `target` event `eventName`'s callback `listener`.
 * @param  {Element} target
 * @param  {String} eventName
 * @param  {Function} listener
 * @param  {Boolean} capture
 * @return {Object}
 */
var _default = function _default(target, eventName, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  target.addEventListener(eventName, listener, capture);
  return {
    off: function off() {
      target.removeEventListener(eventName, listener, capture);
    }
  };
};

exports["default"] = _default;