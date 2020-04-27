"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _stringFormatter = require("../utils/stringFormatter");

var msPattern = /^ms-/;

var _default = function _default(name) {
  return (0, _stringFormatter.camelize)(name.replace(msPattern, 'ms-'));
};

exports["default"] = _default;