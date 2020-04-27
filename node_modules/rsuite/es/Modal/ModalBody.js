import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { defaultProps } from '../utils';
import ModalContext from './ModalContext';

var ModalBody =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ModalBody, _React$Component);

  function ModalBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        classPrefix = _this$props.classPrefix,
        className = _this$props.className,
        style = _this$props.style,
        props = _objectWithoutPropertiesLoose(_this$props, ["classPrefix", "className", "style"]);

    var classes = classNames(classPrefix, className);
    return React.createElement(ModalContext.Consumer, null, function (context) {
      var bodyStyles = context ? context.getBodyStyles() : {};
      return React.createElement("div", _extends({}, props, {
        style: _extends({}, bodyStyles, {}, style),
        className: classes
      }));
    });
  };

  return ModalBody;
}(React.Component);

ModalBody.propTypes = {
  classPrefix: PropTypes.string,
  className: PropTypes.string
};
export default defaultProps({
  classPrefix: 'modal-body'
})(ModalBody);