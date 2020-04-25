"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _prefix = _interopRequireWildcard(require("../utils/prefix"));

var _utils = require("./utils");

var addPrefix = (0, _prefix.default)((0, _prefix.defaultClassPrefix)('slider'));

function Mark(props) {
  var _classNames;

  var mark = props.mark,
      last = props.last,
      renderMark = props.renderMark;
  var classes = (0, _classnames.default)(addPrefix('mark'), (_classNames = {}, _classNames[addPrefix('last-mark')] = last, _classNames));

  if (renderMark) {
    return React.createElement("span", {
      className: classes
    }, React.createElement("span", {
      className: addPrefix('mark-content')
    }, renderMark(mark)));
  }

  return null;
}

function Graduated(props) {
  var step = props.step,
      min = props.min,
      max = props.max,
      count = props.count,
      value = props.value,
      renderMark = props.renderMark;
  var activeIndexs = [];
  var startIndex = 0;
  var endIndex = 0;

  if (Array.isArray(value)) {
    var start = value[0],
        end = value[1];
    startIndex = (0, _utils.precisionMath)(start / step - min / step);
    endIndex = (0, _utils.precisionMath)(end / step - min / step);
    activeIndexs.push((0, _utils.precisionMath)(Math.ceil((start - min) / (max - min) * count)));
    activeIndexs.push((0, _utils.precisionMath)(Math.ceil((end - min) / (max - min) * count)));
  } else {
    endIndex = (0, _utils.precisionMath)(value / step - min / step);
    activeIndexs.push((0, _utils.precisionMath)(Math.ceil((value - min) / (max - min) * count)));
  }

  var graduatedItems = [];

  for (var i = 0; i < count; i += 1) {
    var _classNames2;

    var classes = (0, _classnames.default)((_classNames2 = {}, _classNames2[addPrefix('pass')] = i >= startIndex && i <= endIndex, _classNames2[addPrefix('active')] = ~activeIndexs.indexOf(i), _classNames2));

    var _mark = (0, _utils.precisionMath)(i * step + min);

    var lastMark = Math.min(max, _mark + step);
    var last = i === count - 1;
    graduatedItems.push(React.createElement("li", {
      className: classes,
      key: i
    }, React.createElement(Mark, {
      mark: _mark,
      renderMark: renderMark
    }), last ? React.createElement(Mark, {
      mark: lastMark,
      renderMark: renderMark,
      last: last
    }) : null));
  }

  return React.createElement("div", {
    className: addPrefix('graduator')
  }, React.createElement("ul", null, graduatedItems));
}

var _default = Graduated;
exports.default = _default;
module.exports = exports.default;