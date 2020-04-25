/**
 * https://zh-hans.reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
 */
var REACT_STATICS = ['childContextTypes', 'contextType', 'contextTypes', 'getDefaultProps', 'getDerivedStateFromError', 'getDerivedStateFromProps', 'defaultProps', 'propTypes'];

function extendReactStatics(targetComponent, sourceComponent, blacklist) {
  if (blacklist === void 0) {
    blacklist = [];
  }

  for (var i = 0; i < REACT_STATICS.length; i++) {
    var key = REACT_STATICS[i];
    var hasDescriptor = Object.getOwnPropertyDescriptor(targetComponent, key);
    var descriptor = Object.getOwnPropertyDescriptor(sourceComponent, key);

    if (blacklist.includes(key) || !descriptor || hasDescriptor) {
      continue;
    }

    try {
      Object.defineProperty(targetComponent, key, descriptor);
    } catch (e) {// Avoid failures from read-only properties
    }
  }
}

export default extendReactStatics;