"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _canUseDOM = _interopRequireDefault(require("./query/canUseDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {
  canUseDOM: _canUseDOM["default"],
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: _canUseDOM["default"] && !!(window.addEventListener || window.attachEvent),
  canUseViewport: _canUseDOM["default"] && !!window.screen,
  isInWorker: !_canUseDOM["default"] // For now, this is true - might change in the future.

};
var _default = ExecutionEnvironment;
exports["default"] = _default;