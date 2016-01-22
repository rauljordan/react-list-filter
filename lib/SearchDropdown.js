'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Promise from 'promise-polyfill';

/**
const compose = () => {
  var fns = arguments;

  return function (result) {
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i].call(this, result);
    }
    return result;
  };
};
*/

var SearchDropdown = function (_React$Component) {
  _inherits(SearchDropdown, _React$Component);

  function SearchDropdown() {
    _classCallCheck(this, SearchDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchDropdown).apply(this, arguments));
  }

  _createClass(SearchDropdown, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', {
        type: 'text',
        className: this.props.className,
        placeholder: this.props.placeholder || 'Type your location here.'
      });
    }
  }, {
    key: '_getInputValue',
    value: function _getInputValue() {
      return _reactDom2.default.findDOMNode(this).value;
    }
  }]);

  return SearchDropdown;
}(_react2.default.Component);

exports.default = SearchDropdown;
;

SearchDropdown.propTypes = {
  className: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string
};
module.exports = exports['default'];
//# sourceMappingURL=SearchDropdown.js.map