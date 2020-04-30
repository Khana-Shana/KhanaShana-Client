"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _capitalize2 = _interopRequireDefault(require("lodash/capitalize"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _domLib = require("dom-lib");

var _Transition = _interopRequireWildcard(require("./Transition"));

var _createChainedFunction = _interopRequireDefault(require("../utils/createChainedFunction"));

var triggerBrowserReflow = function triggerBrowserReflow(node) {
  return (0, _get2.default)(node, 'offsetHeight');
};

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function defaultGetDimensionValue(dimension, elem) {
  var value = (0, _get2.default)(elem, "offset" + (0, _capitalize2.default)(dimension));
  var margins = MARGINS[dimension];
  return value + parseInt((0, _domLib.getStyle)(elem, margins[0]), 10) + parseInt((0, _domLib.getStyle)(elem, margins[1]), 10);
}

function getScrollDimensionValue(elem, dimension) {
  var value = (0, _get2.default)(elem, "scroll" + (0, _capitalize2.default)(dimension));
  return value + "px";
}

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Collapse, _React$Component);

  function Collapse(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.transitionRef = void 0;

    _this.handleEnter = function (elem) {
      var dimension = _this.dimension();

      (0, _domLib.addStyle)(elem, dimension, 0);
    };

    _this.handleEntering = function (elem) {
      var dimension = _this.dimension();

      (0, _domLib.addStyle)(elem, dimension, getScrollDimensionValue(elem, dimension));
    };

    _this.handleEntered = function (elem) {
      var dimension = _this.dimension();

      (0, _domLib.addStyle)(elem, dimension, 'auto');
    };

    _this.handleExit = function (elem) {
      var dimension = _this.dimension();

      var getDimensionValue = _this.props.getDimensionValue;
      var value = getDimensionValue ? getDimensionValue(dimension, elem) : 0;
      (0, _domLib.addStyle)(elem, dimension, value + "px");
    };

    _this.handleExiting = function (elem) {
      var dimension = _this.dimension();

      triggerBrowserReflow(elem);
      (0, _domLib.addStyle)(elem, dimension, 0);
    };

    _this.transitionRef = React.createRef();
    return _this;
  } // for testing


  var _proto = Collapse.prototype;

  _proto.getTransitionInstance = function getTransitionInstance() {
    return this.transitionRef.current;
  };

  _proto.dimension = function dimension() {
    var dimension = this.props.dimension;
    return typeof dimension === 'function' ? dimension() : dimension;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        role = _this$props.role,
        className = _this$props.className,
        onExited = _this$props.onExited,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting;
    var enterEventHandler = (0, _createChainedFunction.default)(this.handleEnter, onEnter);
    var enteringEventHandler = (0, _createChainedFunction.default)(this.handleEntering, onEntering);
    var enteredEventHandler = (0, _createChainedFunction.default)(this.handleEntered, onEntered);
    var exitEventHandler = (0, _createChainedFunction.default)(this.handleExit, onExit);
    var exitingEventHandler = (0, _createChainedFunction.default)(this.handleExiting, onExiting);
    return React.createElement(_Transition.default, (0, _extends2.default)({}, (0, _pick2.default)(this.props, Object.keys(_Transition.transitionPropTypes)), {
      ref: this.transitionRef,
      "aria-expanded": role ? this.props.in : null,
      className: (0, _classnames.default)(className, {
        width: this.dimension() === 'width'
      }),
      onEnter: enterEventHandler,
      onEntering: enteringEventHandler,
      onEntered: enteredEventHandler,
      onExit: exitEventHandler,
      onExiting: exitingEventHandler,
      onExited: onExited
    }));
  };

  return Collapse;
}(React.Component);

Collapse.propTypes = (0, _extends2.default)({}, _Transition.transitionPropTypes, {
  dimension: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  getDimensionValue: _propTypes.default.func,
  role: _propTypes.default.string
});
Collapse.displayName = 'Collapse';
Collapse.defaultProps = {
  timeout: 300,
  dimension: 'height',
  exitedClassName: 'collapse',
  exitingClassName: 'collapsing',
  enteredClassName: 'collapse in',
  enteringClassName: 'collapsing',
  getDimensionValue: defaultGetDimensionValue
};
var _default = Collapse;
exports.default = _default;
module.exports = exports.default;