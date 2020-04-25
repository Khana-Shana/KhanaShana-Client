"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = resetLeftForCells;

var React = _interopRequireWildcard(require("react"));

function resetLeftForCells(cells) {
  var left = 0;
  var nextCells = [];

  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    var nextCell = React.cloneElement(cell, {
      left: left
    });
    left += cell.props.width;
    nextCells.push(nextCell);
  }

  return nextCells;
}

module.exports = exports.default;