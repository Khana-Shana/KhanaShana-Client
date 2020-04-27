import * as React from 'react';
export default function resetLeftForCells(cells) {
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