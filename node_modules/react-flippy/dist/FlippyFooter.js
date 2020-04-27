"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var cards = _ref.cards,
      activeCardIndex = _ref.activeCardIndex,
      onDotClick = _ref.onDotClick;
  return _react.default.createElement("div", {
    className: "flippy-footer"
  }, cards.map(function (card, index) {
    return _react.default.createElement("span", {
      key: "flippyFooterItem".concat(index),
      className: "flippy-footer-item".concat(activeCardIndex === index ? ' isActive' : ''),
      onClick: onDotClick.bind(null, index)
    }, "*");
  }));
};

exports.default = _default;