import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import { STATUS_ICON_NAMES, STATUS } from '../constants';
import { prefix, defaultProps } from '../utils';

var Message =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Message, _React$Component);

  function Message(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.addPrefix = function (name) {
      return prefix(_this.props.classPrefix)(name);
    };

    _this.handleClose = function () {
      _this.setState({
        display: 'hiding'
      });

      setTimeout(function () {
        return _this.setState({
          display: 'hide'
        }, function () {
          var _this$props$onClose, _this$props;

          (_this$props$onClose = (_this$props = _this.props).onClose) === null || _this$props$onClose === void 0 ? void 0 : _this$props$onClose.call(_this$props);
        });
      }, 1000);
    };

    _this.state = {
      display: 'show'
    };
    return _this;
  }

  var _proto = Message.prototype;

  _proto.renderCloseButton = function renderCloseButton(closeLabel) {
    return React.createElement("button", {
      type: "button",
      className: this.addPrefix('btn-close'),
      onClick: this.handleClose
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"), React.createElement("span", {
      className: "sr-only"
    }, closeLabel));
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props2 = this.props,
        className = _this$props2.className,
        classPrefix = _this$props2.classPrefix,
        type = _this$props2.type,
        title = _this$props2.title,
        description = _this$props2.description,
        closeLabel = _this$props2.closeLabel,
        closable = _this$props2.closable,
        full = _this$props2.full,
        showIcon = _this$props2.showIcon,
        props = _objectWithoutPropertiesLoose(_this$props2, ["className", "classPrefix", "type", "title", "description", "closeLabel", "closable", "full", "showIcon"]);

    var display = this.state.display;

    if (display === 'hide') {
      return null;
    }

    var hasTitle = !!title;
    var hasDesc = !!description;
    var classes = classNames(classPrefix, className, this.addPrefix(type), this.addPrefix(display), (_classNames = {}, _classNames[this.addPrefix('has-title')] = hasTitle, _classNames[this.addPrefix('has-icon')] = showIcon, _classNames[this.addPrefix('full')] = full, _classNames));
    return React.createElement("div", _extends({}, props, {
      className: classes
    }), React.createElement("div", {
      className: this.addPrefix('container')
    }, closable && this.renderCloseButton(closeLabel), showIcon && React.createElement("div", {
      className: this.addPrefix('icon-wrapper')
    }, React.createElement(Icon, {
      icon: STATUS_ICON_NAMES[type]
    })), React.createElement("div", {
      className: this.addPrefix('content')
    }, hasTitle && React.createElement("h5", {
      className: this.addPrefix('header')
    }, title), hasDesc && React.createElement("div", {
      className: this.addPrefix('body')
    }, description))));
  };

  return Message;
}(React.Component);

Message.propTypes = {
  type: PropTypes.oneOf(STATUS),
  className: PropTypes.string,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
  closeLabel: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
  showIcon: PropTypes.bool,
  full: PropTypes.bool,
  classPrefix: PropTypes.string
};
Message.defaultProps = {
  type: 'info',
  closeLabel: 'Close'
};
export default defaultProps({
  classPrefix: 'message'
})(Message);