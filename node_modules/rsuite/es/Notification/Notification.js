import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import _isUndefined from "lodash/isUndefined";
import _kebabCase from "lodash/kebabCase";
import * as React from 'react';
import classNames from 'classnames';
import { prefix, placementPolyfill } from '../utils';
import { defaultClassPrefix } from '../utils/prefix';
import NoticeManager from './NoticeManager';

var Notification =
/*#__PURE__*/
function () {
  function Notification() {
    var _this = this;

    this.props = {
      top: 24,
      bottom: 24,
      duration: 4500,
      placement: 'topEnd',
      classPrefix: defaultClassPrefix('notification'),
      getContainer: null
    };
    this._instances = {};
    this._cacheInstances = [];

    this.addPrefix = function (name) {
      return prefix(_this.props.classPrefix)(name);
    };
  }

  var _proto = Notification.prototype;

  _proto.setProps = function setProps(nextProps) {
    this.props = _extends({}, this.props, {}, nextProps);

    if (nextProps.top || nextProps.bottom) {
      this._instances = {};
    }
  };

  _proto.getPlacement = function getPlacement(placement) {
    return placementPolyfill(placement || this.props.placement);
  };

  _proto.getPlacementStyle = function getPlacementStyle(config) {
    var top = config.top,
        bottom = config.bottom;
    var placement = this.getPlacement(config.placement);
    var style = {};

    var _kebabCase$split = _kebabCase(placement).split('-'),
        vertical = _kebabCase$split[0];

    if (vertical === 'top') {
      style.top = _isUndefined(top) ? this.props.top : top;
    } else {
      style.bottom = _isUndefined(top) ? this.props.bottom : bottom;
    }

    return style;
  };

  _proto.getInstance = function getInstance(config, callback) {
    var _this$props = this.props,
        classPrefix = _this$props.classPrefix,
        getContainer = _this$props.getContainer;
    var style = this.getPlacementStyle(config);
    var placement = this.getPlacement(config.placement);
    var nextProps = {
      style: style,
      className: classNames(this.addPrefix(_kebabCase(placement))),
      classPrefix: classPrefix,
      getContainer: getContainer
    };
    NoticeManager.getInstance(nextProps, callback);
  };

  _proto.open = function open(nextProps) {
    var _this2 = this;

    var description = nextProps.description,
        onClose = nextProps.onClose,
        priorPlacement = nextProps.placement,
        _nextProps$duration = nextProps.duration,
        duration = _nextProps$duration === void 0 ? this.props.duration : _nextProps$duration,
        rest = _objectWithoutPropertiesLoose(nextProps, ["description", "onClose", "placement", "duration"]);

    var placement = this.getPlacement(priorPlacement);
    var content = React.createElement("div", {
      className: this.addPrefix('content')
    }, React.createElement("div", {
      className: this.addPrefix('title')
    }, nextProps.title), React.createElement("div", {
      className: this.addPrefix('description')
    }, typeof description === 'function' ? description() : description));
    var config = {
      placement: placement,
      top: nextProps.top,
      bottom: nextProps.bottom
    };

    var itemProps = _extends({
      closable: true,
      content: content,
      duration: duration,
      onClose: onClose
    }, rest);

    var instance = this._instances[placement];

    if (!instance) {
      this.getInstance(config, function (nextInstance) {
        nextInstance.push(itemProps);
        _this2._instances[placement] = nextInstance;
      });
    } else {
      instance.push(itemProps);
    }

    this._cacheInstances.push([placement, itemProps]);
  };

  _proto.close = function close(key) {
    if (!this._cacheInstances.length) {
      return;
    }

    if (typeof key !== 'undefined') {
      var find = function find(item) {
        return item[1].key === key;
      };

      var _this$_cacheInstances = this._cacheInstances.find(find),
          _placement = _this$_cacheInstances[0];

      this._instances[_placement].remove(key);

      this._cacheInstances = this._cacheInstances.filter(find);
      return;
    }

    var _this$_cacheInstances2 = this._cacheInstances.pop(),
        placement = _this$_cacheInstances2[0];

    this._instances[placement].remove();
  };

  _proto.closeAll = function closeAll() {
    for (var key in this._instances) {
      if (typeof this._instances[key].removeAll === 'function') {
        this._instances[key].removeAll();
      }
    }

    this._cacheInstances = [];
  };

  return Notification;
}();

export default Notification;