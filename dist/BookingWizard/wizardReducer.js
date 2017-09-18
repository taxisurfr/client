'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('./actions');

var routeMessage = 'Sorry about that. We do not have a quote for that route. Get in contact (Contact above right) and we will be happy to provide one.';
function wizardReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        page: 2, noRouteMessage: ''
        /*
            page: 4, noRouteMessage:'', route :{startroute:'xx', endroute:'yy', cents: 100}, booking: {dateText: 'ccc'}
        */
    };
    var action = arguments[1];

    switch (action.type) {

        case "@@redux-form/CHANGE":
            return Object.assign({}, state, {
                noRouteMessage: null
            });
        case _actions.HOME_PAGE:
            return Object.assign({}, state, {
                page: state.page = 1
            });
        case _actions.NEXT_PAGE:
            return Object.assign({}, state, {
                page: state.page + 1
            });
        case _actions.PREV_PAGE:
            return Object.assign({}, state, {
                page: state.page - 1
            });
        case _actions.SET_PAGE:
            return Object.assign({}, state, {
                page: action.page
            });
        case _actions.REQUEST_PAYMENT:
            return Object.assign({}, state, {
                isFetchingPayment: true
            });
        case _actions.RECEIVE_PAYMENT:
            return Object.assign({}, state, {
                isFetchingPayment: false,
                page: state.page + 1
            });
        case _actions.PAYMENT_ERROR:
            return Object.assign({}, state, {
                isFetchingPayment: false,
                paymentErrorText: action.error
            });
        case _actions.RECEIVE_BOOKING:
            return Object.assign({}, state, {
                booking: action.booking,
                page: action.booking.orderType === 'BOOKING' ? state.page + 1 : _actions.PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION

            });
        case _actions.RECEIVE_SESSION:
            return Object.assign({}, state, {
                shareAnnouncement: action.shareAnnouncement,
                page: state.page + 1

            });
        case _actions.REQUEST_SHARINGDATA:
            return Object.assign({}, state, {
                isFetching: true,
                tokenId: action.tokenId
            });
        case _actions.RECEIVE_SHARINGDATA:
            return Object.assign({}, state, {
                isFetchingSharingData: false,
                route: action.route,
                sharingList: action.sharingList,
                stripeKey: action.stripeKey,
                noRouteMessage: action.route === null && action.showNoRouteMessage ? routeMessage : null,
                page: action.route ? 2 : 1
            });
        /* case RECEIVE_FORMDATA:
             return Object.assign({}, state, {
                 form: action.form,
                 page: PAGE_BOOKING_FORM
             });*/
        case _actions.RECEIVE_SHARE_CMD:
            return Object.assign({}, state, {
                stripeKey: action.stripeKey,
                booking: action.booking,
                page: action.page
            });
        case _actions.REQUEST_SHARE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case _actions.RECEIVE_SHARE:
            return Object.assign({}, state, {
                isFetching: false,
                confirmed: action.confirmed,
                page: action.orderType === 3 ? _actions.PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION : _actions.PAGE_SHARE_REQUEST_CONFIRMATION
            });
        case _actions.REGISTER_SHAREID:
            var booking = state.sharingList.getObjectAt(action.shareIndex);
            var shareId = booking.bookingId;
            var dateText = booking.dateText;
            return Object.assign({}, state, {
                shareId: shareId,
                dateText: dateText,
                page: booking.orderType === 0 ? _actions.PAGE_SHARE_DETAILS_COLLECTION : _actions.PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION

            });
        default:
            return state;
    }
}
exports.default = wizardReducer;