"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.disabledTime = disabledTime;
exports.calendarOnlyProps = void 0;

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _get_seconds = _interopRequireDefault(require("date-fns/get_seconds"));

var _get_minutes = _interopRequireDefault(require("date-fns/get_minutes"));

var _get_hours = _interopRequireDefault(require("date-fns/get_hours"));

var disabledTimeProps = ['disabledHours', 'disabledMinutes', 'disabledSeconds'];
var hideTimeProps = ['hideHours', 'hideMinutes', 'hideSeconds'];
var calendarOnlyProps = disabledTimeProps.concat(hideTimeProps);
exports.calendarOnlyProps = calendarOnlyProps;

function validTime(calendarProps, date) {
  if (!date) {
    return false;
  }

  return Object.keys(calendarProps).some(function (key) {
    if (/(Hours)/.test(key)) {
      return calendarProps[key]((0, _get_hours.default)(date), date);
    }

    if (/(Minutes)/.test(key)) {
      return calendarProps[key]((0, _get_minutes.default)(date), date);
    }

    if (/(Seconds)/.test(key)) {
      return calendarProps[key]((0, _get_seconds.default)(date), date);
    }

    return false;
  });
}
/**
 * Verify that the time is valid.
 * @param props
 * @param date
 */


function disabledTime(props, date) {
  var calendarProps = (0, _pick2.default)(props, disabledTimeProps);
  return validTime(calendarProps, date);
}