'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderPassengerCountSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _select = require('muicss/lib/react/select');

var _select2 = _interopRequireDefault(_select);

var _option = require('muicss/lib/react/option');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = { border: 'none' };

var renderPassengerCountSelector = exports.renderPassengerCountSelector = function renderPassengerCountSelector(_ref) {
    var input = _ref.input,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;
    return _react2.default.createElement(
        'div',
        { style: show, className: 'mui--text-left' },
        _react2.default.createElement(
            _select2.default,
            _extends({ defaultValue: '2' }, input, { label: 'No. Passengers' }),
            _react2.default.createElement(_option2.default, { value: '1', label: '1 passenger' }),
            _react2.default.createElement(_option2.default, { value: '2', label: '2 passengers' }),
            _react2.default.createElement(_option2.default, { value: '3', label: '3 passengers' }),
            _react2.default.createElement(_option2.default, { value: '4', label: '4 passengers' }),
            _react2.default.createElement(_option2.default, { value: '5', label: '5 passengers' }),
            _react2.default.createElement(_option2.default, { value: '6', label: '6 passengers' }),
            _react2.default.createElement(_option2.default, { value: '7', label: '7 passengers' })
        )
    );
};

exports.default = renderPassengerCountSelector;