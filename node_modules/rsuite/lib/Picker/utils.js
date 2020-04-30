"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createConcatChildrenFunction = createConcatChildrenFunction;
exports.shouldDisplay = shouldDisplay;
exports.getToggleWrapperClassName = getToggleWrapperClassName;
exports.onMenuKeyDown = onMenuKeyDown;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _kebabCase2 = _interopRequireDefault(require("lodash/kebabCase"));

var _trim2 = _interopRequireDefault(require("lodash/trim"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _treeUtils = require("../utils/treeUtils");

var _placementPolyfill = _interopRequireDefault(require("../utils/placementPolyfill"));

var _reactToString = _interopRequireDefault(require("../utils/reactToString"));

var defaultNodeKeys = {
  valueKey: 'value',
  childrenKey: 'children'
};

function createConcatChildrenFunction(node, nodeValue, nodeKeys) {
  if (nodeKeys === void 0) {
    nodeKeys = defaultNodeKeys;
  }

  var _nodeKeys = nodeKeys,
      valueKey = _nodeKeys.valueKey,
      childrenKey = _nodeKeys.childrenKey;
  return function (data, children) {
    if (nodeValue) {
      node = (0, _treeUtils.findNodeOfTree)(data, function (item) {
        return nodeValue === item[valueKey];
      });
    }

    node[childrenKey] = children;
    return data.concat([]);
  };
}

function shouldDisplay(label, searchKeyword) {
  if (!(0, _trim2.default)(searchKeyword)) {
    return true;
  }

  var keyword = searchKeyword.toLocaleLowerCase();

  if (typeof label === 'string' || typeof label === 'number') {
    return ("" + label).toLocaleLowerCase().indexOf(keyword) >= 0;
  } else if (React.isValidElement(label)) {
    var nodes = (0, _reactToString.default)(label);
    return nodes.join('').toLocaleLowerCase().indexOf(keyword) >= 0;
  }

  return false;
}

function getToggleWrapperClassName(name, prefix, props, hasValue, classes) {
  var _extends2;

  var className = props.className,
      placement = props.placement,
      appearance = props.appearance,
      cleanable = props.cleanable,
      block = props.block,
      disabled = props.disabled,
      countable = props.countable;
  return (0, _classnames.default)(className, prefix(name), prefix(appearance), prefix('toggle-wrapper'), (0, _extends3.default)((_extends2 = {}, _extends2[prefix("placement-" + (0, _kebabCase2.default)((0, _placementPolyfill.default)(placement)))] = placement, _extends2[prefix('block')] = block, _extends2[prefix('has-value')] = hasValue, _extends2[prefix('disabled')] = disabled, _extends2[prefix('cleanable')] = hasValue && cleanable, _extends2[prefix('countable')] = countable, _extends2), classes));
}

function onMenuKeyDown(event, events) {
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