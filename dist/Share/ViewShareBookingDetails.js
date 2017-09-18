'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _fixedDataTable = require('fixed-data-table');

var _reactContainerDimensions = require('react-container-dimensions');

var _reactContainerDimensions2 = _interopRequireDefault(_reactContainerDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by peter on 28/01/2017.
                                                                                                                                                                                                                              */


var ViewShareBookingDetails = function ViewShareBookingDetails(props) {
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

    var booking = props.booking,
        description = props.description,
        price = props.price,
        handleSubmit = props.handleSubmit,
        pristine = props.pristine,
        previousPage = props.previousPage,
        submitting = props.submitting,
        pickup = props.pickup;

    var rows = [['Date', booking.dateText], ['Name', booking.name], ['Email', booking.email], [pickup.type, booking.flightNo], [pickup.time, booking.landingTime], ['Passengers', booking.pax], ['Surfboards', booking.surfboards], ['Requirements', booking.requirements]];

    var priceToJoin = props.booking ? '$US' + props.booking.route.centsToJoin / 100 : null;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactContainerDimensions2.default,
            null,
            function (_ref) {
                var width = _ref.width,
                    height = _ref.height;
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _fixedDataTable.Table,
                        { className: 'mui--align-middle',
                            rowHeight: 50,
                            rowsCount: rows.length,
                            width: width,
                            maxHeight: 500,
                            headerHeight: 50 },
                        _react2.default.createElement(_fixedDataTable.Column, {
                            header: _react2.default.createElement(_fixedDataTable.Cell, null),
                            cell: function cell(_ref2) {
                                var rowIndex = _ref2.rowIndex,
                                    props = _objectWithoutProperties(_ref2, ['rowIndex']);

                                return _react2.default.createElement(
                                    _fixedDataTable.Cell,
                                    props,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'mui--text-right mui--text-title' },
                                        rows[rowIndex][0]
                                    )
                                );
                            },
                            width: 20,
                            flexGrow: 1
                        }),
                        _react2.default.createElement(_fixedDataTable.Column, {
                            header: _react2.default.createElement(_fixedDataTable.Cell, null),
                            cell: function cell(_ref3) {
                                var rowIndex = _ref3.rowIndex,
                                    props = _objectWithoutProperties(_ref3, ['rowIndex']);

                                return _react2.default.createElement(
                                    _fixedDataTable.Cell,
                                    props,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'mui--text-left mui--text-title' },
                                        rows[rowIndex][1]
                                    )
                                );
                            },
                            width: 20,
                            flexGrow: 1
                        })
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: handleSubmit },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'button',
                                { type: 'submit' },
                                'Pay ',
                                priceToJoin
                            )
                        )
                    )
                );
            }
        )
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
})(ViewShareBookingDetails);