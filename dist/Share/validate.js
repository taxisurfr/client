'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var validate = function validate(values) {
    var errors = {};
    if (!values.flightNo) {
        errors.flightNo = 'Required';
    }
    if (!values.date) {
        errors.date = 'Please provide date of pickup';
    }
    if (!values.name) {
        errors.name = 'Name please';
    }
    if (!values.landingTime) {
        errors.landingTime = 'Required';
    }

    // if (!values.flightNo) {
    //     errors.date = 'Required'
    // }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'A valid email address, please';
    }
    if (!values.sharingFlightNo) {
        errors.sharingFlightNo = 'Required';
    }
    if (!values.sharingLandingTime) {
        errors.sharingLandingTime = 'Please provide time of pickup';
    }
    if (!values.sharingName) {
        errors.sharingName = 'Name please';
    }
    if (!values.landingTime) {
        errors.landingTime = 'Required';
    }

    // if (!values.flightNo) {
    //     errors.date = 'Required'
    // }
    if (!values.sharingEmail) {
        errors.sharingEmail = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.sharingEmail)) {
        errors.sharingEmail = 'A valid email address, please';
    }
    return errors;
};

exports.default = validate;