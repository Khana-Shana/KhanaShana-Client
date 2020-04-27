import _pick from "lodash/pick";
import getSeconds from "date-fns/get_seconds";
import getMinutes from "date-fns/get_minutes";
import getHours from "date-fns/get_hours";
var disabledTimeProps = ['disabledHours', 'disabledMinutes', 'disabledSeconds'];
var hideTimeProps = ['hideHours', 'hideMinutes', 'hideSeconds'];
export var calendarOnlyProps = disabledTimeProps.concat(hideTimeProps);

function validTime(calendarProps, date) {
  if (!date) {
    return false;
  }

  return Object.keys(calendarProps).some(function (key) {
    if (/(Hours)/.test(key)) {
      return calendarProps[key](getHours(date), date);
    }

    if (/(Minutes)/.test(key)) {
      return calendarProps[key](getMinutes(date), date);
    }

    if (/(Seconds)/.test(key)) {
      return calendarProps[key](getSeconds(date), date);
    }

    return false;
  });
}
/**
 * Verify that the time is valid.
 * @param props
 * @param date
 */


export function disabledTime(props, date) {
  var calendarProps = _pick(props, disabledTimeProps);

  return validTime(calendarProps, date);
}