import { flattenTree } from '../utils/treeUtils';
var hasSymbol = typeof Symbol === 'function';
export var KEY_GROUP = hasSymbol ? Symbol('_$grouped') : '_$grouped';
export var KEY_GROUP_TITLE = 'groupTitle';
export default function getDataGroupBy(data, key, sort) {
  if (data === void 0) {
    data = [];
  }

  var tempData = {};
  var isSort = typeof sort === 'function';
  data.forEach(function (item) {
    if (!tempData[item[key]]) {
      tempData[item[key]] = [];
    }

    tempData[item[key]].push(item);
  });
  var nextData = Object.entries(tempData).map(function (_ref) {
    var _ref2;

    var groupTitle = _ref[0],
        children = _ref[1];
    return _ref2 = {
      children: isSort ? children.sort(sort(false)) : children
    }, _ref2[KEY_GROUP_TITLE] = groupTitle, _ref2[KEY_GROUP] = true, _ref2;
  });

  if (isSort) {
    nextData = nextData.sort(sort(true));
  }

  return flattenTree(nextData);
}