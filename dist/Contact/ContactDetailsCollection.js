'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _renderField = require('../util/render/renderField');

var _renderTextArea = require('../util/render/renderTextArea');

var _reactRecaptcha = require('react-recaptcha');

var _reactRecaptcha2 = _interopRequireDefault(_reactRecaptcha);

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by peter on 28/01/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// site key
var sitekey = '6Ld1PxwUAAAAAGdVjbfgLQXifnF7DPjaVa7LfCxn';

// specifying your onload callback function
var callback = function callback() {};

var expiredCallback = function expiredCallback() {
    console.log('Recaptcha expired');
};

// define a variable to store the recaptcha instance
var recaptchaInstance = void 0;

var ContactDetailsCollection = function (_React$Component) {
    _inherits(ContactDetailsCollection, _React$Component);

    function ContactDetailsCollection(props) {
        _classCallCheck(this, ContactDetailsCollection);

        var _this = _possibleConstructorReturn(this, (ContactDetailsCollection.__proto__ || Object.getPrototypeOf(ContactDetailsCollection)).call(this, props));

        _this.resetRecaptcha = function () {
            recaptchaInstance.reset();
        };

        _this.resetRecaptcha = _this.resetRecaptcha.bind(_this);
        return _this;
    }

    // handle reset


    _createClass(ContactDetailsCollection, [{
        key: 'render',
        value: function render() {
            var show = { backgroundColor: 'HoneyDew' };
            var handleSubmit = this.props.handleSubmit;

            return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _panel2.default,
                        { style: show },
                        _react2.default.createElement(
                            'div',
                            { className: 'mui--text-headline' },
                            'Contact us by filling out the following.'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { name: 'contactname', id: 'name', hint: 'Your name',
                            component: _renderField.renderInput, label: 'Name' }),
                        _react2.default.createElement(_reduxForm.Field, { name: 'contactemail', id: 'email', hint: 'your@email.com',
                            component: _renderField.renderInput, label: 'Email' }),
                        _react2.default.createElement(_reduxForm.Field, { name: 'contactmessage', component: _renderTextArea.renderTextArea, label: 'Message' }),
                        _react2.default.createElement(_reactRecaptcha2.default, {
                            ref: function ref(e) {
                                return recaptchaInstance = e;
                            },
                            sitekey: sitekey,
                            size: 'compact',
                            render: 'explicit',
                            verifyCallback: this.props.verifyCallback,
                            onloadCallback: callback,
                            expiredCallback: expiredCallback
                        }),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'button',
                                { disabled: !this.props.verified, type: 'submit', className: 'next' },
                                'Send message'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ContactDetailsCollection;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: _validate2.default
})(ContactDetailsCollection);