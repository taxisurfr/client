'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderReadonly = exports.renderPrice = exports.renderDescription = exports.renderConditions = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showWhiteBackground = { border: 'none', backgroundColor: 'white' };

var renderConditions = exports.renderConditions = function renderConditions(_ref) {
    var hint = _ref.hint,
        label = _ref.label,
        type = _ref.type,
        route = _ref.route;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h2',
                { className: 'mui--text-title' },
                'Features'
            ),
            _react2.default.createElement(
                'table',
                { width: '100%' },
                route && !route.pickupType.startsWith('SHUTTLE_') && _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-plus' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'mui--text-title' },
                                ' All fuel charges and expenses are included.'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-plus' }),
                            _react2.default.createElement(
                                'span',
                                {
                                    className: 'mui--text-title' },
                                ' Online booking with credit card.'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-plus' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'mui--text-title' },
                                ' 100% refund up to 24 hours before pickup.'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-plus' }),
                            _react2.default.createElement(
                                'span',
                                {
                                    className: 'mui--text-title' },
                                ' 5 or 7 seater air-conditioned taxi.'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-plus' }),
                            _react2.default.createElement(
                                'span',
                                {
                                    className: 'mui--text-title' },
                                ' Super sharing function (see below).'
                            )
                        )
                    )
                ),
                route && route.pickupType == 'SHUTTLE_AIRPORT' && _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-plus' }),
                            _react2.default.createElement(
                                'span',
                                {
                                    className: 'mui--text-title' },
                                ' Pickup from the airport at ',
                                route.description
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-plus' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'mui--text-title' },
                                ' Price is per person.'
                            )
                        )
                    )
                ),
                route && route.pickupType == 'SHUTTLE_HOTEL' && _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-plus' }),
                            _react2.default.createElement(
                                'span',
                                {
                                    className: 'mui--text-title' },
                                ' Pickup from your hotel approx. ',
                                route.description
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-plus' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'mui--text-title' },
                                ' Price is per person.'
                            )
                        )
                    )
                )
            )
        )
    );
};

var renderDescription = exports.renderDescription = function renderDescription(_ref2) {
    var hint = _ref2.hint,
        label = _ref2.label,
        type = _ref2.type;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            { className: 'mui--text-headline' },
            'Your Transfer'
        ),
        _react2.default.createElement(
            'table',
            { width: '100%' },
            _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'mui--text-title' },
                            hint
                        )
                    )
                )
            )
        )
    );
};
var renderPrice = exports.renderPrice = function renderPrice(_ref3) {
    var hint = _ref3.hint,
        label = _ref3.label,
        type = _ref3.type;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'table',
            { width: '100%' },
            _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement(
                                'h2',
                                { className: 'mui--text-title' },
                                'Price'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'mui--text-headline' },
                                hint
                            )
                        )
                    )
                )
            )
        )
    );
};
var renderReadonly = exports.renderReadonly = function renderReadonly(_ref4) {
    var hint = _ref4.hint,
        label = _ref4.label,
        type = _ref4.type;
    return _react2.default.createElement(
        'div',
        { style: showWhiteBackground },
        _react2.default.createElement(
            'table',
            { width: '100%' },
            _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'h2',
                            { className: 'mui--text-title' },
                            label
                        )
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'h2',
                            { className: 'mui--text-title mui--text-right' },
                            hint
                        )
                    )
                )
            )
        )
    );
};
exports.default = renderReadonly;