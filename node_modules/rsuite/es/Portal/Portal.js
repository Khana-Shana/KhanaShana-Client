import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import ReactDOM from 'react-dom';
import { getContainer, ownerDocument } from 'dom-lib';

var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

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

      _this.portalContainerNode = getContainer(props.container, ownerDocument(_assertThisInitialized(_this)).body);
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
    return children && this.portalContainerNode ? ReactDOM.createPortal(children, this.portalContainerNode) : null;
  };

  return Portal;
}(React.Component);

Portal.displayName = 'Portal';
export default Portal;