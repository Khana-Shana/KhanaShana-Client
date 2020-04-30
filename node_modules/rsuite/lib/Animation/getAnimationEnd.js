"use strict";

exports.__esModule = true;
exports.default = getAnimationEnd;

function getAnimationEnd() {
  var style = document.createElement('div').style;

  if ('webkitAnimation' in style) {
    return 'webkitAnimationEnd';
  }

  return 'animationend';
}

module.exports = exports.default;