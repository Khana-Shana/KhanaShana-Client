import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import { on, contains } from 'dom-lib';
import getDOMNode from '../utils/getDOMNode';

function isLeftClickEvent(event) {
  return (event === null || event === void 0 ? void 0 : event.button) === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || (event === null || event === void 0 ? void 0 : event.shiftKey));
}

var RootCloseWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onDocumentClickListener = null;
    _this.onDocumentKeyupListener = null;
    _this.childRef = void 0;

    _this.handleDocumentClick = function (event) {
      var _this$props$onRootClo, _this$props;

      if (contains(getDOMNode(_this.childRef.current || _assertThisInitialized(_this)), event.target)) {
        return;
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      var target = _this.props.target;

      if (target) {
        if (contains(target(), event.target)) {
          return;
        }
      }

      (_this$props$onRootClo = (_this$props = _this.props).onRootClose) === null || _this$props$onRootClo === void 0 ? void 0 : _this$props$onRootClo.call(_this$props);
    };

    _this.handleDocumentKeyUp = function (event) {
      if (event.keyCode === 27) {
        var _this$props$onRootClo2, _this$props2;

        (_this$props$onRootClo2 = (_this$props2 = _this.props).onRootClose) === null || _this$props$onRootClo2 === void 0 ? void 0 : _this$props$onRootClo2.call(_this$props2);
      }
    };

    _this.childRef = React.createRef();
    return _this;
  }

  var _proto = RootCloseWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var doc = window.document;
    this.onDocumentClickListener = on(doc, 'click', this.handleDocumentClick, true);
    this.onDocumentKeyupListener = on(doc, 'keyup', this.handleDocumentKeyUp);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$onDocumentClick, _this$onDocumentKeyup;

    (_this$onDocumentClick = this.onDocumentClickListener) === null || _this$onDocumentClick === void 0 ? void 0 : _this$onDocumentClick.off();
    (_this$onDocumentKeyup = this.onDocumentKeyupListener) === null || _this$onDocumentKeyup === void 0 ? void 0 : _this$onDocumentKeyup.off();
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (typeof children === 'function') {
      return children({}, this.childRef);
    }

    return children;
  };

  return RootCloseWrapper;
}(React.Component);

export default RootCloseWrapper;