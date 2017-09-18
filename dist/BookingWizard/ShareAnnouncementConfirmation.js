'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by peter on 28/01/2017.
 */
var ShareAnnouncementConfirmation = function ShareAnnouncementConfirmation(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _panel2.default,
            null,
            _react2.default.createElement(
                'h1',
                null,
                'Congratulations. '
            ),
            _react2.default.createElement(
                'h1',
                null,
                'Your share announcement has been registered.'
            ),
            _react2.default.createElement(
                'h1',
                null,
                'You can see it how it will appear when you seach this route.'
            ),
            _react2.default.createElement(
                'h1',
                null,
                'Good luck!'
            )
        ),
        _react2.default.createElement(
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
                'You can improve your chances of finding someone to share by posting the following link in sharing forums.'
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
        _react2.default.createElement(
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
                    { className: 'mui--text-title', href: 'https://www.facebook.com/groups/srilankataxishare' },
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
})(ShareAnnouncementConfirmation);