'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderShuttleCalendar = exports.renderCalendar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactWidgets = require('react-widgets');

var _reactWidgets2 = _interopRequireDefault(_reactWidgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorstyle = {
    color: 'red'
};
var styleBackground = { border: 'none', backgroundColor: 'HoneyDew' };

var renderCalendar = exports.renderCalendar = function renderCalendar(_ref) {
    var input = _ref.input,
        label = _ref.label,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;

    var selected = input.value ? new Date(input.value) : null;
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'mui--text-left' },
            _react2.default.createElement(
                'div',
                { className: 'mui--text-headline' },
                'Date of pickup'
            ),
            _react2.default.createElement(_reactWidgets2.default.Calendar, _extends({ style: styleBackground }, input, { value: selected, culture: 'en', min: tomorrow })),
            touched && error && _react2.default.createElement(
                'span',
                { style: errorstyle },
                error
            )
        )
    );
};

var renderShuttleCalendar = exports.renderShuttleCalendar = function renderShuttleCalendar(_ref2) {
    var input = _ref2.input,
        label = _ref2.label,
        _ref2$meta = _ref2.meta,
        touched = _ref2$meta.touched,
        error = _ref2$meta.error;

    var selected = input.value ? new Date(input.value) : null;
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 3);
    var max = new Date("August 20, 2017");
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'mui--text-left' },
            _react2.default.createElement(
                'div',
                { className: 'mui--text-title' },
                '*Dates are limited.*'
            ),
            _react2.default.createElement(_reactWidgets2.default.Calendar, _extends({ style: styleBackground }, input, { value: selected, culture: 'en', min: tomorrow, max: max })),
            touched && error && _react2.default.createElement(
                'span',
                { style: errorstyle },
                error
            )
        )
    );
};

exports.default = renderCalendar;