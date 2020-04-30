"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = reactToString;

var React = _interopRequireWildcard(require("react"));

function reactToString(element) {
  var nodes = [];

  var recursion = function recursion(elmt) {
    React.Children.forEach(elmt.props.children, function (child) {
      if (React.isValidElement(child)) {
        recursion(child);
      } else if (typeof child === 'string') {
        nodes.push(child);
      }
    });
  };

  recursion(element);
  return nodes;
}

module.exports = exports.default;