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

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by peter on 28/01/2017.
                                                                                                                                                                                                                              */


var BookingDetailsShow = function BookingDetailsShow(props) {
    var booking = props.booking,
        description = props.description,
        price = props.price,
        handleSubmit = props.handleSubmit,
        pristine = props.pristine,
        previousPage = props.previousPage,
        submitting = props.submitting,
        pickup = props.pickup;

    var rows = [['Date', booking.dateText], ['Name', booking.name], ['Email', booking.email], [pickup.type, booking.flightNo], [pickup.time, booking.landingTime], ['Passengers', booking.pax], ['Surfboards', booking.surfboards], ['Requirements', booking.requirements]];
    var noborder = {
        border: 'none',
        backgroundColor: 'HoneyDew',
        paddingLeft: '0px',
        paddingRight: '0px'
    };
    var noBackground = {
        border: 'none',
        backgroundColor: 'white'
    };
    return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit },
        _react2.default.createElement(
            'div',
            { id: 'xxx' },
            _react2.default.createElement(
                _panel2.default,
                { id: 'yyy', style: noborder },
                _react2.default.createElement(
                    'div',
                    { id: 'xxx', style: noborder },
                    _react2.default.createElement(
                        _reactContainerDimensions2.default,
                        null,
                        function (_ref) {
                            var width = _ref.width,
                                height = _ref.height;
                            return _react2.default.createElement(
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
                                                {
                                                    className: 'mui--text-right mui--text-title' },
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
                                                {
                                                    className: 'mui--text-left mui--text-title' },
                                                rows[rowIndex][1]
                                            )
                                        );
                                    },
                                    width: 20,
                                    flexGrow: 1
                                })
                            );
                        }
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: noborder },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'previous', onClick: previousPage },
                            'Previous'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'submit', disabled: pristine || submitting },
                            'Pay ',
                            price
                        )
                    )
                )
            )
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
})(BookingDetailsShow);