'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderError = exports.renderInputShuttle = exports.renderInput = exports.renderField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('muicss/lib/react/input');

var _input2 = _interopRequireDefault(_input);

var _select = require('muicss/lib/react/select');

var _select2 = _interopRequireDefault(_select);

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

var show = { border: 'none', backgroundColor: 'white' };
var label = {};

var renderInput = exports.renderInput = function renderInput(_ref2) {
    var hint = _ref2.hint,
        input = _ref2.input,
        label = _ref2.label,
        type = _ref2.type,
        readOnly = _ref2.readOnly,
        _ref2$meta = _ref2.meta,
        touched = _ref2$meta.touched,
        error = _ref2$meta.error;
    return _react2.default.createElement(
        'div',
        { className: 'mui--text-left' },
        _react2.default.createElement(_input2.default, _extends({}, input, { floatingLabel: true, label: label, readOnly: readOnly })),
        touched && error && _react2.default.createElement(
            'span',
            { style: style },
            error
        )
    );
};

var renderInputShuttle = exports.renderInputShuttle = function renderInputShuttle(_ref3) {
    var hint = _ref3.hint,
        input = _ref3.input,
        label = _ref3.label,
        type = _ref3.type,
        readOnly = _ref3.readOnly,
        _ref3$meta = _ref3.meta,
        touched = _ref3$meta.touched,
        error = _ref3$meta.error;
    return _react2.default.createElement(
        'div',
        { className: 'mui--text-left' },
        _react2.default.createElement(
            'div',
            { style: show, className: 'mui--text-left' },
            _react2.default.createElement(
                _select2.default,
                _extends({ defaultValue: '2' }, input, { label: 'No. surfboards' }),
                _react2.default.createElement(Option, { value: '10:00', label: '10:00' }),
                _react2.default.createElement(Option, { value: '14:00', label: '14:00' }),
                _react2.default.createElement(Option, { value: '18:00', label: '18:00' }),
                _react2.default.createElement(Option, { value: '22:00', label: '22:00' })
            )
        )
    );
};

var renderError = exports.renderError = function renderError(_ref4) {
    var _ref4$meta = _ref4.meta,
        touched = _ref4$meta.touched,
        error = _ref4$meta.error;
    return touched && error ? _react2.default.createElement(
        'span',
        { style: style },
        error
    ) : false;
};

exports.default = renderField;