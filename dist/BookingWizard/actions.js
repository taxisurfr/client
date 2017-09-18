'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setPickupDropoff = exports.PAGE_CONTACT = exports.PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION = exports.PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION = exports.PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION = exports.PAGE_SHARE_PAYMENT = exports.PAGE_VIEW_SHARE_BOOKING = exports.PAGE_ERROR = exports.PAGE_SHARE_REQUEST_CONFIRMATION = exports.PAGE_SHARE_DETAILS_COLLECTION = exports.PAGE_PAYMENT = exports.PAGE_TRANSPORT = exports.PAGE_CACHED = exports.RECEIVE_DO_NOTHING = exports.RECEIVE_SHARE_CMD = exports.PAYMENT_ERROR = exports.REGISTER_SHAREID = exports.RECEIVE_SHARE = exports.REQUEST_SHARE = exports.RECEIVE_FORMDATA = exports.RECEIVE_SHARINGDATA = exports.REQUEST_SHARINGDATA = exports.SET_PICKUP_DROPOFF = exports.RECEIVE_SESSION = exports.RECEIVE_BOOKING = exports.RECEIVE_PAYMENT = exports.REQUEST_PAYMENT = exports.PREV_PAGE = exports.SET_PAGE = exports.NEXT_PAGE = exports.HOME_PAGE = undefined;
exports.previousPageAction = previousPageAction;
exports.nextPageAction = nextPageAction;
exports.homePageAction = homePageAction;
exports.setPageAction = setPageAction;
exports.paymentAction = paymentAction;
exports.fetchSharingRequest = fetchSharingRequest;
exports.paymentError = paymentError;
exports.findBookingForm = findBookingForm;
exports.findRoute = findRoute;
exports.fetchPaymentIfNeeded = fetchPaymentIfNeeded;
exports.fetchBooking = fetchBooking;
exports.fetchNewSession = fetchNewSession;
exports.fetchSharingDataIfNeeded = fetchSharingDataIfNeeded;
exports.getRouteAndSharings = getRouteAndSharings;
exports.getSessionOnServer = getSessionOnServer;
exports.getRoute = getRoute;
exports.setShareId = setShareId;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _network = require('../util/network');

var _TableStore = require('./../util/TableStore');

var _TableStore2 = _interopRequireDefault(_TableStore);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactFacebookPixel = require('react-facebook-pixel');

var _reactFacebookPixel2 = _interopRequireDefault(_reactFacebookPixel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HOME_PAGE = exports.HOME_PAGE = 'HOME_PAGE';
var NEXT_PAGE = exports.NEXT_PAGE = 'NEXT_PAGE';
var SET_PAGE = exports.SET_PAGE = 'SET_PAGE';
var PREV_PAGE = exports.PREV_PAGE = 'PREV_PAGE';
var REQUEST_PAYMENT = exports.REQUEST_PAYMENT = 'REQUEST_PAYMENT';
var RECEIVE_PAYMENT = exports.RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';
var RECEIVE_BOOKING = exports.RECEIVE_BOOKING = 'RECEIVE_BOOKING';
var RECEIVE_SESSION = exports.RECEIVE_SESSION = 'RECEIVE_SESSION';
var SET_PICKUP_DROPOFF = exports.SET_PICKUP_DROPOFF = 'SET_PICKUP_DROPOFF';
var REQUEST_SHARINGDATA = exports.REQUEST_SHARINGDATA = 'REQUEST_SHARINGDATA';
var RECEIVE_SHARINGDATA = exports.RECEIVE_SHARINGDATA = 'RECEIVE_SHARINGDATA';
var RECEIVE_FORMDATA = exports.RECEIVE_FORMDATA = 'RECEIVE_FORMDATA';
var REQUEST_SHARE = exports.REQUEST_SHARE = 'REQUEST_SHARE';
var RECEIVE_SHARE = exports.RECEIVE_SHARE = 'RECEIVE_SHARE';
var REGISTER_SHAREID = exports.REGISTER_SHAREID = 'REGISTER_SHAREID';
var PAYMENT_ERROR = exports.PAYMENT_ERROR = 'PAYMENT_ERROR';
var RECEIVE_SHARE_CMD = exports.RECEIVE_SHARE_CMD = 'RECEIVE_SHARE_CMD';
var RECEIVE_DO_NOTHING = exports.RECEIVE_DO_NOTHING = 'RECEIVE_DO_NOTHING';

var PAGE_CACHED = exports.PAGE_CACHED = -1;
var PAGE_TRANSPORT = exports.PAGE_TRANSPORT = 0;
var PAGE_PAYMENT = exports.PAGE_PAYMENT = 5;
var PAGE_SHARE_DETAILS_COLLECTION = exports.PAGE_SHARE_DETAILS_COLLECTION = 30;
var PAGE_SHARE_REQUEST_CONFIRMATION = exports.PAGE_SHARE_REQUEST_CONFIRMATION = 31;
var PAGE_ERROR = exports.PAGE_ERROR = 32;
var PAGE_VIEW_SHARE_BOOKING = exports.PAGE_VIEW_SHARE_BOOKING = 33;
var PAGE_SHARE_PAYMENT = exports.PAGE_SHARE_PAYMENT = 34;
var PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION = exports.PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION = 35;
var PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION = exports.PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION = 36;
var PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION = exports.PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION = 37;

var PAGE_CONTACT = exports.PAGE_CONTACT = 40;

function previousPageAction() {
    return {
        type: PREV_PAGE
    };
}

function nextPageAction() {
    return {
        type: NEXT_PAGE
    };
}

function homePageAction() {
    return {
        type: HOME_PAGE
    };
}

function setPageAction(p) {
    return {
        type: SET_PAGE,
        page: p
    };
}

function paymentAction(tokenId) {
    return {
        type: REQUEST_PAYMENT,
        tokenId: tokenId
    };
}

function fetchSharingRequest(sharingRequest) {
    return function (dispatch, getState) {
        return dispatch(fetchSharingRequestOnServer(sharingRequest));
    };
}
function fetchSharingRequestOnServer(sharingRequest) {
    _util2.default.inspect(sharingRequest, { showHidden: true, depth: null });
    var body = JSON.stringify(sharingRequest);
    return function (dispatch) {
        (0, _isomorphicFetch2.default)((0, _network.getUrl)('requestshare'), (0, _network.getMethod)('POST', body)).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            return dispatch(receiveShare(responseJson));
        }).catch(function (error) {
            console.error(error);
        });
    };
}

/*function receiveShareCmd(cmd,json) {
 var page = null;
 switch (cmd){
 case 'agreeshare':
 case 'refuseshare':
 return {
 type: RECEIVE_SHARE_CMD,
 paymentOK: json.booking !== null,
 page: json.booking !== null? PAGE_ACCEPT_REFUSE_SHARE : PAGE_ERROR
 }
 case 'bookshare':
 page = PAGE_SHARE_BOOKING;
 return {
 type: RECEIVE_SHARE_CMD,
 booking: json.booking,
 page: json.booking !== null? PAGE_VIEW_SHARE_BOOKING : PAGE_ERROR
 }
 }

 }*/

function receivePayment(json) {
    if (json.ok) {
        return {
            type: RECEIVE_PAYMENT,
            paymentOK: json.ok
        };
    } else {
        return {
            type: PAYMENT_ERROR,
            error: json.error
        };
    }
}

function paymentError(error) {
    return {
        type: PAYMENT_ERROR,
        error: error
    };
}
function receiveBooking(json) {
    return {
        type: RECEIVE_BOOKING,
        booking: json
    };
}
function receiveSession(json, shareAnnouncement) {
    return {
        type: RECEIVE_SESSION,
        shareAnnouncement: shareAnnouncement
    };
}

function receiveShare(json) {
    return {
        type: RECEIVE_SHARE,
        confirmed: json.confirmed,
        orderType: json.orderType
    };
}

function findBookingForm(url, id) {
    _util2.default.inspect(url, { showHidden: true, depth: null });
    _util2.default.inspect(id, { showHidden: true, depth: null });
    var body = JSON.stringify({
        id: id
    });
    return function (dispatch) {
        (0, _isomorphicFetch2.default)((0, _network.getUrl)('formx'), (0, _network.getMethod)('POST', body)).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            return dispatch(receiveFormData(responseJson));
        }).catch(function (error) {
            // console.error(error);
        });
    };
}

function findRoute(link, src) {
    _util2.default.inspect(link, { showHidden: true, depth: null });
    var body = JSON.stringify({
        link: link
    });
    return function (dispatch) {
        (0, _isomorphicFetch2.default)((0, _network.getUrl)('routefromlink'), (0, _network.getMethod)('POST', body)).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            dispatch(receiveSharingData(false, responseJson)), getSessionOnServer(link, null, null, src);
        }).catch(function (error) {
            // console.error(error);
        });
    };
}

function getPaymentOnServer(token, bookingId, share) {
    _util2.default.inspect(token, { showHidden: true, depth: null });
    var body = JSON.stringify({
        token: token,
        bookingId: bookingId,
        share: share
    });
    return function (dispatch) {
        dispatch(paymentAction());
        (0, _isomorphicFetch2.default)((0, _network.getUrl)('payment'), (0, _network.getMethod)('POST', body)).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            return dispatch(receivePayment(responseJson));
        }).catch(function (error) {
            // console.error(error);
        });
    };
}

function fetchBookingOnServer(booking) {
    booking.dateText = (0, _moment2.default)(booking.date).format('DD/MM/YYYY');
    _util2.default.inspect(booking, { showHidden: true, depth: null });
    var body = JSON.stringify(booking);
    return function (dispatch) {

        (0, _isomorphicFetch2.default)((0, _network.getUrl)('newbooking'), (0, _network.getMethod)('POST', body)).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            return dispatch(receiveBooking(responseJson));
        }).catch(function (error) {
            console.error(error);
        });
    };
}
function fetchNewSessionOnServer(session, shareAnnouncement) {
    session.hostname = window.location.hostname;
    session.shareAnnouncement = shareAnnouncement;
    _util2.default.inspect(session, { showHidden: true, depth: null });
    var body = JSON.stringify(session);
    return function (dispatch) {

        (0, _isomorphicFetch2.default)((0, _network.getUrl)('session'), (0, _network.getMethod)('POST', body)).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            return dispatch(receiveSession(responseJson, shareAnnouncement));
        }).catch(function (error) {
            console.error(error);
        });
    };
}

function shouldPayment(state) {
    var isFetching = state.paymentOK;
    return !isFetching;
}

function fetchPaymentIfNeeded(token, bookingId, share) {
    return function (dispatch, getState) {
        if (shouldPayment(getState())) {
            return dispatch(getPaymentOnServer(token, bookingId, share));
        }
    };
}

function fetchBooking(booking) {
    return function (dispatch, getState) {
        return dispatch(fetchBookingOnServer(booking));
    };
}

function fetchNewSession(session, shareAnnouncement) {
    return function (dispatch, getState) {
        return dispatch(fetchNewSessionOnServer(session, shareAnnouncement));
    };
}

function receiveFormData(json) {
    return {
        type: RECEIVE_FORMDATA,
        form: json.form
    };
}

function receiveSessionOnServer(json) {
    return {
        type: RECEIVE_DO_NOTHING
    };
}

//// share
function receiveSharingData(forward, json) {

    console.log('received sharing data for route');
    return {
        type: RECEIVE_SHARINGDATA,
        sharingList: new _TableStore2.default(json.sharingList),
        route: json.route,
        forward: forward,
        showNoRouteMessage: json.showNoRouteMessage,
        stripeKey: json.stripeKey
    };
}

function shouldFetchSharingData(state) {
    var isFetching = state.sharingList;
    return !isFetching;
}

function fetchSharingDataIfNeeded(pickup, dropoff, src) {
    return function (dispatch, getState) {
        if (shouldFetchSharingData(getState())) {
            return dispatch(getRouteAndSharingsOnServer(pickup, dropoff, src));
        }
    };
}

function getRouteAndSharings(pickup, dropoff, src) {
    console.log("getRouteAndSharings: " + pickup + " " + dropoff);
    return function (dispatch, getState) {
        return dispatch(getRouteAndSharingsOnServer("pickup", "dropoff", src));
    };
}
function getRouteAndSharingsOnServer(pickup, dropoff, src) {
    _util2.default.inspect(pickup, { showHidden: true, depth: null });
    _util2.default.inspect(dropoff, { showHidden: true, depth: null });
    var body = JSON.stringify({
        pickup: pickup,
        dropoff: dropoff
    });
    return function (dispatch) {
        (0, _isomorphicFetch2.default)((0, _network.getUrl)('routeandsharings'), (0, _network.getMethod)('POST', body)).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            dispatch(receiveSharingData(true, responseJson)), getSessionOnServer(null, pickup, dropoff, src);
        }).catch(function (error) {
            console.error(error);
        });
    };
}

function getSessionOnServer(link, pickup, dropoff, src) {
    var body = JSON.stringify({
        link: link,
        pickup: pickup,
        dropoff: dropoff,
        src: src
    });
    (0, _isomorphicFetch2.default)((0, _network.getUrl)('sessiononserver'), (0, _network.getMethod)('POST', body)).then(function (response) {
        return response.json();
    }).then(function (responseJson) {
        _reactFacebookPixel2.default.track('ViewContent', { country: responseJson.country });
    }).catch(function (error) {
        console.error(error);
    });
}

function getRoute(link, receiveRoute) {
    return function (dispatch) {
        (0, _isomorphicFetch2.default)((0, _network.getUrl)('link/' + link), (0, _network.getMethod)('GET')).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            return dispatch(receiveRoute(responseJson));
        }).catch(function (error) {
            console.error(error);
        });
    };
}

var setPickupDropoff = exports.setPickupDropoff = function setPickupDropoff(pickup, dropoff) {
    return {
        type: SET_PICKUP_DROPOFF,
        pickup: pickup,
        dropoff: dropoff
    };
};

/*
 function registerShareId(shareIndex) {
 return {
 shareIndex: shareIndex,
 type: REGISTER_SHAREID,
 }
 }
 */

function setShareId(shareIndex) {
    return function (dispatch, getState) {
        return dispatch(registerShareId(shareIndex));
    };
}

function registerShareId(shareIndex) {
    return {
        shareIndex: shareIndex,
        type: REGISTER_SHAREID
    };
}