'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SharingDetailsCollection = require('../BookingWizard/SharingDetailsCollection');

var _SharingDetailsCollection2 = _interopRequireDefault(_SharingDetailsCollection);

var _AcceptRefuseShareConfirmation = require('./AcceptRefuseShareConfirmation');

var _AcceptRefuseShareConfirmation2 = _interopRequireDefault(_AcceptRefuseShareConfirmation);

var _ShareBookingConfirmation = require('./ShareBookingConfirmation');

var _ShareBookingConfirmation2 = _interopRequireDefault(_ShareBookingConfirmation);

var _BookingPayment = require('../BookingWizard/BookingPayment');

var _BookingPayment2 = _interopRequireDefault(_BookingPayment);

var _ShareRequestConfirmation = require('../BookingWizard/ShareRequestConfirmation');

var _ShareRequestConfirmation2 = _interopRequireDefault(_ShareRequestConfirmation);

var _ViewShareBookingDetails = require('./ViewShareBookingDetails');

var _ViewShareBookingDetails2 = _interopRequireDefault(_ViewShareBookingDetails);

var _reactRedux = require('react-redux');

var _TaxisurfrAppbar = require('../Widget/TaxisurfrAppbar');

var _TaxisurfrAppbar2 = _interopRequireDefault(_TaxisurfrAppbar);

var _TaxisurfrFooter = require('../Widget/TaxisurfrFooter');

var _TaxisurfrFooter2 = _interopRequireDefault(_TaxisurfrFooter);

var _actions = require('./actions');

var _actions2 = require('../BookingWizard/actions');

var _formatter = require('../util/formatter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShareForm = function (_Component) {
    _inherits(ShareForm, _Component);

    function ShareForm(props) {
        _classCallCheck(this, ShareForm);

        var _this = _possibleConstructorReturn(this, (ShareForm.__proto__ || Object.getPrototypeOf(ShareForm)).call(this, props));

        _this.paymentForShare = _this.paymentForShare.bind(_this);
        _this.gotoSharePayment = _this.gotoSharePayment.bind(_this);
        _this.requestShare = _this.requestShare.bind(_this);
        _this.createShareRequest = _this.createShareRequest.bind(_this);
        _this.doshare = _actions.doshare.bind(_this);
        _this.getRouteDescription = _formatter.getRouteDescription.bind(_this);
        _this.getFormatedPrice = _formatter.getFormatedPrice.bind(_this);
        _this.getPickup = _formatter.getPickup.bind(_this);
        _this.paymentError = _actions2.paymentError.bind(_this);
        return _this;
    }

    _createClass(ShareForm, [{
        key: 'paymentForShare',
        value: function paymentForShare(token) {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions2.fetchPaymentIfNeeded)(token, this.props.booking.id, true));
        }
    }, {
        key: 'requestShare',
        value: function requestShare(shareIndex) {
            var dispatch = this.props.dispatch;

            console.log('requesting shareIndex' + shareIndex);
            dispatch((0, _actions2.setShareId)(shareIndex));
        }
    }, {
        key: 'createShareRequest',
        value: function createShareRequest() {
            var dispatch = this.props.dispatch;
            var values = this.props.values;
            var booking = this.props.booking;


            var sharingRequest = {
                bookingId: booking.id,
                sharingName: values.sharingName,
                sharingEmail: values.sharingEmail,
                sharingFlightNo: values.sharingFlightNo,
                sharingLandingTime: values.sharingLandingTime,
                sharingPax: values.sharingPax || 1,
                sharingSurfboards: values.sharingSurfboards || 0,
                requirements: values.sharingMessage
            };
            dispatch((0, _actions2.fetchSharingRequest)(sharingRequest));
        }
    }, {
        key: 'gotoSharePayment',
        value: function gotoSharePayment() {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions2.setPageAction)(_actions.PAGE_SHARE_PAYMENT));
        }
    }, {
        key: 'getHeadling',
        value: function getHeadling(shareAnnouncement) {
            if (this.props.booking && this.props.booking.route) {
                var _shareAnnouncement = this.props.booking.orderType === 'SHARE_ANNOUNCEMENT';
                var routedesc = 'taxi: ' + this.getRouteDescription(this.props.booking.route);
                var price = _shareAnnouncement ? '' : this.getFormatedPrice(this.props.booking.route.cents);
                var priceToShare = this.getFormatedPrice(this.props.booking.route.centsToJoin);
                if (this.props.shareId) {
                    return routedesc;
                } else {
                    return routedesc + '    ' + price;
                }
            }
            return 'taxisurfr';
        }
    }, {
        key: 'render',
        value: function render() {
            var match = this.props.match;
            var dispatch = this.props.dispatch;

            if (match && match.params) {
                if ('agree' === match.params.cmd || 'refuse' === match.params.cmd || 'book' === match.params.cmd || 'request' === match.params.cmd) {
                    var cmd = match.params.cmd;
                    var id = match.params.id;
                    this.props.match.params = null;
                    dispatch((0, _actions.doshare)(cmd, id));
                    return null;
                }
            }
            var page = this.props.page;
            var values = this.props.values;
            /*
                    const headline = this.props.booking.route ? this.getRouteDescription(this.props.booking.route) + '    ' +this.getFormatedPrice(this.props.booking.route.centsToJoin): 'taxisurfr';
            */

            var headline = this.getHeadling(this.props.shareAnnouncement);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_TaxisurfrAppbar2.default, { headline: headline, rupee: 'xxx' }),
                page === _actions.PAGE_VIEW_SHARE_BOOKING && _react2.default.createElement(_ViewShareBookingDetails2.default, {
                    booking: this.props.booking,
                    previousPage: this.previousPage,
                    onSubmit: this.gotoSharePayment,
                    pickup: this.getPickup(this.props.booking.route)
                }),
                page === _actions.PAGE_SHARE_PAYMENT && _react2.default.createElement(_BookingPayment2.default, {
                    stripeKey: this.props.stripeKey,
                    description: this.getRouteDescription(this.props.booking.route),
                    price: this.getFormatedPrice(this.props.booking.route.centsToJoin),
                    CCname: values.CCname,
                    previousPage: this.previousPage,
                    payment: this.paymentForShare,
                    paymentError: this.paymentError,
                    paymentErrorText: this.props.paymentErrorText
                }),
                page === _actions.PAGE_SHARE_BOOKING_CONFIRMATION && _react2.default.createElement(_ShareBookingConfirmation2.default, null),
                page === _actions.PAGE_ACCEPT_REFUSE_SHARE && _react2.default.createElement(_AcceptRefuseShareConfirmation2.default, { form: this.props.form }),
                page === _actions2.PAGE_SHARE_DETAILS_COLLECTION && _react2.default.createElement(_SharingDetailsCollection2.default, { previousPage: this.previousPage,
                    priceToJoin: this.getFormatedPrice(this.props.booking.route.centsToJoin),
                    dateText: this.props.booking.dateText,
                    values: this.props.values,
                    onSubmit: this.createShareRequest,
                    pickup: this.getPickup(this.props.booking.route),
                    shareAnnouncement: this.props.booking.orderType === 'SHARE_ANNOUNCEMENT'
                }),
                page === _actions2.PAGE_SHARE_REQUEST_CONFIRMATION && _react2.default.createElement(_ShareRequestConfirmation2.default, null),
                _react2.default.createElement(_TaxisurfrFooter2.default, null)
            );
        }
    }]);

    return ShareForm;
}(_react.Component);

ShareForm.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    dispatch: _react.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    var country = state.wizardReducer.country;

    var _ref = state.wizardReducer || null,
        route_link = _ref.route_link;

    var page = state.wizardReducer.page;
    var bookingId = state.wizardReducer.bookingId;
    var shareId = state.wizardReducer.shareId;

    var _ref2 = state.wizardReducer || null,
        sharingList = _ref2.sharingList;

    var route = state.wizardReducer.route;
    var booking = state.wizardReducer.booking;
    var dateText = state.wizardReducer.dateText;
    var isFetchingPayment = state.wizardReducer.isFetchingPayment;
    var form = state.wizardReducer.form;
    var stripeKey = state.wizardReducer.stripeKey;
    var noRouteMessage = state.wizardReducer.noRouteMessage;
    var shareAnnouncement = state.wizardReducer.shareAnnouncement;

    var paymentErrorText = state.wizardReducer.paymentErrorText ? state.wizardReducer.paymentErrorText : '';
    var values = state.form.wizard && state.form.wizard.values ? state.form.wizard.values : {
        pickup: 'test airport',
        dropoff: 'test arugam bay',
        amount: '66600',
        name: 'Peter Hall',
        flightNo: 'QR222',
        landingTime: '12:00',
        email: 'hall@hall-services',
        passengers: 2,
        surfboards: 1,
        requirements: 'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx ',
        CCname: 'Peter CC',
        paymentErrorText: paymentErrorText
    };
    var price = route ? '$US' + route.cents / 100 : null;
    var priceToJoin = route ? '$US' + route.centsToJoin / 100 : null;
    var description = values.pickup + ' to ' + values.dropoff;
    return {
        page: page,
        shareId: shareId,
        bookingId: bookingId,
        values: values,
        sharingList: sharingList,
        description: description,
        price: price,
        isFetchingPayment: isFetchingPayment,
        form: form,
        stripeKey: stripeKey,
        paymentErrorText: paymentErrorText,
        priceToJoin: priceToJoin,
        dateText: dateText,
        route: route,
        booking: booking,
        route_link: route_link,
        noRouteMessage: noRouteMessage,
        shareAnnouncement: shareAnnouncement
    };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShareForm);