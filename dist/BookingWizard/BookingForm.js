'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Transport = require('./Transport');

var _Transport2 = _interopRequireDefault(_Transport);

var _SharingList = require('./SharingList');

var _SharingList2 = _interopRequireDefault(_SharingList);

var _BookingDetailsCollection = require('./BookingDetailsCollection');

var _BookingDetailsCollection2 = _interopRequireDefault(_BookingDetailsCollection);

var _SharingDetailsCollection = require('./SharingDetailsCollection');

var _SharingDetailsCollection2 = _interopRequireDefault(_SharingDetailsCollection);

var _SharingAnnouncementDetailsCollection = require('./SharingAnnouncementDetailsCollection');

var _SharingAnnouncementDetailsCollection2 = _interopRequireDefault(_SharingAnnouncementDetailsCollection);

var _BookingDetailsShow = require('./BookingDetailsShow');

var _BookingDetailsShow2 = _interopRequireDefault(_BookingDetailsShow);

var _BookingPayment = require('./BookingPayment');

var _BookingPayment2 = _interopRequireDefault(_BookingPayment);

var _BookingConfirmation = require('./BookingConfirmation');

var _BookingConfirmation2 = _interopRequireDefault(_BookingConfirmation);

var _ShareRequestConfirmation = require('./ShareRequestConfirmation');

var _ShareRequestConfirmation2 = _interopRequireDefault(_ShareRequestConfirmation);

var _ShareAnnouncementRequestConfirmation = require('./ShareAnnouncementRequestConfirmation');

var _ShareAnnouncementRequestConfirmation2 = _interopRequireDefault(_ShareAnnouncementRequestConfirmation);

var _ShareAnnouncementConfirmation = require('./ShareAnnouncementConfirmation');

var _ShareAnnouncementConfirmation2 = _interopRequireDefault(_ShareAnnouncementConfirmation);

var _reactRedux = require('react-redux');

var _TaxisurfrAppbar = require('../Widget/TaxisurfrAppbar');

var _TaxisurfrAppbar2 = _interopRequireDefault(_TaxisurfrAppbar);

var _TaxisurfrFooter = require('../Widget/TaxisurfrFooter');

var _TaxisurfrFooter2 = _interopRequireDefault(_TaxisurfrFooter);

var _reactRouterDom = require('react-router-dom');

var _reactFacebookPixel = require('react-facebook-pixel');

var _reactFacebookPixel2 = _interopRequireDefault(_reactFacebookPixel);

var _actions = require('./actions');

var _formatter = require('../util/formatter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookingForm = function (_Component) {
    _inherits(BookingForm, _Component);

    function BookingForm(props) {
        _classCallCheck(this, BookingForm);

        var _this = _possibleConstructorReturn(this, (BookingForm.__proto__ || Object.getPrototypeOf(BookingForm)).call(this, props));

        _this.acceptDetails = _this.acceptDetails.bind(_this);
        _this.navigateHome = _this.navigateHome.bind(_this);
        _this.previousPage = _this.previousPage.bind(_this);
        _this.payment = _this.payment.bind(_this);
        _this.paymentForShare = _this.paymentForShare.bind(_this);
        _this.createBooking = _this.createBooking.bind(_this);
        _this.createNewSession = _this.createNewSession.bind(_this);
        _this.createNewSessionWithShareAnnouncement = _this.createNewSessionWithShareAnnouncement.bind(_this);
        _this.getSharingList = _this.getSharingList.bind(_this);
        _this.gotoPage = _this.gotoPage.bind(_this);
        _this.gotoPayment = _this.gotoPayment.bind(_this);
        _this.gotoSharePayment = _this.gotoSharePayment.bind(_this);
        _this.requestShare = _this.requestShare.bind(_this);
        _this.createShareRequest = _this.createShareRequest.bind(_this);
        _this.paymentError = _actions.paymentError.bind(_this);
        _this.findRoute = _actions.findRoute.bind(_this);
        _this.getRouteDescription = _formatter.getRouteDescription.bind(_this);
        _this.getRouteLongDescription = _formatter.getRouteLongDescription.bind(_this);
        _this.getFormatedPrice = _formatter.getFormatedPrice.bind(_this);
        _this.getFormatedEndPrice = _formatter.getFormatedEndPrice.bind(_this);
        _this.getFormatedRupeePrice = _formatter.getFormatedRupeePrice.bind(_this);
        _this.getPickup = _formatter.getPickup.bind(_this);
        _this.goSharingList = _this.goSharingList.bind(_this);
        _this.createSession = _this.createSession.bind(_this);
        return _this;
    }

    _createClass(BookingForm, [{
        key: 'acceptDetails',
        value: function acceptDetails() {
            _reactFacebookPixel2.default.track('AddToCart', { type: 'acceptDetails' });
            var dispatch = this.props.dispatch;

            dispatch((0, _actions.nextPageAction)());
        }
    }, {
        key: 'navigateHome',
        value: function navigateHome() {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions.homePageAction)());
        }
    }, {
        key: 'setPage',
        value: function setPage(page) {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions.setPageAction)(_actions.PAGE_PAYMENT));
        }
    }, {
        key: 'getSharingList',
        value: function getSharingList() {
            var dispatch = this.props.dispatch;
            var pickup = this.props.values.pickup;
            var dropoff = this.props.values.dropoff;

            if (dropoff.name) {
                dropoff = dropoff.name;
            }
            if (pickup.name) {
                pickup = pickup.name;
            }
            _reactFacebookPixel2.default.track('Search', { pickup: pickup, dropoff: dropoff });
            dispatch((0, _actions.fetchSharingDataIfNeeded)(pickup, dropoff));
        }
    }, {
        key: 'payment',
        value: function payment(token) {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions.fetchPaymentIfNeeded)(token, this.props.booking.id), false);
        }
    }, {
        key: 'paymentForShare',
        value: function paymentForShare(token) {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions.fetchPaymentIfNeeded)(token, this.props.booking.id, true));
        }
    }, {
        key: 'requestShare',
        value: function requestShare(shareIndex) {
            var dispatch = this.props.dispatch;

            console.log('requesting shareIndex' + shareIndex);
            dispatch((0, _actions.setShareId)(shareIndex));
        }
    }, {
        key: 'createNewSession',
        value: function createNewSession() {
            _reactFacebookPixel2.default.track('InitiateCheckout', 'xxx');
            this.createSession(false);
        }
    }, {
        key: 'createNewSessionWithShareAnnouncement',
        value: function createNewSessionWithShareAnnouncement() {
            this.createSession(true);
        }
    }, {
        key: 'createSession',
        value: function createSession(shareAnnouncement) {
            var dispatch = this.props.dispatch;
            var route = this.props.route;

            var session = {
                routeId: route.id
            };
            dispatch((0, _actions.fetchNewSession)(session, shareAnnouncement));
        }
    }, {
        key: 'createBooking',
        value: function createBooking() {
            var dispatch = this.props.dispatch;
            var route = this.props.route;
            var values = this.props.values;

            var booking = {
                routeId: route.id,
                name: values.name,
                date: values.date,
                email: values.email,
                dateText: values.dateText,
                flightNo: values.flightNo,
                landingTime: values.landingTime,
                pax: values.passengers || 1,
                surfboards: values.surfboards || 0,
                requirements: values.requirements,
                shareWanted: values.shareWanted,
                announceShare: this.props.shareAnnouncement
            };
            _reactFacebookPixel2.default.track('AddToCart', booking);
            dispatch((0, _actions.fetchBooking)(booking));
        }
    }, {
        key: 'createShareRequest',
        value: function createShareRequest() {
            var dispatch = this.props.dispatch;
            var values = this.props.values;
            var shareId = this.props.shareId;


            var sharingRequest = {
                bookingId: shareId,
                sharingName: values.sharingName,
                sharingEmail: values.sharingEmail,
                sharingFlightNo: values.sharingFlightNo,
                sharingLandingTime: values.sharingLandingTime,
                sharingPax: values.sharingPassengers || 1,
                sharingSurfboards: values.sharingSurfboards || 0,
                requirements: values.sharingMessage
            };
            dispatch((0, _actions.fetchSharingRequest)(sharingRequest));
        }
    }, {
        key: 'previousPage',
        value: function previousPage() {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions.previousPageAction)());
        }
    }, {
        key: 'gotoPayment',
        value: function gotoPayment() {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions.setPageAction)(_actions.PAGE_PAYMENT));
        }
    }, {
        key: 'gotoPage',
        value: function gotoPage(page) {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions.setPageAction)(page));
        }
    }, {
        key: 'gotoSharePayment',
        value: function gotoSharePayment() {
            var dispatch = this.props.dispatch;

            dispatch((0, _actions.setPageAction)(_actions.PAGE_SHARE_PAYMENT));
        }
    }, {
        key: 'goSharingList',
        value: function goSharingList() {
            this.gotoPage(2);
        }
    }, {
        key: 'gotoClient',
        value: function gotoClient(cents) {
            ;
        }
    }, {
        key: 'getHeadling',
        value: function getHeadling(shareAnnouncement) {
            if (this.props.route) {
                var routedesc = this.getRouteDescription(this.props.route);
                var price = shareAnnouncement ? '' : this.getFormatedPrice(this.props.route, this.props.route.cents);
                var priceToShare = this.getFormatedPrice(this.props.route, this.props.route.centsToJoin);
                if (this.props.shareId) {
                    return routedesc;
                } else {
                    return routedesc + '    ' + price;
                }
            }
            return 'Taxi transfers in Sri Lanka';
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("XXXXXXXXXXXXXX render");

            var base = 'https://app.taxisurfr.com/review/';
            var sectionStyle = {
                width: "100%",
                backgroundImage: "src( + { base + '0001.jpg' } + )"

            };

            var src = this.props.src;
            var match = this.props.match;
            var dispatch = this.props.dispatch;
            var page = this.props.page;

            var target = match && match.params && match.params[0] ? match.params[0] : null;

            console.log("XXXXXXXXXXXXXXtarget:" + target);
            if (target) {
                target = target.replace('/lka/', '');
                this.props.match.params[0] = null;
                dispatch((0, _actions.findRoute)(target, 'srcfixme'));
            }

            /* if (target && target != 'LOADED') {
                 const route_link = match.params.route_link;
                 this.props.match.params.route_link = 'LOADED';
                 this.props.match.path = null;
                 dispatch(findRoute(route_link, src));
                 return null;
             } else {
                 const link = this.props.route ? "/lka/" + this.props.route.link : null;
                 if (link && target != 'LOADED') {
                     return (
                         <div>
                             <Redirect to={link}/>
                         </div>
                     )
                 }
             }*/
            var values = this.props.values;

            var link = this.props.booking ? this.props.booking.route.link : '';
            var routeLink = 'https://app.taxisurfr.com/lka/' + link;
            var s1 = { verticalAlign: 'middle' };
            var s2 = { textAlign: 'right' };
            var style = {
                color: 'white',
                fontSize: 24
            };
            var headline = this.getHeadling(this.props.shareAnnouncement);
            var rupee = page === _actions.PAGE_SHARE_DETAILS_COLLECTION || page === _actions.PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION ? '' : this.getFormatedRupeePrice(this.props.route, this.props.shareAnnouncement);
            document.title = headline;

            var price = this.props.route ? this.getFormatedPrice(this.props.route, this.props.route.cents) : null;
            var priceSharing = this.props.route ? this.getFormatedPrice(this.props.route, this.props.route.centsToJoin) : null;

            return _react2.default.createElement(
                'div',
                { style: sectionStyle },
                _react2.default.createElement(_TaxisurfrAppbar2.default, {
                    navigateHome: this.navigateHome,
                    headline: headline,
                    rupee: rupee
                }),
                page === 1 && _react2.default.createElement(_Transport2.default, { onSubmit: this.getSharingList, noRouteMessage: this.props.noRouteMessage }),
                page === 2 && _react2.default.createElement(_SharingList2.default, {
                    onSelectShare: this.requestShare,
                    sharingList: this.props.sharingList,
                    previousPage: this.previousPage,
                    announceShare: this.createNewSessionWithShareAnnouncement,
                    route: this.props.route,
                    onSubmit: this.createNewSession,
                    routeShortDescription: this.getRouteDescription(this.props.route),
                    routeLongDescription: this.getRouteLongDescription(this.props.route),
                    price: price,
                    priceSharing: priceSharing
                }),
                page === 3 && _react2.default.createElement(_BookingDetailsCollection2.default, { previousPage: this.previousPage,
                    values: values,
                    onSubmit: this.createBooking,
                    pickup: this.getPickup(this.props.route),
                    pickupType: this.props.route.pickupType,
                    shareAnnouncement: this.props.shareAnnouncement

                }),
                page === 4 && _react2.default.createElement(_BookingDetailsShow2.default, {
                    pickup: this.getPickup(this.props.route),
                    price: this.getFormatedEndPrice(this.props.route, this.props.booking, this.props.route.cents),
                    booking: this.props.booking,
                    previousPage: this.previousPage,
                    onSubmit: this.acceptDetails }),
                page === _actions.PAGE_PAYMENT && _react2.default.createElement(_BookingPayment2.default, {
                    stripeKey: this.props.stripeKey,
                    description: this.getRouteDescription(this.props.route),
                    price: this.getFormatedEndPrice(this.props.route, this.props.booking, this.props.route.cents),
                    isFetchingPayment: this.props.isFetchingPayment,
                    booking: this.props.booking,
                    CCname: values.CCname,
                    previousPage: this.previousPage,
                    payment: this.payment,
                    paymentError: this.paymentError,
                    paymentErrorText: this.props.paymentErrorText
                }),
                page === _actions.PAGE_SHARE_DETAILS_COLLECTION && _react2.default.createElement(_SharingDetailsCollection2.default, { previousPage: this.goSharingList,
                    description: this.props.description,
                    priceToJoin: this.props.priceToJoin,
                    values: this.props.values,
                    onSubmit: this.createShareRequest,
                    value: this.startDate,
                    dateText: this.props.dateText,
                    pickup: this.getPickup(this.props.route)

                }),
                page === _actions.PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION && _react2.default.createElement(_SharingAnnouncementDetailsCollection2.default, { previousPage: this.goSharingList,
                    description: this.props.description,
                    priceToJoin: this.props.priceToJoin,
                    values: this.props.values,
                    onSubmit: this.createShareRequest,
                    value: this.startDate,
                    dateText: this.props.dateText,
                    pickup: this.getPickup(this.props.route)

                }),
                page === _actions.PAGE_SHARE_REQUEST_CONFIRMATION && _react2.default.createElement(_ShareRequestConfirmation2.default, { previousPage: this.previousPage }),
                page === _actions.PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION && _react2.default.createElement(_ShareAnnouncementRequestConfirmation2.default, null),
                page === _actions.PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION && _react2.default.createElement(_ShareAnnouncementConfirmation2.default, { routeLink: routeLink }),
                page === 6 && _react2.default.createElement(_BookingConfirmation2.default, { previousPage: this.previousPage,
                    routeLink: routeLink,
                    pickupType: this.props.route.pickupType
                }),
                _react2.default.createElement(_TaxisurfrFooter2.default, null)
            );
        }
    }]);

    return BookingForm;
}(_react.Component);

BookingForm.propTypes = {
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

    if (route && route.pickupType === 'SHUTTLE_AIRPORT') {
        values.landingTime = '10:00 am';
        values.flightNo = 'Airport meeting point';
    }
    if (route && route.pickupType === 'SHUTTLE_HOTEL') {
        values.landingTime = '23:00 pm';
    }
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookingForm);