"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _domLib = require("dom-lib");

var Portal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Portal, _React$Component);

  function Portal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.portalContainerNode = null;

    _this.setContainer = function (props) {
      if (props === void 0) {
        props = _this.props;
      }

      _this.portalContainerNode = (0, _domLib.getContainer)(props.container, (0, _domLib.ownerDocument)((0, _assertThisInitialized2.default)(_this)).body);
    };

    _this.getMountNode = function () {
      return _this.portalContainerNode;
    };

    return _this;
  }

  var _proto = Portal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setContainer();
    this.forceUpdate(this.props.onRendered);
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer();
    }

    if (nextProps != this.props) {
      return true;
    }

    return false;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.portalContainerNode = null;
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children && this.portalContainerNode ? _reactDom.default.createPortal(children, this.portalContainerNode) : null;
  };

  return Portal;
}(React.Component);

Portal.displayName = 'Portal';
var _default = Portal;
exports.default = _default;
module.exports = exports.default;