import getDay from "date-fns/get_day";
import addDays from "date-fns/add_days";

/**
 * Get all weeks of this month
 * @params monthDate
 * @return date[]
 */
export default function getMonthView(monthDate, isoWeek) {
  var firstDayOfMonth = getDay(monthDate);
  var distance = 0 - firstDayOfMonth;

  if (isoWeek) {
    distance = 1 - firstDayOfMonth;

    if (firstDayOfMonth === 0) {
      distance = -6;
    }
  }

  var firstWeekendDate = addDays(monthDate, distance);
  var weeks = [firstWeekendDate];
  var nextWeekendDate = addDays(firstWeekendDate, 7);
  weeks.push(nextWeekendDate);

  while (weeks.length < 6) {
    nextWeekendDate = addDays(nextWeekendDate, 7);
    weeks.push(nextWeekendDate);
  }

  return weeks;
}