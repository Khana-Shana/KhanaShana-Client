"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _canUseDOM = _interopRequireDefault(require("./query/canUseDOM"));

var _stringFormatter = require("./utils/stringFormatter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var memoized = {};
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
var prefixRegex = new RegExp("^(" + prefixes.join('|') + ")");
var testStyle = _canUseDOM["default"] ? document.createElement('div').style : {};

function getWithPrefix(name) {
  for (var i = 0; i < prefixes.length; i += 1) {
    var prefixedName = prefixes[i] + name;

    if (prefixedName in testStyle) {
      return prefixedName;
    }
  }

  return null;
}
/**
 * @param {string} property Name of a css property to check for.
 * @return {?string} property name supported in the browser, or null if not
 * supported.
 */


function getVendorPrefixedName(property) {
  var name = (0, _stringFormatter.camelize)(property);

  if (memoized[name] === undefined) {
    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    if (prefixRegex.test(capitalizedName)) {
      throw new Error("getVendorPrefixedName must only be called with unprefixed\n          CSS property names. It was called with " + property);
    }

    memoized[name] = name in testStyle ? name : getWithPrefix(capitalizedName);
  }

  return memoized[name];
}

var _default = getVendorPrefixedName;
exports["default"] = _default;