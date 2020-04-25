import * as React from 'react';
import isPlainObject from 'lodash/isPlainObject';

function getTotalByColumns(columns) {
  var totalFlexGrow = 0;
  var totalWidth = 0;

  var count = function count(items) {
    Array.from(items).forEach(function (column) {
      if (React.isValidElement(column)) {
        var _column$props = column.props,
            flexGrow = _column$props.flexGrow,
            _column$props$width = _column$props.width,
            width = _column$props$width === void 0 ? 0 : _column$props$width;
        totalFlexGrow += flexGrow || 0;
        totalWidth += flexGrow ? 0 : width;
      } else if (Array.isArray(column)) {
        count(column);
      }
    });
  };

  if (Array.isArray(columns)) {
    count(columns);
  } else if (isPlainObject(columns)) {
    var _columns$props = columns.props,
        flexGrow = _columns$props.flexGrow,
        _columns$props$width = _columns$props.width,
        width = _columns$props$width === void 0 ? 0 : _columns$props$width;
    totalFlexGrow = flexGrow || 0;
    totalWidth = flexGrow ? 0 : width;
  }

  return {
    totalFlexGrow: totalFlexGrow,
    totalWidth: totalWidth
  };
}

export default getTotalByColumns;