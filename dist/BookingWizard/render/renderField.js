'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderError = exports.renderInput = exports.renderField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('muicss/lib/react/input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderField = exports.renderField = function renderField(_ref) {
    var input = _ref.input,
        label = _ref.label,
        type = _ref.type,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'label',
            null,
            label
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', _extends({}, input, { placeholder: label, type: type })),
            touched && error && _react2.default.createElement(
                'span',
                null,
                error
            )
        )
    );
};

var style = {
    color: 'red'
};

var renderInput = exports.renderInput = function renderInput(_ref2) {
    var hint = _ref2.hint,
        input = _ref2.input,
        label = _ref2.label,
        type = _ref2.type,
        _ref2$meta = _ref2.meta,
        touched = _ref2$meta.touched,
        error = _ref2$meta.error;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'label',
            null,
            label
        ),
        _react2.default.createElement(
            'div',
            { className: 'mui--text-left' },
            _react2.default.createElement(_input2.default, _extends({}, input, { hint: hint, floatingLabel: true })),
            touched && error && _react2.default.createElement(
                'span',
                { style: style },
                error
            )
        )
    );
};

var renderError = exports.renderError = function renderError(_ref3) {
    var _ref3$meta = _ref3.meta,
        touched = _ref3$meta.touched,
        error = _ref3$meta.error;
    return touched && error ? _react2.default.createElement(
        'span',
        { style: style },
        error
    ) : false;
};

exports.default = renderField;