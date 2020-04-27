import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { defaultClassPrefix, getUnhandledProps, prefix } from './utils';
import TableContext from './TableContext';

var CellGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(CellGroup, _React$PureComponent);

  function CellGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _this.addPrefix = function (name) {
      return prefix(_this.props.classPrefix)(name);
    };

    return _this;
  }

  var _proto = CellGroup.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props = this.props,
        fixed = _this$props.fixed,
        width = _this$props.width,
        left = _this$props.left,
        height = _this$props.height,
        style = _this$props.style,
        classPrefix = _this$props.classPrefix,
        className = _this$props.className,
        rest = _objectWithoutPropertiesLoose(_this$props, ["fixed", "width", "left", "height", "style", "classPrefix", "className"]);

    var classes = classNames(classPrefix, className, (_classNames = {}, _classNames[this.addPrefix("fixed-" + (fixed || ''))] = fixed, _classNames[this.addPrefix('scroll')] = !fixed, _classNames));

    var styles = _extends({
      width: width,
      height: height
    }, style);

    var unhandledProps = getUnhandledProps(CellGroup, rest);
    return React.createElement(TableContext.Consumer, null, function (_ref) {
      var translateDOMPositionXY = _ref.translateDOMPositionXY;
      translateDOMPositionXY === null || translateDOMPositionXY === void 0 ? void 0 : translateDOMPositionXY(styles, left, 0);
      return React.createElement("div", _extends({}, unhandledProps, {
        className: classes,
        style: styles
      }));
    });
  };

  return CellGroup;
}(React.PureComponent);

CellGroup.propTypes = {
  fixed: PropTypes.oneOf(['left', 'right']),
  width: PropTypes.number,
  height: PropTypes.number,
  left: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  classPrefix: PropTypes.string
};
CellGroup.defaultProps = {
  classPrefix: defaultClassPrefix('table-cell-group')
};
export default CellGroup;