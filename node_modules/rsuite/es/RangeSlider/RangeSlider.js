import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getWidth as _getWidth, getHeight as _getHeight, getOffset } from 'dom-lib';
import { getUnhandledProps, defaultProps, prefix } from '../utils';
import { sliderPropTypes } from '../Slider/Slider';
import ProgressBar from '../Slider/ProgressBar';
import Handle from '../Slider/Handle';
import Graduated from '../Slider/Graduated';
import { precisionMath, checkValue as _checkValue } from '../Slider/utils';

var rangeSliderPropTypes = _extends({}, sliderPropTypes, {
  value: PropTypes.arrayOf(PropTypes.number),
  defaultValue: PropTypes.arrayOf(PropTypes.number)
});

var RangeSlider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RangeSlider, _React$Component);

  // Define the parameter position of the handle
  function RangeSlider(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.barRef = void 0;
    _this.mouseMoveTracker = null;
    _this.handleIndexs = [0, 1];

    _this.getValueByPosition = function (event) {
      var _this$props = _this.props,
          vertical = _this$props.vertical,
          min = _this$props.min,
          locale = _this$props.locale;
      var barOffset = getOffset(_this.barRef.current);
      var offset = vertical ? event.pageY - barOffset.top : event.pageX - barOffset.left;
      var value = locale.rtl && !vertical ? barOffset.width - offset : offset;
      return _this.getValueByOffset(value) + min;
    };

    _this.getRangeValue = function (key, event) {
      var _this$getValue = _this.getValue(),
          start = _this$getValue[0],
          end = _this$getValue[1];

      var value = _this.getValueByPosition(event);

      if (key === 'start') {
        start = value;
      } else if (key === 'end') {
        end = value;
      }

      return [start, end];
    };

    _this.handleClick = function (event) {
      if (_this.props.disabled) {
        return;
      }

      var _this$getValue2 = _this.getValue(),
          start = _this$getValue2[0],
          end = _this$getValue2[1];

      var value = _this.getValueByPosition(event);
      /**
       * Judging that the current click value is closer to the values ​​of `start` and` end`.
       */


      if (Math.abs(start - value) < Math.abs(end - value)) {
        start = value;
      } else {
        end = value;
      }

      _this.setValue([start, end], event);
    };

    _this.handleDragMove = function (key, event) {
      var _this$getRangeValue = _this.getRangeValue(key, event),
          start = _this$getRangeValue[0],
          end = _this$getRangeValue[1];

      if (start >= end) {
        /**
         * When the value of `start` is greater than the value of` end`,
         * the position of the handle is reversed.
         */
        _this.handleIndexs.reverse();

        if (key === 'start') {
          start = _this.getValue()[1];
        } else {
          end = _this.getValue()[0];
        }
      }

      _this.setValue([start, end], event);
    };

    _this.addPrefix = function (name) {
      return prefix(_this.props.classPrefix)(name);
    };

    _this.state = {
      value: _this.checkValue(props.defaultValue, props)
    };
    _this.barRef = React.createRef();
    return _this;
  }

  var _proto = RangeSlider.prototype;

  _proto.getSplitCount = function getSplitCount() {
    var _this$props2 = this.props,
        min = _this$props2.min,
        step = _this$props2.step;
    var max = this.getMax();
    return precisionMath((max - min) / step);
  };

  _proto.getMax = function getMax(props) {
    var _ref = props || this.props,
        max = _ref.max,
        min = _ref.min,
        step = _ref.step;

    return precisionMath(Math.floor((max - min) / step) * step + min);
  };

  _proto.getValue = function getValue() {
    var value = this.props.value;
    return typeof value === 'undefined' ? this.state.value : this.checkValue(value);
  };

  _proto.setValue = function setValue(value, event) {
    var _this$props$onChange, _this$props3;

    var nextValue = this.checkValue(value);
    this.setState({
      value: nextValue
    });
    (_this$props$onChange = (_this$props3 = this.props).onChange) === null || _this$props$onChange === void 0 ? void 0 : _this$props$onChange.call(_this$props3, nextValue, event);
  };

  _proto.checkValue = function checkValue(value, props) {
    var _ref2 = props || this.props,
        min = _ref2.min;

    var max = this.getMax(props);
    var start = value[0],
        end = value[1];
    return [_checkValue(start, min, max), _checkValue(end, min, max)];
  };

  _proto.getHeight = function getHeight() {
    if (this.barRef.current) {
      return _getHeight(this.barRef.current);
    }

    return 0;
  };

  _proto.getWidth = function getWidth() {
    if (this.barRef.current) {
      return _getWidth(this.barRef.current);
    }

    return 0;
  };

  _proto.getValueByOffset = function getValueByOffset(offset) {
    var _this$props4 = this.props,
        step = _this$props4.step,
        vertical = _this$props4.vertical;
    var count = this.getSplitCount();
    var value = 0;

    if (isNaN(offset)) {
      return value;
    }

    if (vertical) {
      var barHeight = this.getHeight();
      value = Math.round(offset / (barHeight / count)) * step;
    } else {
      var barWidth = this.getWidth();
      value = Math.round(offset / (barWidth / count)) * step;
    }

    return precisionMath(value);
  };

  _proto.renderGraduated = function renderGraduated() {
    var _this$props5 = this.props,
        step = _this$props5.step,
        min = _this$props5.min,
        renderMark = _this$props5.renderMark;
    var max = this.getMax();
    var count = this.getSplitCount();
    var value = this.getValue();
    return React.createElement(Graduated, {
      step: step,
      min: min,
      max: max,
      count: count,
      value: value,
      renderMark: renderMark
    });
  };

  _proto.renderHandle = function renderHandle() {
    var _this$props6 = this.props,
        handleClassName = _this$props6.handleClassName,
        handleStyle = _this$props6.handleStyle,
        handleTitle = _this$props6.handleTitle,
        min = _this$props6.min,
        vertical = _this$props6.vertical,
        tooltip = _this$props6.tooltip,
        renderTooltip = _this$props6.renderTooltip,
        locale = _this$props6.locale,
        disabled = _this$props6.disabled;
    var max = this.getMax();

    var _this$getValue3 = this.getValue(),
        start = _this$getValue3[0],
        end = _this$getValue3[1];

    var commonProps = {
      disabled: disabled,
      vertical: vertical,
      tooltip: tooltip,
      renderTooltip: renderTooltip,
      rtl: locale.rtl,
      className: handleClassName,
      style: handleStyle
    };
    var handleProps = [{
      value: start,
      position: (start - min) / (max - min) * 100,
      onDragMove: this.handleDragMove.bind(this, 'start')
    }, {
      value: end,
      position: (end - min) / (max - min) * 100,
      onDragMove: this.handleDragMove.bind(this, 'end')
    }];
    return React.createElement(React.Fragment, null, React.createElement(Handle, _extends({}, commonProps, handleProps[this.handleIndexs[0]]), handleTitle), React.createElement(Handle, _extends({}, commonProps, handleProps[this.handleIndexs[1]]), handleTitle));
  };

  _proto.renderProgress = function renderProgress() {
    var _this$props7 = this.props,
        vertical = _this$props7.vertical,
        min = _this$props7.min,
        locale = _this$props7.locale;
    var max = this.getMax();

    var _this$getValue4 = this.getValue(),
        start = _this$getValue4[0],
        end = _this$getValue4[1];

    return React.createElement(ProgressBar, {
      rtl: locale.rtl,
      vertical: vertical,
      start: (start - min) / (max - min) * 100,
      end: (end - min) / (max - min) * 100
    });
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props8 = this.props,
        graduated = _this$props8.graduated,
        className = _this$props8.className,
        barClassName = _this$props8.barClassName,
        progress = _this$props8.progress,
        vertical = _this$props8.vertical,
        disabled = _this$props8.disabled,
        classPrefix = _this$props8.classPrefix,
        renderMark = _this$props8.renderMark,
        rest = _objectWithoutPropertiesLoose(_this$props8, ["graduated", "className", "barClassName", "progress", "vertical", "disabled", "classPrefix", "renderMark"]);

    var classes = classNames(classPrefix, className, (_classNames = {}, _classNames[this.addPrefix('vertical')] = vertical, _classNames[this.addPrefix('disabled')] = disabled, _classNames[this.addPrefix('graduated')] = graduated, _classNames[this.addPrefix('with-mark')] = renderMark, _classNames));
    var unhandled = getUnhandledProps(RangeSlider, rest);
    return React.createElement("div", _extends({}, unhandled, {
      className: classes,
      role: "presentation"
    }), React.createElement("div", {
      className: classNames(this.addPrefix('bar'), barClassName),
      ref: this.barRef,
      onClick: this.handleClick
    }, progress && this.renderProgress(), graduated && this.renderGraduated()), this.renderHandle());
  };

  return RangeSlider;
}(React.Component);

RangeSlider.propTypes = rangeSliderPropTypes;
RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: [0, 0],
  tooltip: true,
  progress: true,
  locale: {}
};
export default defaultProps({
  classPrefix: 'slider'
})(RangeSlider);