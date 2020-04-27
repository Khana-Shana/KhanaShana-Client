import * as React from 'react';
import classNames from 'classnames';
import prefix, { defaultClassPrefix } from '../utils/prefix';
import { precisionMath } from './utils';
var addPrefix = prefix(defaultClassPrefix('slider'));

function Mark(props) {
  var _classNames;

  var mark = props.mark,
      last = props.last,
      renderMark = props.renderMark;
  var classes = classNames(addPrefix('mark'), (_classNames = {}, _classNames[addPrefix('last-mark')] = last, _classNames));

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
    startIndex = precisionMath(start / step - min / step);
    endIndex = precisionMath(end / step - min / step);
    activeIndexs.push(precisionMath(Math.ceil((start - min) / (max - min) * count)));
    activeIndexs.push(precisionMath(Math.ceil((end - min) / (max - min) * count)));
  } else {
    endIndex = precisionMath(value / step - min / step);
    activeIndexs.push(precisionMath(Math.ceil((value - min) / (max - min) * count)));
  }

  var graduatedItems = [];

  for (var i = 0; i < count; i += 1) {
    var _classNames2;

    var classes = classNames((_classNames2 = {}, _classNames2[addPrefix('pass')] = i >= startIndex && i <= endIndex, _classNames2[addPrefix('active')] = ~activeIndexs.indexOf(i), _classNames2));

    var _mark = precisionMath(i * step + min);

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

export default Graduated;