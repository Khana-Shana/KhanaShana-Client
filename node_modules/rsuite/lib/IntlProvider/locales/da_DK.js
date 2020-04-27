"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var Calendar = {
  sunday: 'Sø',
  monday: 'Ma',
  tuesday: 'Ti',
  wednesday: 'On',
  thursday: 'To',
  friday: 'Fr',
  saturday: 'Lø',
  ok: 'OK',
  today: 'I dag',
  yesterday: 'I går',
  hours: 'Timer',
  minutes: 'Minutter',
  seconds: 'Sekunder',

  /**
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   **/
  formattedMonthPattern: 'MMM YYYY',
  formattedDayPattern: 'DD MMM YYYY'
};
var _default = {
  Pagination: {
    more: 'Mere',
    prev: 'Tidligere',
    next: 'Næste',
    first: 'Først',
    last: 'Sidst'
  },
  Table: {
    emptyMessage: 'Ingen data fundet',
    loading: 'Indlæser...'
  },
  TablePagination: {
    lengthMenuInfo: '{0} / side',
    totalInfo: 'total: {0}'
  },
  Calendar: Calendar,
  DatePicker: (0, _extends2.default)({}, Calendar),
  DateRangePicker: (0, _extends2.default)({}, Calendar, {
    last7Days: 'Seneste 7 dage'
  }),
  Picker: {
    noResultsText: 'Ingen resultater fundet',
    placeholder: 'Vælg',
    searchPlaceholder: 'Søg',
    checkAll: 'Alle'
  },
  InputPicker: {
    newItem: 'Ny besked',
    createOption: 'Opret mulighed "{0}"'
  },
  Uploader: {
    inited: 'Initial',
    progress: 'Uploade',
    error: 'Fejl',
    complete: 'Færdig',
    emptyFile: 'Tom',
    upload: 'Upload'
  }
};
exports.default = _default;
module.exports = exports.default;