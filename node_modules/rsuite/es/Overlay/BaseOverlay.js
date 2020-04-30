import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import Portal from '../Portal';
import Position from './Position';
import RootCloseWrapper from './RootCloseWrapper';

var BaseOverlay =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BaseOverlay, _React$Component);

  function BaseOverlay(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleHidden = function (args) {
      var _this$props$onExited, _this$props;

      _this.setState({
        exited: true
      });

      (_this$props$onExited = (_this$props = _this.props).onExited) === null || _this$props$onExited === void 0 ? void 0 : _this$props$onExited.call(_this$props, args);
    };

    _this.state = {
      exited: !props.show
    };
    return _this;
  }

  BaseOverlay.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if (nextProps.show) {
      return {
        exited: false
      };
    } else if (!nextProps.transition) {
      return {
        exited: true
      };
    }

    return null;
  };

  var _proto = BaseOverlay.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        container = _this$props2.container,
        containerPadding = _this$props2.containerPadding,
        target = _this$props2.target,
        placement = _this$props2.placement,
        shouldUpdatePosition = _this$props2.shouldUpdatePosition,
        rootClose = _this$props2.rootClose,
        children = _this$props2.children,
        Transition = _this$props2.transition,
        show = _this$props2.show,
        onHide = _this$props2.onHide,
        positionRef = _this$props2.positionRef,
        preventOverflow = _this$props2.preventOverflow,
        props = _objectWithoutPropertiesLoose(_this$props2, ["container", "containerPadding", "target", "placement", "shouldUpdatePosition", "rootClose", "children", "transition", "show", "onHide", "positionRef", "preventOverflow"]);

    var mountOverlay = show || Transition && !this.state.exited;

    if (!mountOverlay) {
      return null;
    }

    var child = children;
    var positionProps = {
      container: container,
      containerPadding: containerPadding,
      target: target,
      placement: placement,
      shouldUpdatePosition: shouldUpdatePosition,
      preventOverflow: preventOverflow
    };
    child = React.createElement(Position, _extends({}, positionProps, {
      ref: positionRef
    }), child);

    if (Transition) {
      var onExit = props.onExit,
          onExiting = props.onExiting,
          onEnter = props.onEnter,
          onEntering = props.onEntering,
          onEntered = props.onEntered;
      child = React.createElement(Transition, {
        in: show,
        transitionAppear: true,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }, child);
    }

    if (rootClose) {
      child = React.createElement(RootCloseWrapper, {
        target: target,
        onRootClose: onHide
      }, child);
    }

    return React.createElement(Portal, {
      container: container
    }, child);
  };

  return BaseOverlay;
}(React.Component);

export default BaseOverlay;