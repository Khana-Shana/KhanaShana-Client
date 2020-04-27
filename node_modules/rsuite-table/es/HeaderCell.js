import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ColumnResizeHandler from './ColumnResizeHandler';
import { isNullOrUndefined, getUnhandledProps, defaultClassPrefix, prefix } from './utils';
import Cell from './Cell';

var HeaderCell =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(HeaderCell, _React$PureComponent);

  HeaderCell.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.width !== prevState.width || nextProps.flexGrow !== prevState.flexGrow) {
      return {
        width: nextProps.width,
        flexGrow: nextProps.flexGrow,
        columnWidth: isNullOrUndefined(nextProps.flexGrow) ? nextProps.width : 0
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
      return prefix(_this.props.classPrefix)(name);
    };

    _this.state = {
      width: props.width,
      flexGrow: props.flexGrow,
      columnWidth: isNullOrUndefined(props.flexGrow) ? props.width : 0
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

    return React.createElement(ColumnResizeHandler, {
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

      var iconClasses = classNames(this.addPrefix('icon-sort'), (_classNames = {}, _classNames[this.addPrefix("icon-sort-" + sortType)] = sortColumn === dataKey, _classNames));
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
        rest = _objectWithoutPropertiesLoose(_this$props6, ["className", "width", "dataKey", "headerHeight", "children", "left", "sortable", "classPrefix"]);

    var classes = classNames(classPrefix, className, (_classNames2 = {}, _classNames2[this.addPrefix('sortable')] = sortable, _classNames2));
    var unhandledProps = getUnhandledProps(HeaderCell, rest);
    return React.createElement("div", {
      className: classes
    }, React.createElement(Cell, _extends({}, unhandledProps, {
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
  index: PropTypes.number,
  sortColumn: PropTypes.string,
  sortType: PropTypes.oneOf(['desc', 'asc']),
  sortable: PropTypes.bool,
  resizable: PropTypes.bool,
  onColumnResizeStart: PropTypes.func,
  onColumnResizeEnd: PropTypes.func,
  onResize: PropTypes.func,
  onColumnResizeMove: PropTypes.func,
  onSortColumn: PropTypes.func,
  flexGrow: PropTypes.number,
  fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right'])])
};
HeaderCell.defaultProps = {
  classPrefix: defaultClassPrefix('table-cell-header')
};
export default HeaderCell;