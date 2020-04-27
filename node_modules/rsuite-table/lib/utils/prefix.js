"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.prefix = exports.defaultClassPrefix = exports.getClassNamePrefix = exports.globalKey = void 0;

var _curry = _interopRequireDefault(require("lodash/curry"));

var _classnames = _interopRequireDefault(require("classnames"));

var globalKey = 'rs-';
exports.globalKey = globalKey;

var getClassNamePrefix = function getClassNamePrefix() {
  if (typeof __RSUITE_CLASSNAME_PREFIX__ !== 'undefined') {
    return __RSUITE_CLASSNAME_PREFIX__;
  }

  return globalKey;
};

exports.getClassNamePrefix = getClassNamePrefix;

var defaultClassPrefix = function defaultClassPrefix(name) {
  return "" + getClassNamePrefix() + name;
};

exports.defaultClassPrefix = defaultClassPrefix;
var prefix = (0, _curry["default"])(function (pre, className) {
  if (!pre || !className) {
    return '';
  }

  if (Array.isArray(className)) {
    return (0, _classnames["default"])(className.filter(function (name) {
      return !!name;
    }).map(function (name) {
      return pre + "-" + name;
    }));
  }

  return pre + "-" + className;
});
exports.prefix = prefix;