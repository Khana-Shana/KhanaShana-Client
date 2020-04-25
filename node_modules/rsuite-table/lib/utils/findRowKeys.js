"use strict";

exports.__esModule = true;
exports["default"] = findRowKeys;

function findRowKeys(rows, rowKey, expanded) {
  var keys = [];

  for (var i = 0; i < rows.length; i++) {
    var item = rows[i];

    if (item.children) {
      keys.push(item[rowKey]);
      keys = [].concat(keys, findRowKeys(item.children, rowKey));
    } else if (expanded) {
      keys.push(item[rowKey]);
    }
  }

  return keys;
}

module.exports = exports.default;