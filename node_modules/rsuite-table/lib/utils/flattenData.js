"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

function flattenData(data) {
  var flattenItems = [];

  function loop(data, _parent) {
    if (!Array.isArray(data)) {
      return;
    }

    data.forEach(function (item) {
      item._parent = _parent;
      flattenItems.push((0, _extends2["default"])({}, item));

      if (item.children) {
        loop(item.children, item);
      }
    });
  }

  loop(data, null);
  return flattenItems;
}

var _default = flattenData;
exports["default"] = _default;
module.exports = exports.default;