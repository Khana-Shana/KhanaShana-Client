"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _getWindow = _interopRequireDefault(require("./getWindow"));

var _getOffset = _interopRequireDefault(require("./getOffset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node, client) {
  var win = (0, _getWindow["default"])(node);

  if (win) {
    return win.innerHeight;
  }

  return client ? node.clientHeight : (0, _getOffset["default"])(node).height;
};

exports["default"] = _default;