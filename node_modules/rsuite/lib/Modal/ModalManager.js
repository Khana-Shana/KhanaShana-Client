"use strict";

exports.__esModule = true;
exports.default = void 0;

var _domLib = require("dom-lib");

function findIndexOf(arr, cb) {
  var index = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      index = i;
      return true;
    }

    return false;
  });
  return index;
}

function findContainer(data, modal) {
  return findIndexOf(data, function (d) {
    return d.modals.indexOf(modal) !== -1;
  });
}

var ModalManager =
/*#__PURE__*/
function () {
  function ModalManager(hideSiblingNodes) {
    if (hideSiblingNodes === void 0) {
      hideSiblingNodes = true;
    }

    this.hideSiblingNodes = null;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.hideSiblingNodes = hideSiblingNodes;
    this.modals = [];
    this.containers = [];
    this.data = [];
  }

  var _proto = ModalManager.prototype;

  _proto.add = function add(modal, container, className) {
    var modalIndex = this.modals.indexOf(modal);
    var containerIndex = this.containers.indexOf(container);

    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal);

    if (containerIndex !== -1) {
      this.data[containerIndex].modals.push(modal);
      return modalIndex;
    }

    var data = {
      modals: [modal],
      classes: className ? className.split(/\s+/) : [],
      style: {
        overflow: container.style.overflow,
        paddingRight: container.style.paddingRight
      },
      overflowing: (0, _domLib.isOverflowing)(container)
    };

    if (data.overflowing) {
      var style = {
        paddingRight: parseInt((0, _domLib.getStyle)(container, 'paddingRight') || 0, 10) + (0, _domLib.getScrollbarSize)() + 'px'
      };
      (0, _domLib.addStyle)(container, style);
    }

    data.classes.forEach(_domLib.addClass.bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIndex;
  };

  _proto.remove = function remove(modal) {
    var modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return;
    }

    var containerIndex = findContainer(this.data, modal);
    var data = this.data[containerIndex];
    var container = this.containers[containerIndex];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    if (data.modals.length === 0) {
      Object.keys(data.style).forEach(function (key) {
        return container.style[key] = data.style[key];
      });
      data.classes.forEach(_domLib.removeClass.bind(null, container));
      this.containers.splice(containerIndex, 1);
      this.data.splice(containerIndex, 1);
    }
  };

  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };

  return ModalManager;
}();

var _default = ModalManager;
exports.default = _default;
module.exports = exports.default;