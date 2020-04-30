"use strict";

exports.__esModule = true;
exports.default = getDOMNode;

var _reactDom = require("react-dom");

function getDOMNode(element) {
  var _element$getHTMLEleme;

  /**
   * Native HTML elements
   */
  if (element === null || element === void 0 ? void 0 : element.nodeType) {
    return element;
  }
  /**
   * The component provides the `getHTMLElement` method.
   */


  var htmlElement = element === null || element === void 0 ? void 0 : (_element$getHTMLEleme = element.getHTMLElement) === null || _element$getHTMLEleme === void 0 ? void 0 : _element$getHTMLEleme.call(element);

  if (htmlElement) {
    return htmlElement;
  }
  /**
   * If you can't get the native HTML element, you can only get it through findDOMNode.
   */
  // eslint-disable-next-line react/no-find-dom-node


  return (0, _reactDom.findDOMNode)(element);
}

module.exports = exports.default;