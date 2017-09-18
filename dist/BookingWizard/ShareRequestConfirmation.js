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

var ShareRequestConfirmation = function ShareRequestConfirmation(props) {
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
            'Your share request has been sent to the person who booked the taxi.'
        ),
        _react2.default.createElement(
            'h1',
            null,
            'You will now have to wait until they reply.'
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
})(ShareRequestConfirmation);