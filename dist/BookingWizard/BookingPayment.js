'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _cardReact = require('card-react');

var _cardReact2 = _interopRequireDefault(_cardReact);

var _input = require('muicss/lib/react/input');

var _input2 = _interopRequireDefault(_input);

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by peter on 28/01/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BookingPayment = function (_Component) {
    _inherits(BookingPayment, _Component);

    function BookingPayment(props) {
        _classCallCheck(this, BookingPayment);

        var _this = _possibleConstructorReturn(this, (BookingPayment.__proto__ || Object.getPrototypeOf(BookingPayment)).call(this, props));

        _this.handlePayment = _this.handlePayment.bind(_this);
        return _this;
    }

    _createClass(BookingPayment, [{
        key: 'handlePayment',
        value: function handlePayment(event) {
            var paymentError = this.props.paymentError;
            var dispatch = this.props.dispatch;
            var payment = this.props.payment;
            var exp = event.target.CCexpiry.value.split('/');
            var ccValues = {
                name: event.target.CCname.value,
                number: event.target.CCnumber.value,
                // number: '4242424242424242',
                cvc: event.target.CCcvc.value,
                exp_month: exp[0] != null ? exp[0].trim() : null,
                exp_year: exp[1] != null ? exp[1].trim() : null
            };
            event.preventDefault();
            // send form here
            window.Stripe.createToken(ccValues, function (status, response) {
                if (response.error) {
                    console.log("ERROR: could not get payment token:" + response.error.message);
                    // self.setState({paymentError: response.error.message, submitDisabled: false});
                    dispatch(paymentError(response.error.message));
                } else {
                    console.log(response.id);
                    payment(response.id);
                    // self.setState({paymentComplete: true, submitDisabled: false, token: response.id});
                    // make request to your server here!
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                stripeKey = _props.stripeKey,
                description = _props.description,
                price = _props.price,
                isFetchingPayment = _props.isFetchingPayment,
                previousPage = _props.previousPage;

            window.Stripe.setPublishableKey(stripeKey);

            var style = {
                color: 'red'
            };
            var show = { backgroundColor: 'HoneyDew' };
            var removeBorder = { border: 'none' };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mui--text-display1' },
                    _react2.default.createElement(
                        'span',
                        { style: style },
                        this.props.paymentErrorText
                    )
                ),
                _react2.default.createElement(
                    _cardReact2.default

                    // the id of the container element where you want to render the card element.
                    // the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
                    ,
                    { container: 'card-wrapper' // required

                        // an object contain the form inputs names.
                        // every input must have a unique name prop.
                        , formInputsNames: {
                            number: 'CCnumber', // optional — default "number"
                            expiry: 'CCexpiry', // optional — default "expiry"
                            cvc: 'CCcvc', // optional — default "cvc"
                            name: 'CCname' // optional - default "name"
                        }

                        // initial values to render in the card element
                        , initialValues_X: {
                            number: '4242424242424242', // optional — default •••• •••• •••• ••••
                            cvc: '123', // optional — default •••
                            expiry: '12/18', // optional — default ••/••
                            name: 'Random Name' // optional — default FULL NAME
                        }

                        // the class name attribute to add to the input field and the corresponding part of the card element,
                        // when the input is valid/invalid.
                        , classes: {
                            valid: 'valid-input', // optional — default 'jp-card-valid'
                            invalid: 'invalid-input' // optional — default 'jp-card-invalid'
                        }

                        // specify whether you want to format the form inputs or not
                        , formatting: true // optional - default true
                    },
                    _react2.default.createElement(
                        'form',
                        { style: removeBorder, onSubmit: this.handlePayment },
                        _react2.default.createElement(
                            'div',
                            { id: 'xxx', style: removeBorder },
                            _react2.default.createElement(
                                _panel2.default,
                                { style: show },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(_input2.default, { style: removeBorder, name: 'CCname', hint: 'Name on the credit card' }),
                                    _react2.default.createElement(_input2.default, { style: removeBorder, name: 'CCnumber', hint: 'Card number' }),
                                    _react2.default.createElement(_input2.default, { style: removeBorder,
                                        name: 'CCexpiry',
                                        hint: 'MM/YY' }),
                                    _react2.default.createElement(_input2.default, { style: removeBorder,
                                        name: 'CCcvc',
                                        hint: 'CVC' }),
                                    _react2.default.createElement(
                                        'div',
                                        { style: removeBorder },
                                        _react2.default.createElement(
                                            'button',
                                            { type: 'button', className: 'previous', onClick: previousPage },
                                            'Previous'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { disabled: isFetchingPayment, type: 'submit' },
                                            'Pay ',
                                            price
                                        ),
                                        isFetchingPayment && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin fa-3x fa-fw' })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement('div', { id: 'card-wrapper' })
            );
        }
    }]);

    return BookingPayment;
}(_react.Component);

BookingPayment.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    dispatch: _react.PropTypes.func.isRequired,
    paymentErrorText: _react.PropTypes.string
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
})(BookingPayment);