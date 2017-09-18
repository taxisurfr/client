'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _griddleReact = require('griddle-react');

var _griddleReact2 = _interopRequireDefault(_griddleReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewShareBookingDetails = function ViewShareBookingDetails(props) {
    var description = props.description,
        price = props.price,
        handleSubmit = props.handleSubmit,
        previousPage = props.previousPage;

    var bookingData = [{
        "1": 'Route',
        "2": props.booking.route.startroute + ' to ' + props.booking.route.endroute
    }, {
        "1": 'Date',
        "2": props.booking.dateText
    }, {
        "1": 'Flight No.',
        "2": props.booking.flightNo
    }, {
        "1": 'Name',
        "2": props.booking.name
    }, {
        "1": 'Email',
        "2": props.booking.email
    }, {
        "1": 'Landing Time',
        "2": props.booking.landingTime
    }, {
        "1": 'No. of passengers',
        "2": props.booking.passengers
    }, {
        "1": 'Surfboards',
        "2": props.booking.surfboards
    }, {
        "1": 'Requirements',
        "2": props.booking.requirements
    }];

    var priceToJoin = props.booking ? '$US' + props.booking.route.centsToJoin / 100 : null;
    return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit },
        _react2.default.createElement(
            'div',
            { className: 'mui--text-headline' },
            description
        ),
        _react2.default.createElement(
            'div',
            { className: 'mui--text-headline' },
            price
        ),
        _react2.default.createElement(_griddleReact2.default, { results: bookingData, showTableHeading: false, showPager: false, resultsPerPage: '9' }),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'button',
                { type: 'button', className: 'previous', onClick: previousPage },
                'Previous'
            ),
            _react2.default.createElement(
                'button',
                { type: 'submit' },
                'Pay ',
                priceToJoin
            )
        )
    );
}; /**
    * Created by peter on 28/01/2017.
    */

var validate = function validate(values) {
    var errors = {};
    return errors;
};

exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: validate
})(ViewShareBookingDetails);