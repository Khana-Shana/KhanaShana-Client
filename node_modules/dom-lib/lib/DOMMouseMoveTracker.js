"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _on = _interopRequireDefault(require("./events/on"));

var _cancelAnimationFramePolyfill = _interopRequireDefault(require("./animation/cancelAnimationFramePolyfill"));

var _requestAnimationFramePolyfill = _interopRequireDefault(require("./animation/requestAnimationFramePolyfill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DOMMouseMoveTracker =
/*#__PURE__*/
function () {
  /**
   * onMove is the callback that will be called on every mouse move.
   * onMoveEnd is called on mouse up when movement has ended.
   */
  function DOMMouseMoveTracker(onMove, onMoveEnd, domNode) {
    var _this = this;

    _defineProperty(this, "isDraggingStatus", false);

    _defineProperty(this, "animationFrameID", null);

    _defineProperty(this, "domNode", void 0);

    _defineProperty(this, "onMove", void 0);

    _defineProperty(this, "onMoveEnd", void 0);

    _defineProperty(this, "eventMoveToken", null);

    _defineProperty(this, "eventUpToken", null);

    _defineProperty(this, "moveEvent", null);

    _defineProperty(this, "deltaX", 0);

    _defineProperty(this, "deltaY", 0);

    _defineProperty(this, "x", 0);

    _defineProperty(this, "y", 0);

    _defineProperty(this, "isDragging", function () {
      return _this.isDraggingStatus;
    });

    _defineProperty(this, "onMouseMove", function (event) {
      var x = event.clientX;
      var y = event.clientY;
      _this.deltaX += x - _this.x;
      _this.deltaY += y - _this.y;

      if (_this.animationFrameID === null) {
        // The mouse may move faster then the animation frame does.
        // Use `requestAnimationFramePolyfill` to avoid over-updating.
        _this.animationFrameID = (0, _requestAnimationFramePolyfill["default"])(_this.didMouseMove);
      }

      _this.x = x;
      _this.y = y;
      _this.moveEvent = event;
      event.preventDefault();
    });

    _defineProperty(this, "didMouseMove", function () {
      _this.animationFrameID = null;

      _this.onMove(_this.deltaX, _this.deltaY, _this.moveEvent);

      _this.deltaX = 0;
      _this.deltaY = 0;
    });

    _defineProperty(this, "onMouseUp", function () {
      if (_this.animationFrameID) {
        _this.didMouseMove();
      }

      _this.onMoveEnd && _this.onMoveEnd();
    });

    this.domNode = domNode;
    this.onMove = onMove;
    this.onMoveEnd = onMoveEnd;
  }
  /**
   * This is to set up the listeners for listening to mouse move
   * and mouse up signaling the movement has ended. Please note that these
   * listeners are added at the document.body level. It takes in an event
   * in order to grab inital state.
   */


  var _proto = DOMMouseMoveTracker.prototype;

  _proto.captureMouseMoves = function captureMouseMoves(event) {
    if (!this.eventMoveToken && !this.eventUpToken) {
      this.eventMoveToken = (0, _on["default"])(this.domNode, 'mousemove', this.onMouseMove);
      this.eventUpToken = (0, _on["default"])(this.domNode, 'mouseup', this.onMouseUp);
    }

    if (!this.isDraggingStatus) {
      this.deltaX = 0;
      this.deltaY = 0;
      this.isDraggingStatus = true;
      this.x = event.clientX;
      this.y = event.clientY;
    }

    event.preventDefault();
  }
  /**
   * These releases all of the listeners on document.body.
   */
  ;

  _proto.releaseMouseMoves = function releaseMouseMoves() {
    if (this.eventMoveToken) {
      this.eventMoveToken.off();
      this.eventMoveToken = null;
    }

    if (this.eventUpToken) {
      this.eventUpToken.off();
      this.eventUpToken = null;
    }

    if (this.animationFrameID !== null) {
      (0, _cancelAnimationFramePolyfill["default"])(this.animationFrameID);
      this.animationFrameID = null;
    }

    if (this.isDraggingStatus) {
      this.isDraggingStatus = false;
      this.x = 0;
      this.y = 0;
    }
  }
  /**
   * Returns whether or not if the mouse movement is being tracked.
   */
  ;

  return DOMMouseMoveTracker;
}();

var _default = DOMMouseMoveTracker;
exports["default"] = _default;