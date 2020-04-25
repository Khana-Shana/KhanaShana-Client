import intersection from 'lodash/intersection';
export default function shouldShowRowByExpanded(expandedRowKeys, parentKeys) {
  if (expandedRowKeys === void 0) {
    expandedRowKeys = [];
  }

  if (parentKeys === void 0) {
    parentKeys = [];
  }

  var intersectionKeys = intersection(expandedRowKeys, parentKeys);

  if (intersectionKeys.length === parentKeys.length) {
    return true;
  }

  return false;
}