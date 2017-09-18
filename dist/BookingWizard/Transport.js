'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by peter on 28/01/2017.
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _Combobox = require('react-widgets/lib/Combobox');

var _Combobox2 = _interopRequireDefault(_Combobox);

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

var _TaxisurfrYoutube = require('../Widget/TaxisurfrYoutube');

var _TaxisurfrYoutube2 = _interopRequireDefault(_TaxisurfrYoutube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var locations = ['Colombo Airport', 'Colombo Downtown', 'Arugam Bay', 'Dambulla', 'Galle', 'Haputale', 'Hikkaduwa', 'Kalpitiya', 'Kandy', 'Kitulgala', 'Polunnaruwa', 'Mirissa', 'Weligama', 'Yala Tissamaharama', 'Polunaruwa', 'Bandarawella', 'Ella', 'Tangalle', 'Akkaraipattu', 'Nuwara Eliya', 'Midigama', 'Kalpitiya', 'Batikallo', 'Passikuda', 'Sigiriya', 'Trinco', 'Udawalawa', 'Unawatuna'];

var renderCombobox = function renderCombobox(_ref) {
    var input = _ref.input,
        data = _ref.data,
        label = _ref.label,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;
    return _react2.default.createElement(
        'div',
        { style: noborder },
        _react2.default.createElement(
            'h2',
            { className: 'mui--text-headline mui--text-left' },
            label
        ),
        _react2.default.createElement(_Combobox2.default, _extends({ style: centerer }, input, {
            data: data,
            defaultValue: data[1],
            onChange: input.onChange,
            suggest: true,
            caseSensitive: false,
            minLength: 2,
            filter: 'contains'
        })),
        _react2.default.createElement(
            'div',
            null,
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

var styleCenter1 = {
    margin: 'auto',
    width: '100%',
    border: '3px solid blue',
    paddingx: '10px'
};

var centerer = {
    display: 'block',
    margin: '0 auto',
    border: '1px solid'
};
var noborder = {
    border: 'none'
};

var filler = {
    margin: 'auto',
    border: '3px solid green'
};
var styleCenter3 = {};

var Transport = function (_React$Component) {
    _inherits(Transport, _React$Component);

    function Transport() {
        _classCallCheck(this, Transport);

        return _possibleConstructorReturn(this, (Transport.__proto__ || Object.getPrototypeOf(Transport)).apply(this, arguments));
    }

    _createClass(Transport, [{
        key: 'render',
        value: function render() {
            var block = { float: 'left' };
            var noborder = { border: 'none' };
            var show = { backgroundColor: 'HoneyDew' };
            var message1 = 'taxisurfr is for the independent traveller wanting to connect with local trusted operators. Passengers will be met at the airport, hotel, train station or arranged meeting point.';
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                noRouteMessage = _props.noRouteMessage;

            var isNoRoute = typeof noRouteMessage != 'undefined' && noRouteMessage != null && noRouteMessage != '';
            return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit },
                _react2.default.createElement(
                    'div',
                    { className: 'mui--text-center mui--text-title', itemScope: true, itemType: 'http://schema.org/Offer' },
                    _react2.default.createElement(
                        _panel2.default,
                        { style: show },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'mui--text-left mui--text-title', style: noborder },
                                _react2.default.createElement(
                                    'div',
                                    { width: '100px', style: noborder },
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Taxi Booking in Sri Lanka'
                                    ),
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        message1
                                    ),
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Some of our most popular routes'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://app.taxisurfr.com/taxi-colombo-airport-arugam-bay', target: '_blank' },
                                            'Colombo Airport to Arugam Bay'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://app.taxisurfr.com/taxi-colombo-airport-mirissa', target: '_blank' },
                                            'Colombo Airport to Mirissa'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://app.taxisurfr.com/taxi-colombo-airport-weligama', target: '_blank' },
                                            'Colombo Airport to Weligama'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _panel2.default,
                        { style: show },
                        _react2.default.createElement(
                            'div',
                            { style: noborder },
                            _react2.default.createElement(
                                'div',
                                { className: 'mui--text-center mui--text-headline style',
                                    style: noborder },
                                noRouteMessage
                            ),
                            _react2.default.createElement(_reduxForm.Field, {
                                name: 'pickup',
                                component: renderCombobox,
                                data: locations,
                                valueField: 'value',
                                label: 'Pickup eg. Colombo Airport'
                            }),
                            _react2.default.createElement(_reduxForm.Field, {
                                name: 'dropoff',
                                component: renderCombobox,
                                data: locations,
                                valueField: 'value',
                                textField: 'color',
                                label: 'Dropoff eg. Arugam Bay'
                            }),
                            _react2.default.createElement(
                                'div',
                                { className: 'mui--text-left', style: noborder },
                                _react2.default.createElement(
                                    'button',
                                    { disabled: isNoRoute, type: 'submit', className: 'next' },
                                    'See details.'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _panel2.default,
                        { style: show },
                        _react2.default.createElement(
                            'div',
                            { className: 'mui--text-left mui--text-title' },
                            _react2.default.createElement(_TaxisurfrYoutube2.default, null),
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Useful Links'
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'http://arugam.info', target: '_blank' },
                                    'Arugam Info'
                                ),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement(
                                    'a',
                                    { href: 'http://www.sanjutravels.com/', target: '_blank' },
                                    'Sanju Travels'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Transport;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: _validate2.default
})(Transport);