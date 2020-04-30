import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _omit from "lodash/omit";
import * as React from 'react';
import classNames from 'classnames';
import { addStyle, getWidth } from 'dom-lib';
import { defaultProps } from '../utils';
import bindElementResize, { unbind as unbindElementResize } from 'element-resize-event';
import getDOMNode from '../utils/getDOMNode';
import mergeRefs from '../utils/mergeRefs';
var omitProps = ['placement', 'shouldUpdatePosition', 'arrowOffsetLeft', 'arrowOffsetTop', 'positionLeft', 'positionTop', 'getPositionInstance', 'getToggleInstance', 'autoWidth'];
var resizePlacement = ['topStart', 'topEnd', 'leftEnd', 'rightEnd', 'auto', 'autoVerticalStart', 'autoVerticalEnd', 'autoHorizontalEnd'];

var MenuWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MenuWrapper, _React$Component);

  function MenuWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.menuElementRef = void 0;

    _this.handleResize = function () {
      var getPositionInstance = _this.props.getPositionInstance;
      var instance = getPositionInstance ? getPositionInstance() : null;

      if (instance) {
        instance.updatePosition(true);
      }
    };

    _this.menuElementRef = React.createRef();
    return _this;
  }

  var _proto = MenuWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var autoWidth = this.props.autoWidth;

    if (resizePlacement.includes(this.props.placement)) {
      bindElementResize(this.menuElementRef.current, this.handleResize);
    }

    if (autoWidth) {
      this.updateMenuStyle();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.menuElementRef.current) {
      unbindElementResize(this.menuElementRef.current);
    }
  };

  _proto.updateMenuStyle = function updateMenuStyle() {
    var getToggleInstance = this.props.getToggleInstance;

    if (this.menuElementRef.current && getToggleInstance) {
      var _instance$toggleRef;

      var instance = getToggleInstance();

      if (instance === null || instance === void 0 ? void 0 : (_instance$toggleRef = instance.toggleRef) === null || _instance$toggleRef === void 0 ? void 0 : _instance$toggleRef.current) {
        var width = getWidth(getDOMNode(instance.toggleRef.current));
        addStyle(this.menuElementRef.current, 'min-width', width + "px");
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        classPrefix = _this$props.classPrefix,
        htmlElementRef = _this$props.htmlElementRef,
        rest = _objectWithoutPropertiesLoose(_this$props, ["className", "classPrefix", "htmlElementRef"]);

    return React.createElement("div", _extends({}, _omit(rest, omitProps), {
      ref: mergeRefs(this.menuElementRef, htmlElementRef),
      className: classNames(classPrefix, className)
    }));
  };

  return MenuWrapper;
}(React.Component);

var enhance = defaultProps({
  classPrefix: 'picker-menu'
});
export default enhance(MenuWrapper);