import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _pick from "lodash/pick";
import _capitalize from "lodash/capitalize";
import _get from "lodash/get";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getStyle, addStyle } from 'dom-lib';
import Transition, { transitionPropTypes } from './Transition';
import createChainedFunction from '../utils/createChainedFunction';

var triggerBrowserReflow = function triggerBrowserReflow(node) {
  return _get(node, 'offsetHeight');
};

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function defaultGetDimensionValue(dimension, elem) {
  var value = _get(elem, "offset" + _capitalize(dimension));

  var margins = MARGINS[dimension];
  return value + parseInt(getStyle(elem, margins[0]), 10) + parseInt(getStyle(elem, margins[1]), 10);
}

function getScrollDimensionValue(elem, dimension) {
  var value = _get(elem, "scroll" + _capitalize(dimension));

  return value + "px";
}

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Collapse, _React$Component);

  function Collapse(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.transitionRef = void 0;

    _this.handleEnter = function (elem) {
      var dimension = _this.dimension();

      addStyle(elem, dimension, 0);
    };

    _this.handleEntering = function (elem) {
      var dimension = _this.dimension();

      addStyle(elem, dimension, getScrollDimensionValue(elem, dimension));
    };

    _this.handleEntered = function (elem) {
      var dimension = _this.dimension();

      addStyle(elem, dimension, 'auto');
    };

    _this.handleExit = function (elem) {
      var dimension = _this.dimension();

      var getDimensionValue = _this.props.getDimensionValue;
      var value = getDimensionValue ? getDimensionValue(dimension, elem) : 0;
      addStyle(elem, dimension, value + "px");
    };

    _this.handleExiting = function (elem) {
      var dimension = _this.dimension();

      triggerBrowserReflow(elem);
      addStyle(elem, dimension, 0);
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
    var enterEventHandler = createChainedFunction(this.handleEnter, onEnter);
    var enteringEventHandler = createChainedFunction(this.handleEntering, onEntering);
    var enteredEventHandler = createChainedFunction(this.handleEntered, onEntered);
    var exitEventHandler = createChainedFunction(this.handleExit, onExit);
    var exitingEventHandler = createChainedFunction(this.handleExiting, onExiting);
    return React.createElement(Transition, _extends({}, _pick(this.props, Object.keys(transitionPropTypes)), {
      ref: this.transitionRef,
      "aria-expanded": role ? this.props.in : null,
      className: classNames(className, {
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

Collapse.propTypes = _extends({}, transitionPropTypes, {
  dimension: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  getDimensionValue: PropTypes.func,
  role: PropTypes.string
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
export default Collapse;