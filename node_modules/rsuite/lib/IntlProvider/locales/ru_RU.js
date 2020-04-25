"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var Calendar = {
  sunday: 'Вс',
  monday: 'Пн',
  tuesday: 'Вт',
  wednesday: 'Ср',
  thursday: 'Чт',
  friday: 'Пт',
  saturday: 'Сб',
  ok: 'ОК',
  today: 'Сегодня',
  yesterday: 'Вчера',
  hours: 'Часов',
  minutes: 'Минут',
  seconds: 'Секунд',
  formattedMonthPattern: 'MMM, YYYY',
  formattedDayPattern: 'MMM DD, YYYY'
};
var _default = {
  Pagination: {
    more: 'Больше',
    prev: 'Предыдущая',
    next: 'Следующая',
    first: 'Первая',
    last: 'Последняя'
  },
  Table: {
    emptyMessage: 'Данные не найдены',
    loading: 'Загрузка...'
  },
  TablePagination: {
    lengthMenuInfo: '{0} / страниц',
    totalInfo: 'всего: {0}'
  },
  Calendar: Calendar,
  DatePicker: (0, _extends2.default)({}, Calendar),
  DateRangePicker: (0, _extends2.default)({}, Calendar, {
    last7Days: 'Последние 7 дней'
  }),
  Picker: {
    noResultsText: 'Результаты не найдены',
    placeholder: 'Выбрать',
    searchPlaceholder: 'Поиск',
    checkAll: 'Все'
  },
  InputPicker: {
    newItem: 'Новый',
    createOption: 'Создать опцию "{0}"'
  },
  Uploader: {
    inited: 'Начало',
    progress: 'Выгрузка',
    error: 'Ошибка',
    complete: 'Завершенно',
    emptyFile: 'Пусто',
    upload: 'Загрузить'
  }
};
exports.default = _default;
module.exports = exports.default;