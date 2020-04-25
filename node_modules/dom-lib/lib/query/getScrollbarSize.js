"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _canUseDOM = _interopRequireDefault(require("./canUseDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var size;

var _default = function _default(recalc) {
  if (size === undefined || recalc) {
    if (_canUseDOM["default"]) {
      var scrollDiv = document.createElement('div');
      var body = document.body;
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      body.removeChild(scrollDiv);
    }
  }

  return size;
};

exports["default"] = _default;