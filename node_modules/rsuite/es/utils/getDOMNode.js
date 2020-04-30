import { findDOMNode } from 'react-dom';
export default function getDOMNode(element) {
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


  return findDOMNode(element);
}