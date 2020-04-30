"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var Calendar = {
  sunday: 'Do',
  monday: 'Lu',
  tuesday: 'Ma',
  wednesday: 'Me',
  thursday: 'Gi',
  friday: 'Ve',
  saturday: 'Sa',
  ok: 'OK',
  today: 'Oggi',
  yesterday: 'Ieri',
  hours: 'Ore',
  minutes: 'Minuti',
  seconds: 'Secondi',

  /**
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   **/
  formattedMonthPattern: 'MMM YYYY',
  formattedDayPattern: 'DD MMM YYYY'
};
var _default = {
  Pagination: {
    more: 'Mostra di più',
    prev: 'Indietro',
    next: 'Avanti',
    first: 'Inizio',
    last: 'Fine'
  },
  Table: {
    emptyMessage: 'Nessun elemento trovato',
    loading: 'Caricamento in corso...'
  },
  TablePagination: {
    lengthMenuInfo: '{0} / pagina',
    totalInfo: 'Totale: {0}'
  },
  Calendar: Calendar,
  DatePicker: (0, _extends2.default)({}, Calendar),
  DateRangePicker: (0, _extends2.default)({}, Calendar, {
    last7Days: 'Ultimi 7 Giorni'
  }),
  Picker: {
    noResultsText: 'Nessun risultato trovato',
    placeholder: 'Seleziona',
    searchPlaceholder: 'Cerca',
    checkAll: 'Tutti'
  },
  InputPicker: {
    newItem: 'Nuovo elemento',
    createOption: 'Crea opzione "{0}"'
  },
  Uploader: {
    inited: 'Inizializzato',
    progress: 'Avanzamento',
    error: 'Errore',
    complete: 'Completato',
    emptyFile: 'Vuoto',
    upload: 'Carica'
  }
};
exports.default = _default;
module.exports = exports.default;