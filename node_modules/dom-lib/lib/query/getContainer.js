"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return container || defaultContainer;
};

exports["default"] = _default;