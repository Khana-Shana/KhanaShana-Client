"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _Position = _interopRequireDefault(require("./Position"));

var _RootCloseWrapper = _interopRequireDefault(require("./RootCloseWrapper"));

var BaseOverlay =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(BaseOverlay, _React$Component);

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
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["container", "containerPadding", "target", "placement", "shouldUpdatePosition", "rootClose", "children", "transition", "show", "onHide", "positionRef", "preventOverflow"]);
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
    child = React.createElement(_Position.default, (0, _extends2.default)({}, positionProps, {
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
      child = React.createElement(_RootCloseWrapper.default, {
        target: target,
        onRootClose: onHide
      }, child);
    }

    return React.createElement(_Portal.default, {
      container: container
    }, child);
  };

  return BaseOverlay;
}(React.Component);

var _default = BaseOverlay;
exports.default = _default;
module.exports = exports.default;