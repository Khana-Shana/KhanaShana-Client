"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _createContext = _interopRequireDefault(require("./utils/createContext"));

var _translateDOMPositionXY = _interopRequireDefault(require("./utils/translateDOMPositionXY"));

var _isRTL = _interopRequireDefault(require("./utils/isRTL"));

var TableContext = (0, _createContext["default"])({
  rlt: (0, _isRTL["default"])(),
  hasCustomTreeCol: false,
  translateDOMPositionXY: _translateDOMPositionXY["default"]
});
var _default = TableContext;
exports["default"] = _default;
module.exports = exports.default;