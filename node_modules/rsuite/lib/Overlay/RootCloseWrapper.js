"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _domLib = require("dom-lib");

var _getDOMNode = _interopRequireDefault(require("../utils/getDOMNode"));

function isLeftClickEvent(event) {
  return (event === null || event === void 0 ? void 0 : event.button) === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || (event === null || event === void 0 ? void 0 : event.shiftKey));
}

var RootCloseWrapper =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onDocumentClickListener = null;
    _this.onDocumentKeyupListener = null;
    _this.childRef = void 0;

    _this.handleDocumentClick = function (event) {
      var _this$props$onRootClo, _this$props;

      if ((0, _domLib.contains)((0, _getDOMNode.default)(_this.childRef.current || (0, _assertThisInitialized2.default)(_this)), event.target)) {
        return;
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      var target = _this.props.target;

      if (target) {
        if ((0, _domLib.contains)(target(), event.target)) {
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
    this.onDocumentClickListener = (0, _domLib.on)(doc, 'click', this.handleDocumentClick, true);
    this.onDocumentKeyupListener = (0, _domLib.on)(doc, 'keyup', this.handleDocumentKeyUp);
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

var _default = RootCloseWrapper;
exports.default = _default;
module.exports = exports.default;