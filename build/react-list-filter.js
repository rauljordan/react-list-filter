(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ListFilter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (window.ReactDOM);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListFilter = function (_React$Component) {
  _inherits(ListFilter, _React$Component);

  function ListFilter(props) {
    _classCallCheck(this, ListFilter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListFilter).call(this, props));

    _this.state = {
      data: _this.props.data,
      filteredData: _this.props.data
    };
    return _this;
  }

  _createClass(ListFilter, [{
    key: 'filterData',
    value: function filterData(e) {
      e.preventDefault();
      var regex = new RegExp(e.target.value, 'i');
      var filtered = this.state.data.filter(function (datum) {
        return datum.search(regex) > -1;
      });

      this.setState({
        filteredData: filtered
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var filteredData = this.state.filteredData;

      var items = filteredData.map(function (datum) {
        return _react2.default.createElement(
          'li',
          null,
          datum
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          className: this.props.inputClassName,
          type: 'text', placeholder: this.props.placeholder,
          onChange: this.filterData.bind(this) }),
        _react2.default.createElement(
          'ul',
          { className: this.props.ulClassName },
          items
        )
      );
    }
  }, {
    key: '_getInputValue',
    value: function _getInputValue() {
      return _reactDom2.default.findDOMNode(this).value;
    }
  }]);

  return ListFilter;
}(_react2.default.Component);

exports.default = ListFilter;
;

ListFilter.propTypes = {
  ulClassName: _react2.default.PropTypes.string,
  inputClassName: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.array
};
module.exports = exports['default'];

},{}]},{},[1])(1)
});