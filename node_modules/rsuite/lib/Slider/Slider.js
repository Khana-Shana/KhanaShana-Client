"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.sliderPropTypes = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _domLib = require("dom-lib");

var _utils = require("../utils");

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

var _Handle = _interopRequireDefault(require("./Handle"));

var _Graduated = _interopRequireDefault(require("./Graduated"));

var _utils2 = require("./utils");

var sliderPropTypes = {
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  step: _propTypes.default.number,
  value: _propTypes.default.number,
  defaultValue: _propTypes.default.number,
  className: _propTypes.default.string,
  classPrefix: _propTypes.default.string,
  handleClassName: _propTypes.default.string,
  handleTitle: _propTypes.default.node,
  barClassName: _propTypes.default.string,
  handleStyle: _propTypes.default.object,
  disabled: _propTypes.default.bool,
  graduated: _propTypes.default.bool,
  tooltip: _propTypes.default.bool,
  progress: _propTypes.default.bool,
  vertical: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  renderMark: _propTypes.default.func,
  renderTooltip: _propTypes.default.func,
  locale: _propTypes.default.object
};
exports.sliderPropTypes = sliderPropTypes;

var Slider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.barRef = void 0;
    _this.mouseMoveTracker = null;

    _this.getValueByPosition = function (event) {
      var _this$props = _this.props,
          vertical = _this$props.vertical,
          min = _this$props.min,
          locale = _this$props.locale;
      var barOffset = (0, _domLib.getOffset)(_this.barRef.current);
      var offset = vertical ? event.pageY - barOffset.top : event.pageX - barOffset.left;
      var value = locale.rtl && !vertical ? barOffset.width - offset : offset;
      return _this.getValueByOffset(value) + min;
    };

    _this.handleClick = function (event) {
      if (_this.props.disabled) {
        return;
      }

      var value = _this.getValueByPosition(event);

      _this.setValue(value, event);
    };

    _this.handleDragMove = function (event) {
      _this.setValue(_this.getValueByPosition(event), event);
    };

    _this.addPrefix = function (name) {
      return (0, _utils.prefix)(_this.props.classPrefix)(name);
    };

    _this.state = {
      value: _this.checkValue(props.defaultValue, props)
    };
    _this.barRef = React.createRef();
    return _this;
  }

  var _proto = Slider.prototype;

  _proto.getSplitCount = function getSplitCount() {
    var _this$props2 = this.props,
        min = _this$props2.min,
        step = _this$props2.step;
    var max = this.getMax();
    return (0, _utils2.precisionMath)((max - min) / step);
  };

  _proto.getMax = function getMax(props) {
    var _ref = props || this.props,
        max = _ref.max,
        min = _ref.min,
        step = _ref.step;

    return (0, _utils2.precisionMath)(Math.floor((max - min) / step) * step + min);
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
    return (0, _utils2.checkValue)(value, min, max);
  };

  _proto.getHeight = function getHeight() {
    if (this.barRef.current) {
      return (0, _domLib.getHeight)(this.barRef.current);
    }

    return 0;
  };

  _proto.getWidth = function getWidth() {
    if (this.barRef.current) {
      return (0, _domLib.getWidth)(this.barRef.current);
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

    return (0, _utils2.precisionMath)(value);
  };

  _proto.renderGraduated = function renderGraduated() {
    var _this$props5 = this.props,
        step = _this$props5.step,
        min = _this$props5.min,
        renderMark = _this$props5.renderMark;
    var max = this.getMax();
    var count = this.getSplitCount();
    var value = this.getValue();
    return React.createElement(_Graduated.default, {
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
    var value = this.getValue();
    return React.createElement(_Handle.default, {
      position: (value - min) / (max - min) * 100,
      className: handleClassName,
      style: handleStyle,
      disabled: disabled,
      vertical: vertical,
      tooltip: tooltip,
      renderTooltip: renderTooltip,
      rtl: locale.rtl,
      value: value,
      onDragMove: this.handleDragMove
    }, handleTitle);
  };

  _proto.renderProgress = function renderProgress() {
    var _this$props7 = this.props,
        vertical = _this$props7.vertical,
        min = _this$props7.min,
        locale = _this$props7.locale;
    var max = this.getMax();
    var value = this.getValue();
    return React.createElement(_ProgressBar.default, {
      rtl: locale.rtl,
      vertical: vertical,
      start: 0,
      end: (value - min) / (max - min) * 100
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
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props8, ["graduated", "className", "barClassName", "progress", "vertical", "disabled", "classPrefix", "renderMark"]);
    var classes = (0, _classnames.default)(classPrefix, className, (_classNames = {}, _classNames[this.addPrefix('vertical')] = vertical, _classNames[this.addPrefix('disabled')] = disabled, _classNames[this.addPrefix('graduated')] = graduated, _classNames[this.addPrefix('with-mark')] = renderMark, _classNames));
    var unhandled = (0, _utils.getUnhandledProps)(Slider, rest);
    return React.createElement("div", (0, _extends2.default)({}, unhandled, {
      className: classes,
      role: "presentation"
    }), React.createElement("div", {
      className: (0, _classnames.default)(this.addPrefix('bar'), barClassName),
      ref: this.barRef,
      onClick: this.handleClick
    }, progress && this.renderProgress(), graduated && this.renderGraduated()), this.renderHandle());
  };

  return Slider;
}(React.Component);

Slider.propTypes = sliderPropTypes;
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 0,
  tooltip: true,
  locale: {}
};

var _default = (0, _utils.defaultProps)({
  classPrefix: 'slider'
})(Slider);

exports.default = _default;