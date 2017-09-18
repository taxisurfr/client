'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _BrowserApp = require('./BrowserApp');

var _BrowserApp2 = _interopRequireDefault(_BrowserApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
  var div = document.createElement('div');
  _reactDom2.default.render(_react2.default.createElement(_BrowserApp2.default, null), div);
});