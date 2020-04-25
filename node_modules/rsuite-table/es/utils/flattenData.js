import _extends from "@babel/runtime/helpers/esm/extends";

function flattenData(data) {
  var flattenItems = [];

  function loop(data, _parent) {
    if (!Array.isArray(data)) {
      return;
    }

    data.forEach(function (item) {
      item._parent = _parent;
      flattenItems.push(_extends({}, item));

      if (item.children) {
        loop(item.children, item);
      }
    });
  }

  loop(data, null);
  return flattenItems;
}

export default flattenData;