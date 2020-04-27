"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _emptyFunction = _interopRequireDefault(require("./utils/emptyFunction"));

var _normalizeWheel = _interopRequireDefault(require("./normalizeWheel"));

var _requestAnimationFramePolyfill = _interopRequireDefault(require("./animation/requestAnimationFramePolyfill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WheelHandler =
/*#__PURE__*/
function () {
  function WheelHandler(onWheel, handleScrollX, handleScrollY, stopPropagation) {
    this.animationFrameID = null;
    this.deltaX = 0;
    this.deltaY = 0;
    this.didWheel = this.didWheel.bind(this);

    if (typeof handleScrollX !== 'function') {
      handleScrollX = handleScrollX ? _emptyFunction["default"].thatReturnsTrue : _emptyFunction["default"].thatReturnsFalse;
    }

    if (typeof handleScrollY !== 'function') {
      handleScrollY = handleScrollY ? _emptyFunction["default"].thatReturnsTrue : _emptyFunction["default"].thatReturnsFalse;
    }

    if (typeof stopPropagation !== 'function') {
      stopPropagation = stopPropagation ? _emptyFunction["default"].thatReturnsTrue : _emptyFunction["default"].thatReturnsFalse;
    }

    this.handleScrollX = handleScrollX;
    this.handleScrollY = handleScrollY;
    this.stopPropagation = stopPropagation;
    this.onWheelCallback = onWheel;
    this.onWheel = this.onWheel.bind(this);
  }

  var _proto = WheelHandler.prototype;

  _proto.onWheel = function onWheel(event) {
    var normalizedEvent = (0, _normalizeWheel["default"])(event);
    var deltaX = this.deltaX + normalizedEvent.pixelX;
    var deltaY = this.deltaY + normalizedEvent.pixelY;
    var handleScrollX = this.handleScrollX(deltaX, deltaY);
    var handleScrollY = this.handleScrollY(deltaY, deltaX);

    if (!handleScrollX && !handleScrollY) {
      return;
    }

    this.deltaX += handleScrollX ? normalizedEvent.pixelX : 0;
    this.deltaY += handleScrollY ? normalizedEvent.pixelY : 0;
    event.preventDefault();
    var changed;

    if (this.deltaX !== 0 || this.deltaY !== 0) {
      if (this.stopPropagation()) {
        event.stopPropagation();
      }

      changed = true;
    }

    if (changed === true && this.animationFrameID === null) {
      this.animationFrameID = (0, _requestAnimationFramePolyfill["default"])(this.didWheel);
    }
  };

  _proto.didWheel = function didWheel() {
    this.animationFrameID = null;
    this.onWheelCallback(this.deltaX, this.deltaY);
    this.deltaX = 0;
    this.deltaY = 0;
  };

  return WheelHandler;
}();

var _default = WheelHandler;
exports["default"] = _default;