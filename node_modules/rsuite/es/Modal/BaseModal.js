import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import classNames from 'classnames';
import { ownerDocument, activeElement, contains, getContainer, on } from 'dom-lib';
import canUseDom from 'dom-lib/lib/query/canUseDOM';
import Portal from '../Portal';
import ModalManager from './ModalManager';
import Fade from '../Animation/Fade';
import getDOMNode from '../utils/getDOMNode';
import mergeRefs from '../utils/mergeRefs';

var RefHolder =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children || null;
  };

  return RefHolder;
}(React.Component);

var modalManager = new ModalManager();

var BaseModal =
/*#__PURE__*/
function (_React$Component2) {
  _inheritsLoose(BaseModal, _React$Component2);

  function BaseModal(props) {
    var _this;

    _this = _React$Component2.call(this, props) || this;
    _this.mountNode = null;
    _this.modalNodeRef = null;
    _this.backdropRef = null;
    _this.dialogRef = null;
    _this.lastFocus = null;
    _this.onDocumentKeyupListener = null;
    _this.onFocusinListener = null;

    _this.setMountNodeRef = function (ref) {
      var _ref$getMountNode;

      _this.mountNode = ref === null || ref === void 0 ? void 0 : (_ref$getMountNode = ref.getMountNode) === null || _ref$getMountNode === void 0 ? void 0 : _ref$getMountNode.call(ref);
    };

    _this.handleHidden = function (args) {
      var _this$props$onExited, _this$props;

      _this.setState({
        exited: true
      });

      _this.onHide();

      (_this$props$onExited = (_this$props = _this.props).onExited) === null || _this$props$onExited === void 0 ? void 0 : _this$props$onExited.call(_this$props, args);
    };

    _this.handleBackdropClick = function (event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      var _this$props2 = _this.props,
          onBackdropClick = _this$props2.onBackdropClick,
          backdrop = _this$props2.backdrop,
          onHide = _this$props2.onHide;
      onBackdropClick === null || onBackdropClick === void 0 ? void 0 : onBackdropClick(event);
      backdrop && (onHide === null || onHide === void 0 ? void 0 : onHide(event));
    };

    _this.handleDocumentKeyUp = function (event) {
      var _this$props3 = _this.props,
          keyboard = _this$props3.keyboard,
          onHide = _this$props3.onHide,
          onEscapeKeyUp = _this$props3.onEscapeKeyUp;

      if (keyboard && event.keyCode === 27 && _this.isTopModal()) {
        onEscapeKeyUp === null || onEscapeKeyUp === void 0 ? void 0 : onEscapeKeyUp(event);
        onHide === null || onHide === void 0 ? void 0 : onHide(event);
      }
    };

    _this.enforceFocus = function () {
      var enforceFocus = _this.props.enforceFocus;

      if (!enforceFocus || !_this.isTopModal()) {
        return;
      }

      var active = activeElement(ownerDocument(_assertThisInitialized(_this)));

      var modal = _this.getDialogElement();

      if (modal && modal !== active && !contains(modal, active)) {
        modal.focus();
      }
    };

    _this.state = {
      exited: !props.show
    };
    _this.backdropRef = React.createRef();
    _this.modalNodeRef = React.createRef();
    _this.dialogRef = React.createRef();
    return _this;
  }

  var _proto2 = BaseModal.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    if (this.props.show) {
      this.onShow();
    }
  };

  BaseModal.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if (nextProps.show) {
      return {
        exited: false
      };
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      return {
        exited: true
      };
    }

    return null;
  };

  _proto2.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps) {
    if (this.props.show && !prevProps.show) {
      this.checkForFocus();
    }

    return null;
  };

  _proto2.componentDidUpdate = function componentDidUpdate(prevProps) {
    var transition = this.props.transition;

    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    var _this$props4 = this.props,
        show = _this$props4.show,
        transition = _this$props4.transition;

    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  };

  _proto2.onShow = function onShow() {
    var _this$props$onShow, _this$props5;

    var doc = ownerDocument(this);
    var container = getContainer(this.props.container, doc.body);
    var containerClassName = this.props.containerClassName;
    modalManager.add(this, container, containerClassName);
    this.onDocumentKeyupListener = on(doc, 'keyup', this.handleDocumentKeyUp);
    this.onFocusinListener = on(doc, 'focus', this.enforceFocus);
    (_this$props$onShow = (_this$props5 = this.props).onShow) === null || _this$props$onShow === void 0 ? void 0 : _this$props$onShow.call(_this$props5);
  };

  _proto2.onHide = function onHide() {
    var _this$onDocumentKeyup, _this$onFocusinListen;

    modalManager.remove(this);
    (_this$onDocumentKeyup = this.onDocumentKeyupListener) === null || _this$onDocumentKeyup === void 0 ? void 0 : _this$onDocumentKeyup.off();
    (_this$onFocusinListen = this.onFocusinListener) === null || _this$onFocusinListen === void 0 ? void 0 : _this$onFocusinListen.off();
    this.restoreLastFocus();
  };

  _proto2.getDialogElement = function getDialogElement() {
    return getDOMNode(this.dialogRef.current);
  };

  _proto2.isTopModal = function isTopModal() {
    return modalManager.isTopModal(this);
  };

  _proto2.checkForFocus = function checkForFocus() {
    if (canUseDom) {
      this.lastFocus = activeElement();
    }
  };

  _proto2.restoreLastFocus = function restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements
    if (this.lastFocus) {
      var _this$lastFocus$focus, _this$lastFocus;

      (_this$lastFocus$focus = (_this$lastFocus = this.lastFocus).focus) === null || _this$lastFocus$focus === void 0 ? void 0 : _this$lastFocus$focus.call(_this$lastFocus);
      this.lastFocus = null;
    }
  };

  _proto2.renderBackdrop = function renderBackdrop() {
    var _this2 = this;

    var _this$props6 = this.props,
        transition = _this$props6.transition,
        backdrop = _this$props6.backdrop,
        backdropTransitionTimeout = _this$props6.backdropTransitionTimeout,
        backdropStyle = _this$props6.backdropStyle,
        backdropClassName = _this$props6.backdropClassName;
    var backdropPorps = {
      style: backdropStyle,
      onClick: backdrop === true ? this.handleBackdropClick : undefined
    };

    if (transition) {
      return React.createElement(Fade, {
        transitionAppear: true,
        in: this.props.show,
        timeout: backdropTransitionTimeout
      }, function (props, ref) {
        var className = props.className,
            rest = _objectWithoutPropertiesLoose(props, ["className"]);

        return React.createElement("div", _extends({}, rest, backdropPorps, {
          className: classNames(backdropClassName, className),
          ref: mergeRefs(_this2.backdropRef, ref)
        }));
      });
    }

    return React.createElement("div", _extends({
      ref: this.backdropRef,
      className: backdropClassName
    }, backdropPorps));
  };

  _proto2.render = function render() {
    var _this$props7 = this.props,
        children = _this$props7.children,
        Transition = _this$props7.transition,
        backdrop = _this$props7.backdrop,
        dialogTransitionTimeout = _this$props7.dialogTransitionTimeout,
        style = _this$props7.style,
        className = _this$props7.className,
        container = _this$props7.container,
        animationProps = _this$props7.animationProps,
        onExit = _this$props7.onExit,
        onExiting = _this$props7.onExiting,
        onEnter = _this$props7.onEnter,
        onEntering = _this$props7.onEntering,
        onEntered = _this$props7.onEntered,
        rest = _objectWithoutPropertiesLoose(_this$props7, ["children", "transition", "backdrop", "dialogTransitionTimeout", "style", "className", "container", "animationProps", "onExit", "onExiting", "onEnter", "onEntering", "onEntered"]);

    var show = !!rest.show;
    var mountModal = show || Transition && !this.state.exited;

    if (!mountModal) {
      return null;
    }

    var dialog = children;

    if (Transition) {
      dialog = React.createElement(Transition, _extends({}, animationProps, {
        transitionAppear: true,
        unmountOnExit: true,
        in: show,
        timeout: dialogTransitionTimeout,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }), dialog);
    }

    return React.createElement(Portal, {
      ref: this.setMountNodeRef,
      container: container
    }, React.createElement("div", {
      ref: this.modalNodeRef,
      role: rest.role || 'dialog',
      style: style,
      className: className
    }, backdrop && this.renderBackdrop(), React.createElement(RefHolder, {
      ref: this.dialogRef
    }, dialog)));
  };

  return BaseModal;
}(React.Component);

BaseModal.manager = modalManager;
BaseModal.defaultProps = {
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true
};
export default BaseModal;