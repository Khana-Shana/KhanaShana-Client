import _extends from "@babel/runtime/helpers/esm/extends";
import _isUndefined from "lodash/isUndefined";
import shallowEqual from '../utils/shallowEqual';
export function isEveryChildChecked(node, nodes, props) {
  var childrenKey = props.childrenKey;
  var children = null;

  if (node[childrenKey]) {
    children = node[childrenKey].filter(function (child) {
      return nodes[child.refKey] && !nodes[child.refKey].uncheckable;
    });

    if (!children.length) {
      return nodes[node.refKey].check;
    }

    return children.every(function (child) {
      var _child$childrenKey;

      if ((_child$childrenKey = child[childrenKey]) === null || _child$childrenKey === void 0 ? void 0 : _child$childrenKey.length) {
        return isEveryChildChecked(child, nodes, props);
      }

      return nodes[child.refKey].check;
    });
  }

  return nodes[node.refKey].check;
}
export function isSomeChildChecked(node, nodes, props) {
  var childrenKey = props.childrenKey;

  if (!node[childrenKey]) {
    return false;
  }

  return node[childrenKey].some(function (child) {
    var _nodes$child$refKey;

    if ((_nodes$child$refKey = nodes[child.refKey]) === null || _nodes$child$refKey === void 0 ? void 0 : _nodes$child$refKey.check) {
      return true;
    }

    return isSomeChildChecked(child, nodes, props);
  });
}
/**
 * 判断第一层节点是否存在有children的节点
 * @param {*} data
 */

export function isSomeNodeHasChildren(data, childrenKey) {
  return data.some(function (node) {
    return node[childrenKey];
  });
}
/**
 * 获取该节点的兄弟节点是否都为 uncheckable
 * @param {*} node
 */

export function getSiblingNodeUncheckable(node, nodes) {
  var list = [];
  var parentNodeRefkey = node.parentNode ? node.parentNode.refKey : '';
  Object.keys(nodes).forEach(function (refKey) {
    var _curNode$parentNode;

    var curNode = nodes[refKey];

    if (_isUndefined(node.parentNode) && _isUndefined(curNode.parentNode)) {
      list.push(curNode);
    } else if (((_curNode$parentNode = curNode.parentNode) === null || _curNode$parentNode === void 0 ? void 0 : _curNode$parentNode.refKey) === parentNodeRefkey) {
      list.push(curNode);
    }
  });
  return list.every(function (node) {
    return node.uncheckable;
  });
}
/**
 * 获取第一层节点是否全部都为 uncheckable
 */

export function getEveryFisrtLevelNodeUncheckable(nodes) {
  var list = [];
  Object.keys(nodes).forEach(function (refKey) {
    var curNode = nodes[refKey];

    if (!curNode.parentNode) {
      list.push(curNode);
    }
  });
  return list.every(function (node) {
    return node.uncheckable;
  });
}
/**
 * 获取节点的是否需要隐藏checkbox
 * @param {*} node
 */

export function getUncheckableState(node, props) {
  var _props$uncheckableIte = props.uncheckableItemValues,
      uncheckableItemValues = _props$uncheckableIte === void 0 ? [] : _props$uncheckableIte,
      valueKey = props.valueKey;
  return uncheckableItemValues.some(function (value) {
    return shallowEqual(node[valueKey], value);
  });
}
/**
 * 获取格式化后的树
 * @param data
 * @param nodes
 * @param props
 */

export function getFormattedTree(data, nodes, props) {
  var childrenKey = props.childrenKey;
  return data.map(function (node) {
    var formatted = _extends({}, node);

    var curNode = nodes[node.refKey];

    if (curNode) {
      var _node$childrenKey;

      formatted.check = curNode.check;
      formatted.expand = curNode.expand;
      formatted.uncheckable = curNode.uncheckable;
      formatted.parentNode = curNode.parentNode;

      if (((_node$childrenKey = node[childrenKey]) === null || _node$childrenKey === void 0 ? void 0 : _node$childrenKey.length) > 0) {
        formatted[childrenKey] = getFormattedTree(formatted[childrenKey], nodes, props);
      }
    }

    return formatted;
  });
}
/**
 * 获取每个节点的disable状态
 * @param {*} node
 */

export function getDisabledState(nodes, node, props) {
  var _props$disabledItemVa = props.disabledItemValues,
      disabledItemValues = _props$disabledItemVa === void 0 ? [] : _props$disabledItemVa,
      valueKey = props.valueKey;
  return disabledItemValues.some(function (value) {
    return shallowEqual(nodes[node.refKey][valueKey], value);
  });
}