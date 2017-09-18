'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var validate = function validate(values) {
    var errors = {};
    if (!values.contactname) {
        errors.name = 'Name please';
    }
    if (!values.contactemail) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'A valid email address, please';
    }
    return errors;
};

exports.default = validate;