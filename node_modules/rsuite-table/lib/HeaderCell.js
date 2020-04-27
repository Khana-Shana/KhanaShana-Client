"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ColumnResizeHandler = _interopRequireDefault(require("./ColumnResizeHandler"));

var _utils = require("./utils");

var _Cell = _interopRequireDefault(require("./Cell"));

var HeaderCell =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inheritsLoose2["default"])(HeaderCell, _React$PureComponent);

  HeaderCell.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.width !== prevState.width || nextProps.flexGrow !== prevState.flexGrow) {
      return {
        width: nextProps.width,
        flexGrow: nextProps.flexGrow,
        columnWidth: (0, _utils.isNullOrUndefined)(nextProps.flexGrow) ? nextProps.width : 0
      };
    }

    return null;
  };

  function HeaderCell(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this.handleColumnResizeStart = function () {
      var _this$props = _this.props,
          left = _this$props.left,
          fixed = _this$props.fixed,
          onColumnResizeStart = _this$props.onColumnResizeStart;
      onColumnResizeStart === null || onColumnResizeStart === void 0 ? void 0 : onColumnResizeStart(_this.state.columnWidth, left, !!fixed);
    };

    _this.handleColumnResizeEnd = function (columnWidth, cursorDelta) {
      var _this$props2 = _this.props,
          dataKey = _this$props2.dataKey,
          index = _this$props2.index,
          onColumnResizeEnd = _this$props2.onColumnResizeEnd,
          onResize = _this$props2.onResize;

      _this.setState({
        columnWidth: columnWidth
      });

      onColumnResizeEnd === null || onColumnResizeEnd === void 0 ? void 0 : onColumnResizeEnd(columnWidth, cursorDelta, dataKey, index);
      onResize === null || onResize === void 0 ? void 0 : onResize(columnWidth, dataKey);
    };

    _this.handleClick = function () {
      if (_this.props.sortable) {
        var _this$props$onSortCol, _this$props3;

        (_this$props$onSortCol = (_this$props3 = _this.props).onSortColumn) === null || _this$props$onSortCol === void 0 ? void 0 : _this$props$onSortCol.call(_this$props3, _this.props.dataKey);
      }
    };

    _this.addPrefix = function (name) {
      return (0, _utils.prefix)(_this.props.classPrefix)(name);
    };

    _this.state = {
      width: props.width,
      flexGrow: props.flexGrow,
      columnWidth: (0, _utils.isNullOrUndefined)(props.flexGrow) ? props.width : 0
    };
    return _this;
  }

  var _proto = HeaderCell.prototype;

  _proto.renderResizeSpanner = function renderResizeSpanner() {
    var _this$props4 = this.props,
        resizable = _this$props4.resizable,
        left = _this$props4.left,
        onColumnResizeMove = _this$props4.onColumnResizeMove,
        fixed = _this$props4.fixed,
        headerHeight = _this$props4.headerHeight;
    var columnWidth = this.state.columnWidth;

    if (!resizable) {
      return null;
    }

    return React.createElement(_ColumnResizeHandler["default"], {
      defaultColumnWidth: columnWidth,
      key: columnWidth,
      columnLeft: left,
      columnFixed: fixed,
      height: headerHeight ? headerHeight - 1 : undefined,
      onColumnResizeMove: onColumnResizeMove,
      onColumnResizeStart: this.handleColumnResizeStart,
      onColumnResizeEnd: this.handleColumnResizeEnd
    });
  };

  _proto.renderSortColumn = function renderSortColumn() {
    var _this$props5 = this.props,
        sortable = _this$props5.sortable,
        sortColumn = _this$props5.sortColumn,
        _this$props5$sortType = _this$props5.sortType,
        sortType = _this$props5$sortType === void 0 ? '' : _this$props5$sortType,
        dataKey = _this$props5.dataKey;

    if (sortable) {
      var _classNames;

      var iconClasses = (0, _classnames["default"])(this.addPrefix('icon-sort'), (_classNames = {}, _classNames[this.addPrefix("icon-sort-" + sortType)] = sortColumn === dataKey, _classNames));
      return React.createElement("span", {
        className: this.addPrefix('sort-wrapper')
      }, React.createElement("i", {
        className: iconClasses
      }));
    }

    return null;
  };

  _proto.render = function render() {
    var _classNames2;

    var _this$props6 = this.props,
        className = _this$props6.className,
        width = _this$props6.width,
        dataKey = _this$props6.dataKey,
        headerHeight = _this$props6.headerHeight,
        children = _this$props6.children,
        left = _this$props6.left,
        sortable = _this$props6.sortable,
        classPrefix = _this$props6.classPrefix,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props6, ["className", "width", "dataKey", "headerHeight", "children", "left", "sortable", "classPrefix"]);
    var classes = (0, _classnames["default"])(classPrefix, className, (_classNames2 = {}, _classNames2[this.addPrefix('sortable')] = sortable, _classNames2));
    var unhandledProps = (0, _utils.getUnhandledProps)(HeaderCell, rest);
    return React.createElement("div", {
      className: classes
    }, React.createElement(_Cell["default"], (0, _extends2["default"])({}, unhandledProps, {
      width: width,
      dataKey: dataKey,
      left: left,
      headerHeight: headerHeight,
      isHeaderCell: true,
      onClick: this.handleClick
    }), children, this.renderSortColumn()), this.renderResizeSpanner());
  };

  return HeaderCell;
}(React.PureComponent);

HeaderCell.propTypes = {
  index: _propTypes["default"].number,
  sortColumn: _propTypes["default"].string,
  sortType: _propTypes["default"].oneOf(['desc', 'asc']),
  sortable: _propTypes["default"].bool,
  resizable: _propTypes["default"].bool,
  onColumnResizeStart: _propTypes["default"].func,
  onColumnResizeEnd: _propTypes["default"].func,
  onResize: _propTypes["default"].func,
  onColumnResizeMove: _propTypes["default"].func,
  onSortColumn: _propTypes["default"].func,
  flexGrow: _propTypes["default"].number,
  fixed: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['left', 'right'])])
};
HeaderCell.defaultProps = {
  classPrefix: (0, _utils.defaultClassPrefix)('table-cell-header')
};
var _default = HeaderCell;
exports["default"] = _default;
module.exports = exports.default;