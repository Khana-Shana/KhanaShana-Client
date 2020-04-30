import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _camelCase from "lodash/camelCase";
import _isNumber from "lodash/isNumber";
import * as React from 'react';
import PropTypes from 'prop-types';
import { getPosition, scrollTop } from 'dom-lib';
import FormattedMessage from '../IntlProvider/FormattedMessage';
import classNames from 'classnames';
import { prefix, getUnhandledProps, defaultProps } from '../utils';
import scrollTopAnimation from '../utils/scrollTopAnimation';
import setHours from "date-fns/set_hours";
import setMinutes from "date-fns/set_minutes";
import setSeconds from "date-fns/set_seconds";
import getSeconds from "date-fns/get_seconds";
import getMinutes from "date-fns/get_minutes";
import getHours from "date-fns/get_hours";

function getRanges(meridian) {
  return {
    hours: {
      start: 0,
      end: meridian ? 11 : 23
    },
    minutes: {
      start: 0,
      end: 59
    },
    seconds: {
      start: 0,
      end: 59
    }
  };
}

export function getMeridianHours(hours) {
  return hours >= 12 ? hours - 12 : hours;
}

var TimeDropdown =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(TimeDropdown, _React$PureComponent);

  function TimeDropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.container = {};

    _this.scrollTo = function (time) {
      Object.entries(time).forEach(function (item) {
        var container = _this.container[item[0]];
        var node = container.querySelector("[data-key=\"" + item[0] + "-" + item[1] + "\"]");

        if (node && container) {
          var _getPosition = getPosition(node, container),
              top = _getPosition.top;

          scrollTopAnimation(_this.container[item[0]], top, scrollTop(_this.container[item[0]]) !== 0);
        }
      });
    };

    _this.handleClick = function (type, d, event) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          date = _this$props.date; // $FlowFixMe

      var nextDate = date || new Date();

      switch (type) {
        case 'hours':
          nextDate = setHours(date, d);
          break;

        case 'minutes':
          nextDate = setMinutes(date, d);
          break;

        case 'seconds':
          nextDate = setSeconds(date, d);
          break;
      }

      onSelect === null || onSelect === void 0 ? void 0 : onSelect(nextDate, event);
    };

    _this.addPrefix = function (name) {
      return prefix(_this.props.classPrefix)(name);
    };

    return _this;
  }

  var _proto = TimeDropdown.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updatePosition();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.updatePosition();
  };

  _proto.getTime = function getTime(props) {
    var _ref = props || this.props,
        format = _ref.format,
        date = _ref.date,
        showMeridian = _ref.showMeridian;

    var time = date || new Date();
    var nextTime = {};

    if (!format) {
      return nextTime;
    }

    if (/(H|h)/.test(format)) {
      var hours = getHours(time);
      nextTime.hours = showMeridian ? getMeridianHours(hours) : hours;
    }

    if (/m/.test(format)) {
      nextTime.minutes = getMinutes(time);
    }

    if (/s/.test(format)) {
      nextTime.seconds = getSeconds(time);
    }

    return nextTime;
  };

  _proto.updatePosition = function updatePosition(props) {
    var _ref2 = props || this.props,
        show = _ref2.show;

    var time = this.getTime(props);
    show && this.scrollTo(time);
  };

  _proto.renderColumn = function renderColumn(type, active) {
    var _this2 = this;

    var showMeridian = this.props.showMeridian;

    if (!_isNumber(active)) {
      return null;
    }

    var date = this.props.date;
    var _getRanges$type = getRanges(showMeridian)[type],
        start = _getRanges$type.start,
        end = _getRanges$type.end;
    var items = [];

    var hideFunc = this.props[_camelCase("hide_" + type)];

    var disabledFunc = this.props[_camelCase("disabled_" + type)];

    for (var i = start; i <= end; i += 1) {
      if (!(hideFunc === null || hideFunc === void 0 ? void 0 : hideFunc(i, date))) {
        var _classNames;

        var disabled = disabledFunc === null || disabledFunc === void 0 ? void 0 : disabledFunc(i, date);
        var itemClasses = classNames(this.addPrefix('cell'), (_classNames = {}, _classNames[this.addPrefix('cell-active')] = active === i, _classNames[this.addPrefix('cell-disabled')] = disabled, _classNames));
        items.push(React.createElement("li", {
          key: i
        }, React.createElement("a", {
          role: "menu",
          className: itemClasses,
          tabIndex: -1,
          "data-key": type + "-" + i,
          onClick: !disabled ? this.handleClick.bind(this, type, i) : null
        }, showMeridian && type === 'hours' && i === 0 ? '12' : i)));
      }
    }

    return React.createElement("div", {
      className: this.addPrefix('column')
    }, React.createElement("div", {
      className: this.addPrefix('column-title')
    }, React.createElement(FormattedMessage, {
      id: type
    })), React.createElement("ul", {
      ref: function ref(_ref3) {
        _this2.container[type] = _ref3;
      }
    }, items));
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        classPrefix = _this$props2.classPrefix,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["className", "classPrefix"]);

    var time = this.getTime();
    var classes = classNames(classPrefix, className);
    var unhandled = getUnhandledProps(TimeDropdown, rest);
    return React.createElement("div", _extends({}, unhandled, {
      className: classes
    }), React.createElement("div", {
      className: this.addPrefix('content')
    }, React.createElement("div", {
      className: this.addPrefix('row')
    }, this.renderColumn('hours', time.hours), this.renderColumn('minutes', time.minutes), this.renderColumn('seconds', time.seconds))));
  };

  return TimeDropdown;
}(React.PureComponent);

TimeDropdown.propTypes = {
  date: PropTypes.instanceOf(Date),
  show: PropTypes.bool,
  showMeridian: PropTypes.bool,
  format: PropTypes.string,
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  disabledDate: PropTypes.func,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  hideHours: PropTypes.func,
  hideMinutes: PropTypes.func,
  hideSeconds: PropTypes.func,
  onSelect: PropTypes.func
};
TimeDropdown.defaultProps = {
  show: false
};
var enhance = defaultProps({
  classPrefix: 'calendar-time-dropdown'
});
export default enhance(TimeDropdown);