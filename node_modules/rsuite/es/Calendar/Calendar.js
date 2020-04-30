import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _pick from "lodash/pick";
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MonthDropdown from './MonthDropdown';
import TimeDropdown from './TimeDropdown';
import View from './View';
import Header from './Header';
import { getUnhandledProps, defaultProps, prefix, refType } from '../utils';
import { disabledTime, calendarOnlyProps } from '../utils/timeUtils';
import { shouldTime, shouldDate, shouldMonth } from '../utils/formatUtils';
import addMonths from "date-fns/add_months";
import { tuple } from '../@types/utils';
var CalendarState = tuple('DROP_TIME', 'DROP_MONTH');

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Calendar, _React$Component);

  function Calendar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.disabledDate = function (date) {
      var _this$props$disabledD, _this$props;

      if ((_this$props$disabledD = (_this$props = _this.props).disabledDate) === null || _this$props$disabledD === void 0 ? void 0 : _this$props$disabledD.call(_this$props, date)) {
        return true;
      }

      return false;
    };

    _this.disabledTime = function (date) {
      return disabledTime(_this.props, date);
    };

    _this.handleMoveForword = function () {
      var _this$props2 = _this.props,
          onMoveForword = _this$props2.onMoveForword,
          pageDate = _this$props2.pageDate;
      onMoveForword === null || onMoveForword === void 0 ? void 0 : onMoveForword(addMonths(pageDate, 1));
    };

    _this.handleMoveBackward = function () {
      var _this$props3 = _this.props,
          onMoveBackward = _this$props3.onMoveBackward,
          pageDate = _this$props3.pageDate;
      onMoveBackward === null || onMoveBackward === void 0 ? void 0 : onMoveBackward(addMonths(pageDate, -1));
    };

    return _this;
  }

  var _proto = Calendar.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props4 = this.props,
        calendarState = _this$props4.calendarState,
        pageDate = _this$props4.pageDate,
        onSelect = _this$props4.onSelect,
        onToggleMonthDropdown = _this$props4.onToggleMonthDropdown,
        onToggleTimeDropdown = _this$props4.onToggleTimeDropdown,
        onChangePageDate = _this$props4.onChangePageDate,
        onChangePageTime = _this$props4.onChangePageTime,
        onToggleMeridian = _this$props4.onToggleMeridian,
        format = _this$props4.format,
        calendarRef = _this$props4.calendarRef,
        className = _this$props4.className,
        isoWeek = _this$props4.isoWeek,
        limitEndYear = _this$props4.limitEndYear,
        classPrefix = _this$props4.classPrefix,
        renderTitle = _this$props4.renderTitle,
        renderToolbar = _this$props4.renderToolbar,
        renderCell = _this$props4.renderCell,
        showWeekNumbers = _this$props4.showWeekNumbers,
        showMeridian = _this$props4.showMeridian,
        rest = _objectWithoutPropertiesLoose(_this$props4, ["calendarState", "pageDate", "onSelect", "onToggleMonthDropdown", "onToggleTimeDropdown", "onChangePageDate", "onChangePageTime", "onToggleMeridian", "format", "calendarRef", "className", "isoWeek", "limitEndYear", "classPrefix", "renderTitle", "renderToolbar", "renderCell", "showWeekNumbers", "showMeridian"]);

    var showDate = shouldDate(format);
    var showTime = shouldTime(format);
    var showMonth = shouldMonth(format);
    var onlyShowTime = showTime && !showDate && !showMonth;
    var onlyShowMonth = showMonth && !showDate && !showTime;
    var dropTime = calendarState === 'DROP_TIME' || onlyShowTime;
    var dropMonth = calendarState === 'DROP_MONTH' || onlyShowMonth;
    var addPrefix = prefix(classPrefix);
    var calendarClasses = classNames(className, classPrefix, (_classNames = {}, _classNames[addPrefix('show-time-dropdown')] = dropTime, _classNames[addPrefix('show-month-dropdown')] = dropMonth, _classNames));
    var unhandled = getUnhandledProps(Calendar, rest);

    var timeDropdownProps = _pick(rest, calendarOnlyProps);

    return React.createElement("div", _extends({}, unhandled, {
      className: calendarClasses,
      ref: calendarRef
    }), React.createElement(Header, {
      date: pageDate,
      format: format,
      showMonth: showMonth,
      showDate: showDate,
      showTime: showTime,
      showMeridian: showMeridian,
      disabledDate: this.disabledDate,
      disabledTime: this.disabledTime,
      onMoveForword: this.handleMoveForword,
      onMoveBackward: this.handleMoveBackward,
      onToggleMonthDropdown: onToggleMonthDropdown,
      onToggleTimeDropdown: onToggleTimeDropdown,
      onToggleMeridian: onToggleMeridian,
      renderTitle: renderTitle,
      renderToolbar: renderToolbar
    }), showDate && React.createElement(View, {
      key: "MonthView",
      activeDate: pageDate,
      onSelect: onSelect,
      isoWeek: isoWeek,
      disabledDate: this.disabledDate,
      renderCell: renderCell,
      showWeekNumbers: showWeekNumbers
    }), showMonth && React.createElement(MonthDropdown, {
      date: pageDate,
      onSelect: onChangePageDate,
      show: dropMonth,
      limitEndYear: limitEndYear,
      disabledMonth: this.disabledDate
    }), showTime && React.createElement(TimeDropdown, _extends({}, timeDropdownProps, {
      date: pageDate,
      format: format,
      show: dropTime,
      showMeridian: showMeridian,
      onSelect: onChangePageTime
    })));
  };

  return Calendar;
}(React.Component);

Calendar.propTypes = {
  pageDate: PropTypes.instanceOf(Date),
  calendarState: PropTypes.oneOf(CalendarState),
  calendarRef: refType,
  format: PropTypes.string,
  isoWeek: PropTypes.bool,
  limitEndYear: PropTypes.number,
  className: PropTypes.string,
  showWeekNumbers: PropTypes.bool,
  showMeridian: PropTypes.bool,
  classPrefix: PropTypes.string,
  disabledDate: PropTypes.func,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  hideHours: PropTypes.func,
  hideMinutes: PropTypes.func,
  hideSeconds: PropTypes.func,
  onMoveForword: PropTypes.func,
  onMoveBackward: PropTypes.func,
  onSelect: PropTypes.func,
  onToggleMonthDropdown: PropTypes.func,
  onToggleTimeDropdown: PropTypes.func,
  onChangePageDate: PropTypes.func,
  onChangePageTime: PropTypes.func,
  onToggleMeridian: PropTypes.func,
  renderTitle: PropTypes.func,
  renderToolbar: PropTypes.func,
  renderCell: PropTypes.func
};
export default defaultProps({
  classPrefix: 'calendar'
})(Calendar);