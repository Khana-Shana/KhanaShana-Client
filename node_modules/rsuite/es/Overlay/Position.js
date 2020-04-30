import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _omit from "lodash/omit";
import * as React from 'react';
import classNames from 'classnames';
import { ownerDocument, getContainer, on } from 'dom-lib';
import positionUtils from './positionUtils';
import shallowEqual from '../utils/shallowEqual';
import getDOMNode from '../utils/getDOMNode';

var Position =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Position, _React$Component);

  function Position(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.utils = null;
    _this.lastTarget = false;
    _this.needsFlush = null;
    _this.container = null;
    _this.containerScrollListener = null;
    _this.childRef = void 0;

    _this.updatePosition = function (placementChanged) {
      if (placementChanged === void 0) {
        placementChanged = true;
      }

      var target = _this.getTargetSafe();

      var shouldUpdatePosition = _this.props.shouldUpdatePosition;
      /**
       * 如果 target 没有变化，同时不允许更新位置，placement 位置也没有改变，则返回
       */

      if (target === _this.lastTarget && !shouldUpdatePosition && !placementChanged) {
        return;
      }

      _this.lastTarget = target;

      if (!target) {
        _this.setState({
          positionLeft: 0,
          positionTop: 0,
          arrowOffsetLeft: null,
          arrowOffsetTop: null
        });

        return;
      }

      var overlay = getDOMNode(_assertThisInitialized(_this));
      var container = getContainer(_this.props.container, ownerDocument(_assertThisInitialized(_this)).body);

      var nextPosition = _this.utils.calcOverlayPosition(overlay, target, container);

      _this.container = container;

      _this.setState(nextPosition);
    };

    _this.state = {
      positionLeft: 0,
      positionTop: 0,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };
    _this.utils = positionUtils({
      placement: props.placement,
      preventOverflow: props.preventOverflow,
      padding: props.containerPadding
    });
    _this.childRef = React.createRef();
    return _this;
  }

  var _proto = Position.prototype;

  _proto.getHTMLElement = function getHTMLElement() {
    /**
     * findDOMNode is deprecated in StrictMode.
     * Replace findDOMNode with ref. Provided for `Transition` calls.
     * https://fb.me/react-strict-mode-find-node
     */
    return getDOMNode(this.childRef.current);
  };

  _proto.componentDidMount = function componentDidMount() {
    this.updatePosition(false);

    if (this.container && this.props.preventOverflow) {
      this.containerScrollListener = on(this.container.tagName === 'BODY' ? window : this.container, 'scroll', this.updatePosition);
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (!shallowEqual(nextProps, this.props)) {
      this.needsFlush = true;
      return true;
    }

    if (!shallowEqual(nextState, this.state)) {
      return true;
    }

    return false;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.needsFlush) {
      this.needsFlush = false;
      this.updatePosition(prevProps.placement !== this.props.placement);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$containerScroll;

    this.lastTarget = null;
    (_this$containerScroll = this.containerScrollListener) === null || _this$containerScroll === void 0 ? void 0 : _this$containerScroll.off();
  };

  _proto.getTargetSafe = function getTargetSafe() {
    var target = this.props.target;

    if (!target) {
      return null;
    }

    var targetSafe = target(this.props);

    if (!targetSafe) {
      return null;
    }

    return targetSafe;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "className"]);

    var _this$state = this.state,
        positionLeft = _this$state.positionLeft,
        positionTop = _this$state.positionTop,
        positionClassName = _this$state.positionClassName,
        arrowPosition = _objectWithoutPropertiesLoose(_this$state, ["positionLeft", "positionTop", "positionClassName"]);

    if (typeof children === 'function') {
      return children({
        className: classNames(className, positionClassName),
        left: positionLeft,
        top: positionTop
      }, this.childRef);
    }

    var child = React.Children.only(children);
    return React.cloneElement(child, _extends({}, _omit(rest, ['target', 'container', 'containerPadding', 'preventOverflow']), {}, arrowPosition, {
      positionLeft: positionLeft,
      positionTop: positionTop,
      className: classNames(className, positionClassName, child.props.className),
      htmlElementRef: this.childRef,
      style: _extends({}, child.props.style, {
        left: positionLeft,
        top: positionTop
      })
    }));
  };

  return Position;
}(React.Component);

Position.displayName = 'Position';
Position.defaultProps = {
  containerPadding: 0,
  placement: 'right',
  shouldUpdatePosition: false
};
export default Position;