import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { prefix } from '../utils';

var Message =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Message, _React$Component);

  function Message() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.closeTimer = null;

    _this.close = function () {
      var _this$props$onClose, _this$props;

      _this.clearCloseTimer();

      (_this$props$onClose = (_this$props = _this.props).onClose) === null || _this$props$onClose === void 0 ? void 0 : _this$props$onClose.call(_this$props);
    };

    _this.addPrefix = function (name) {
      return prefix(_this.props.classPrefix)(name);
    };

    return _this;
  }

  var _proto = Message.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var duration = this.props.duration;

    if (duration) {
      this.closeTimer = setTimeout(function () {
        _this2.close();
      }, duration);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearCloseTimer();
  };

  _proto.clearCloseTimer = function clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props2 = this.props,
        classPrefix = _this$props2.classPrefix,
        closable = _this$props2.closable,
        className = _this$props2.className,
        content = _this$props2.content,
        style = _this$props2.style,
        htmlElementRef = _this$props2.htmlElementRef,
        _this$props2$type = _this$props2.type,
        type = _this$props2$type === void 0 ? '' : _this$props2$type;
    var ns = this.addPrefix('item');
    var classes = classNames(ns, (_classNames = {}, _classNames[this.addPrefix('item-closable')] = closable, _classNames[classPrefix + "-" + type] = !!type, _classNames));
    return React.createElement("div", {
      style: style,
      className: classNames(className, ns + "-wrapper"),
      ref: htmlElementRef
    }, React.createElement("div", {
      className: classes
    }, React.createElement("div", {
      className: ns + "-content"
    }, content), closable && React.createElement("div", {
      role: "button",
      tabIndex: -1,
      onClick: this.close,
      className: ns + "-close"
    }, React.createElement("span", {
      className: ns + "-close-x"
    }))));
  };

  return Message;
}(React.Component);

Message.propTypes = {
  duration: PropTypes.number,
  content: PropTypes.any,
  closable: PropTypes.bool,
  classPrefix: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func,
  style: PropTypes.object
};
export default Message;