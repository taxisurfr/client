'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _reactBootstrap = require('react-bootstrap');

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BookingConfirmation = function BookingConfirmation(props) {
    var isShuttle = props.pickupType.startsWith('SHUTTLE_');
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _panel2.default,
            null,
            _react2.default.createElement(
                'h1',
                null,
                'Congratulations. Booking is completed. Details have be sent per email.'
            )
        ),
        !isShuttle && _react2.default.createElement(
            _panel2.default,
            null,
            _react2.default.createElement(
                'h1',
                null,
                'Sharing your taxi'
            ),
            _react2.default.createElement(
                'h2',
                null,
                'Maybe you are interested in sharing your taxi to reduce costs and meet other people?'
            ),
            _react2.default.createElement(
                'h2',
                null,
                'You can improve your chances of sharing by posting the following link in sharing forums.'
            ),
            _react2.default.createElement(
                'h2',
                null,
                props.routeLink
            ),
            _react2.default.createElement(
                _reactCopyToClipboard2.default,
                { text: props.routeLink },
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                        bsStyle: 'primary',
                        bsSize: 'large'
                    },
                    'Copy share link to clipboard'
                )
            )
        ),
        !isShuttle && _react2.default.createElement(
            _panel2.default,
            null,
            _react2.default.createElement(
                'h2',
                null,
                'Here are some good forums for sharing.'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'a',
                    { className: 'mui--text-title', href: 'https://www.facebook.com/pg/taxisurfr/posts' },
                    'Taxisurfr in Facebook'
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'a',
                    { className: 'mui--text-title', href: 'https://srilankataxishare.com' },
                    'Sri Lanka Taxishare'
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'a',
                    { className: 'mui--text-title', href: 'https://www.carpoolworld.com/carpool_SRI_LANKA_favorites.html' },
                    'Carpool'
                )
            )
        )
    );
};
exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: _validate2.default
})(BookingConfirmation);