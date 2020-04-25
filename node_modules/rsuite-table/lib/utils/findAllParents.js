"use strict";

exports.__esModule = true;
exports["default"] = findAllParents;

function findAllParents(rowData, rowKey) {
  var parents = [];

  if (!rowData) {
    return parents;
  }

  function findParent(data) {
    if (data) {
      parents.push(data[rowKey]);

      if (data._parent) {
        findParent(data._parent);
      }
    }
  }

  findParent(rowData._parent);
  return parents;
}

module.exports = exports.default;