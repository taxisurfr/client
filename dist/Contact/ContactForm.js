'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ContactDetailsCollection = require('./ContactDetailsCollection');

var _ContactDetailsCollection2 = _interopRequireDefault(_ContactDetailsCollection);

var _ContactConfirmation = require('./ContactConfirmation');

var _ContactConfirmation2 = _interopRequireDefault(_ContactConfirmation);

require('../BookingWizard/BookingApp.css');

var _TaxisurfrAppbar = require('../Widget/TaxisurfrAppbar');

var _TaxisurfrAppbar2 = _interopRequireDefault(_TaxisurfrAppbar);

var _TaxisurfrFooter = require('../Widget/TaxisurfrFooter');

var _TaxisurfrFooter2 = _interopRequireDefault(_TaxisurfrFooter);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_Component) {
    _inherits(ContactForm, _Component);

    function ContactForm(props) {
        _classCallCheck(this, ContactForm);

        var _this = _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call(this, props));

        _this.verifyCallback = function (response) {
            var dispatch = _this.props.dispatch;

            dispatch((0, _actions.showVerified)(true));
        };

        _this.createContact = _this.createContact.bind(_this);
        _this.verifyCallback = _this.verifyCallback.bind(_this);
        return _this;
    }

    _createClass(ContactForm, [{
        key: 'createContact',
        value: function createContact() {
            var dispatch = this.props.dispatch;

            var contact = {
                contactname: this.props.values.contactname,
                contactemail: this.props.values.contactemail,
                contactmessage: this.props.values.contactmessage
            };
            dispatch((0, _actions.fetchContactOnServer)(contact));
        }
    }, {
        key: 'render',
        value: function render() {
            var page = this.props.page;

            var s1 = { verticalAlign: 'middle' };
            var s2 = { textAlign: 'right' };
            return _react2.default.createElement(
                'div',
                { className: 'BookingApp-border' },
                _react2.default.createElement(
                    'div',
                    { className: 'BookingApp' },
                    _react2.default.createElement(
                        'div',
                        null,
                        page === _actions.PAGE_CONTACT && _react2.default.createElement(_ContactDetailsCollection2.default, {
                            onSubmit: this.createContact, verified: this.props.verified,
                            verifyCallback: this.verifyCallback }),
                        page === _actions.PAGE_CONTACT_CONFIRMATION && _react2.default.createElement(_ContactConfirmation2.default, null),
                        _react2.default.createElement(_TaxisurfrFooter2.default, null)
                    )
                )
            );
        }
    }]);

    return ContactForm;
}(_react.Component);

function mapStateToProps(state) {
    var verified = state.contactReducer.verified;
    var page = state.contactReducer.page;

    var values = state.form.wizard && state.form.wizard.values ? state.form.wizard.values : null;

    console.log("mapStatToProps:" + verified);
    return {
        page: page,
        values: values,
        verified: verified
    };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContactForm);