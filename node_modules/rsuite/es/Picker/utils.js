import _extends from "@babel/runtime/helpers/esm/extends";
import _kebabCase from "lodash/kebabCase";
import _trim from "lodash/trim";
import * as React from 'react';
import classNames from 'classnames';
import { findNodeOfTree } from '../utils/treeUtils';
import placementPolyfill from '../utils/placementPolyfill';
import reactToString from '../utils/reactToString';
var defaultNodeKeys = {
  valueKey: 'value',
  childrenKey: 'children'
};
export function createConcatChildrenFunction(node, nodeValue, nodeKeys) {
  if (nodeKeys === void 0) {
    nodeKeys = defaultNodeKeys;
  }

  var _nodeKeys = nodeKeys,
      valueKey = _nodeKeys.valueKey,
      childrenKey = _nodeKeys.childrenKey;
  return function (data, children) {
    if (nodeValue) {
      node = findNodeOfTree(data, function (item) {
        return nodeValue === item[valueKey];
      });
    }

    node[childrenKey] = children;
    return data.concat([]);
  };
}
export function shouldDisplay(label, searchKeyword) {
  if (!_trim(searchKeyword)) {
    return true;
  }

  var keyword = searchKeyword.toLocaleLowerCase();

  if (typeof label === 'string' || typeof label === 'number') {
    return ("" + label).toLocaleLowerCase().indexOf(keyword) >= 0;
  } else if (React.isValidElement(label)) {
    var nodes = reactToString(label);
    return nodes.join('').toLocaleLowerCase().indexOf(keyword) >= 0;
  }

  return false;
}
export function getToggleWrapperClassName(name, prefix, props, hasValue, classes) {
  var _extends2;

  var className = props.className,
      placement = props.placement,
      appearance = props.appearance,
      cleanable = props.cleanable,
      block = props.block,
      disabled = props.disabled,
      countable = props.countable;
  return classNames(className, prefix(name), prefix(appearance), prefix('toggle-wrapper'), _extends((_extends2 = {}, _extends2[prefix("placement-" + _kebabCase(placementPolyfill(placement)))] = placement, _extends2[prefix('block')] = block, _extends2[prefix('has-value')] = hasValue, _extends2[prefix('disabled')] = disabled, _extends2[prefix('cleanable')] = hasValue && cleanable, _extends2[prefix('countable')] = countable, _extends2), classes));
}
export function onMenuKeyDown(event, events) {
  var down = events.down,
      up = events.up,
      enter = events.enter,
      del = events.del,
      esc = events.esc;

  switch (event.keyCode) {
    // down
    case 40:
      down === null || down === void 0 ? void 0 : down(event);
      event.preventDefault();
      break;
    // up

    case 38:
      up === null || up === void 0 ? void 0 : up(event);
      event.preventDefault();
      break;
    // enter

    case 13:
      enter === null || enter === void 0 ? void 0 : enter(event);
      event.preventDefault();
      break;
    // delete

    case 8:
      del === null || del === void 0 ? void 0 : del(event);
      break;
    // esc | tab

    case 27:
    case 9:
      esc === null || esc === void 0 ? void 0 : esc(event);
      event.preventDefault();
      break;

    default:
  }
}