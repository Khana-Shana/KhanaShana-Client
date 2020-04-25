import curry from 'lodash/curry';
import classNames from 'classnames';
export var globalKey = 'rs-';
export var getClassNamePrefix = function getClassNamePrefix() {
  if (typeof __RSUITE_CLASSNAME_PREFIX__ !== 'undefined') {
    return __RSUITE_CLASSNAME_PREFIX__;
  }

  return globalKey;
};
export var defaultClassPrefix = function defaultClassPrefix(name) {
  return "" + getClassNamePrefix() + name;
};
export var prefix = curry(function (pre, className) {
  if (!pre || !className) {
    return '';
  }

  if (Array.isArray(className)) {
    return classNames(className.filter(function (name) {
      return !!name;
    }).map(function (name) {
      return pre + "-" + name;
    }));
  }

  return pre + "-" + className;
});