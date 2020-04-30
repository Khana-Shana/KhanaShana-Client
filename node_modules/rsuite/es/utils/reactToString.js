import * as React from 'react';
export default function reactToString(element) {
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