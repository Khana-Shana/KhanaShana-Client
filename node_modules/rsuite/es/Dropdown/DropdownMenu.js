import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from '../Animation/Collapse';
import shallowEqual from '../utils/shallowEqual';
import DropdownMenuItem from './DropdownMenuItem';
import Icon from '../Icon';
import Ripple from '../Ripple';
import { createChainedFunction, prefix, ReactChildren, getUnhandledProps, defaultProps } from '../utils';
import mergeRefs from '../utils/mergeRefs';

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleToggleChange = function (eventKey, event) {
      var _this$props$onToggle, _this$props;

      (_this$props$onToggle = (_this$props = _this.props).onToggle) === null || _this$props$onToggle === void 0 ? void 0 : _this$props$onToggle.call(_this$props, eventKey, event);
    };

    _this.addPrefix = function (name) {
      return prefix(_this.props.classPrefix)(name);
    };

    return _this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getMenuItemsAndStatus = function getMenuItemsAndStatus(children) {
    var _this2 = this;

    var hasActiveItem;
    var _this$props2 = this.props,
        activeKey = _this$props2.activeKey,
        onSelect = _this$props2.onSelect,
        classPrefix = _this$props2.classPrefix,
        _this$props2$openKeys = _this$props2.openKeys,
        openKeys = _this$props2$openKeys === void 0 ? [] : _this$props2$openKeys;
    var items = React.Children.map(children, function (item, index) {
      var _item$type;

      if (!item) {
        return null;
      }

      var displayName = item === null || item === void 0 ? void 0 : (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.displayName;
      var active;

      if (~(displayName === null || displayName === void 0 ? void 0 : displayName.indexOf('(DropdownMenuItem)')) || ~(displayName === null || displayName === void 0 ? void 0 : displayName.indexOf('(DropdownMenu)'))) {
        active = _this2.isActive(item.props, activeKey);

        if (active) {
          hasActiveItem = true;
        }
      }

      if (~(displayName === null || displayName === void 0 ? void 0 : displayName.indexOf('(DropdownMenuItem)'))) {
        var onItemSelect = item.props.onSelect;
        return React.cloneElement(item, {
          key: index,
          active: active,
          onSelect: createChainedFunction(onSelect, onItemSelect)
        });
      } else if (~(displayName === null || displayName === void 0 ? void 0 : displayName.indexOf('(DropdownMenu)'))) {
        var _classNames;

        var itemsAndStatus = _this2.getMenuItemsAndStatus(item.props.children);

        var _item$props = item.props,
            icon = _item$props.icon,
            open = _item$props.open,
            trigger = _item$props.trigger,
            pullLeft = _item$props.pullLeft,
            eventKey = _item$props.eventKey,
            title = _item$props.title,
            className = _item$props.className;
        var expanded = openKeys.some(function (key) {
          return shallowEqual(key, eventKey);
        });
        var itemClassName = classNames(className, _this2.addPrefix("pull-" + (pullLeft ? 'left' : 'right')), (_classNames = {}, _classNames[_this2.addPrefix('item-focus')] = _this2.isActive(item.props, activeKey), _classNames));
        return React.createElement(DropdownMenuItem, {
          icon: icon,
          open: open,
          trigger: trigger,
          expanded: expanded,
          className: itemClassName,
          pullLeft: pullLeft,
          componentClass: "div",
          submenu: true
        }, React.createElement("div", {
          className: _this2.addPrefix('toggle'),
          onClick: _this2.handleToggleChange.bind(_this2, eventKey),
          role: "menu",
          tabIndex: -1
        }, React.createElement("span", null, title), React.createElement(Icon, {
          className: _this2.addPrefix('toggle-icon'),
          icon: pullLeft ? 'angle-left' : 'angle-right'
        }), React.createElement(Ripple, null)), _this2.renderCollapse(function (transitionProps, ref) {
          var _ref = transitionProps || {},
              className = _ref.className,
              transitionRestProps = _objectWithoutPropertiesLoose(_ref, ["className"]);

          return React.createElement("ul", _extends({}, transitionRestProps, {
            ref: ref,
            role: "menu",
            className: classNames(classPrefix, className)
          }), itemsAndStatus.items);
        }, expanded));
      }

      return item;
    });
    return {
      items: items,
      active: hasActiveItem
    };
  };

  _proto.isActive = function isActive(props, activeKey) {
    var _this3 = this;

    if (props.active || typeof activeKey !== 'undefined' && shallowEqual(props.eventKey, activeKey)) {
      return true;
    }

    if (ReactChildren.some(props.children, function (child) {
      return _this3.isActive(child.props, activeKey);
    })) {
      return true;
    }

    return props.active;
  };

  _proto.renderCollapse = function renderCollapse(children, expanded) {
    return this.props.collapsible ? React.createElement(Collapse, {
      in: expanded,
      exitedClassName: this.addPrefix('collapse-out'),
      exitingClassName: this.addPrefix('collapsing'),
      enteredClassName: this.addPrefix('collapse-in'),
      enteringClassName: this.addPrefix('collapsing')
    }, children) : children();
  };

  _proto.render = function render() {
    var _classNames2;

    var _this$props3 = this.props,
        children = _this$props3.children,
        className = _this$props3.className,
        classPrefix = _this$props3.classPrefix,
        expanded = _this$props3.expanded,
        htmlElementRef = _this$props3.htmlElementRef,
        props = _objectWithoutPropertiesLoose(_this$props3, ["children", "className", "classPrefix", "expanded", "htmlElementRef"]);

    var _this$getMenuItemsAnd = this.getMenuItemsAndStatus(children),
        items = _this$getMenuItemsAnd.items,
        active = _this$getMenuItemsAnd.active;

    var unhandled = getUnhandledProps(DropdownMenu, props);
    var classes = classNames(classPrefix, className, (_classNames2 = {}, _classNames2[this.addPrefix('active')] = active, _classNames2));
    return this.renderCollapse(function (transitionProps, ref) {
      var _ref2 = transitionProps || {},
          transitionClassName = _ref2.className,
          transitionRestProps = _objectWithoutPropertiesLoose(_ref2, ["className"]);

      return React.createElement("ul", _extends({}, unhandled, transitionRestProps, {
        className: classNames(classes, transitionClassName),
        role: "menu",
        ref: mergeRefs(htmlElementRef, ref)
      }), items);
    }, expanded);
  };

  return DropdownMenu;
}(React.Component);

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = {
  activeKey: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
  classPrefix: PropTypes.string,
  pullLeft: PropTypes.bool,
  onSelect: PropTypes.func,
  title: PropTypes.node,
  open: PropTypes.bool,
  trigger: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf(['click', 'hover'])]),
  eventKey: PropTypes.any,
  openKeys: PropTypes.array,
  expanded: PropTypes.bool,
  collapsible: PropTypes.bool,
  onToggle: PropTypes.func
};
export default defaultProps({
  classPrefix: 'dropdown-menu'
})(DropdownMenu);