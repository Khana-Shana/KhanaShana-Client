"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _domLib = require("dom-lib");

var toggleClass = function toggleClass(node, className, condition) {
  if (condition) {
    (0, _domLib.addClass)(node, className);
  } else {
    (0, _domLib.removeClass)(node, className);
  }
};

var _default = function _default(node, className, condition) {
  if (!node) {
    return;
  }

  if (Array.isArray(node) || Object.getPrototypeOf(node).hasOwnProperty('length')) {
    node = node;
    Array.from(node).forEach(function (item) {
      toggleClass(item, className, condition);
    });
    return;
  }

  toggleClass(node, className, condition);
};

exports["default"] = _default;
module.exports = exports.default;