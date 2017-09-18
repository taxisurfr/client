'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    color: 'white',
    fontSize: 24
};
exports.default = _react2.default.createClass({
    displayName: 'NavLink',
    render: function render() {
        return _react2.default.createElement(_reactRouterDom.Link, _extends({ style: style }, this.props));
    }
});