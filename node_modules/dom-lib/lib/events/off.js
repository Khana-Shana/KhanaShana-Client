"use strict";

exports.__esModule = true;
exports["default"] = void 0;

/**
 * Unbind `target` event `eventName`'s callback `listener`.
 *
 * @param {Element} target
 * @param {String} eventName
 * @param {Function} listener
 * @param {Boolean} capture
 * @api public
 */
var _default = function _default(target, eventName, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  target.removeEventListener(eventName, listener, capture);
};

exports["default"] = _default;