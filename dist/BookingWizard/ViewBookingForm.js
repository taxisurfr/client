'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactPdf = require('react-pdf');

var _reactPdf2 = _interopRequireDefault(_reactPdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewBookingForm = function ViewBookingForm(props) {
    var form = props.form;

    var pdf = ['some pdf'];
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactPdf2.default, {
            file: { data: { pdf: pdf } }
        })
    );
};
var validate = function validate(values) {
    var errors = {};
    return errors;
};

exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: validate
})(ViewBookingForm);