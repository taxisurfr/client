'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShareAnnouncementRequestConfirmation = function ShareAnnouncementRequestConfirmation(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Congratulations. '
        ),
        _react2.default.createElement(
            'h1',
            null,
            'Your share request has been sent to person who wants to share.'
        ),
        _react2.default.createElement(
            'h1',
            null,
            'They will contact you directly.'
        ),
        _react2.default.createElement(
            'h1',
            null,
            'Please note that no taxi has been ordered.'
        ),
        _react2.default.createElement(
            'h1',
            null,
            'If you need to book a taxi you can do this at taxisurfr.com'
        ),
        _react2.default.createElement(
            'h1',
            null,
            'Good luck!'
        )
    );
}; /**
    * Created by peter on 28/01/2017.
    */
exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: _validate2.default
})(ShareAnnouncementRequestConfirmation);