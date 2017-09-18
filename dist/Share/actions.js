'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PAGE_SHARE_BOOKING_CONFIRMATION = exports.PAGE_SHARE_PAYMENT = exports.PAGE_VIEW_SHARE_BOOKING = exports.PAGE_ERROR = exports.PAGE_SHARE_BOOKING = exports.PAGE_ACCEPT_REFUSE_SHARE = exports.RECEIVE_SHARE_CMD = exports.REGISTER_SHAREID = exports.RECEIVE_SHARE = exports.REQUEST_SHARE = exports.PREV_PAGE = exports.SET_PAGE = exports.NEXT_PAGE = undefined;
exports.previousPageAction = previousPageAction;
exports.nextPageAction = nextPageAction;
exports.setPageAction = setPageAction;
exports.doshare = doshare;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _network = require('../util/network');

var _actions = require('../BookingWizard/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NEXT_PAGE = exports.NEXT_PAGE = 'NEXT_PAGE';
var SET_PAGE = exports.SET_PAGE = 'SET_PAGE';
var PREV_PAGE = exports.PREV_PAGE = 'PREV_PAGE';
var REQUEST_SHARE = exports.REQUEST_SHARE = 'REQUEST_SHARE';
var RECEIVE_SHARE = exports.RECEIVE_SHARE = 'RECEIVE_SHARE';
var REGISTER_SHAREID = exports.REGISTER_SHAREID = 'REGISTER_SHAREID';
var RECEIVE_SHARE_CMD = exports.RECEIVE_SHARE_CMD = 'RECEIVE_SHARE_CMD';

var PAGE_ACCEPT_REFUSE_SHARE = exports.PAGE_ACCEPT_REFUSE_SHARE = 130;
var PAGE_SHARE_BOOKING = exports.PAGE_SHARE_BOOKING = 131;
var PAGE_ERROR = exports.PAGE_ERROR = 132;
var PAGE_VIEW_SHARE_BOOKING = exports.PAGE_VIEW_SHARE_BOOKING = 133;
var PAGE_SHARE_PAYMENT = exports.PAGE_SHARE_PAYMENT = 134;
var PAGE_SHARE_BOOKING_CONFIRMATION = exports.PAGE_SHARE_BOOKING_CONFIRMATION = 135;

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

function setPageAction(p) {
    return {
        type: SET_PAGE,
        page: p
    };
}

function receiveShareCmd(cmd, json) {
    var page = null;
    switch (cmd) {
        case 'request':
            return {
                type: RECEIVE_SHARE_CMD,
                booking: json.booking,
                stripeKey: json.stripeKey,
                page: json.booking !== null ? _actions.PAGE_SHARE_DETAILS_COLLECTION : PAGE_ERROR
            };
        case 'agree':
        case 'refuse':
            return {
                type: RECEIVE_SHARE_CMD,
                booking: json.booking,
                paymentOK: json.booking !== null,
                page: json.booking !== null ? PAGE_ACCEPT_REFUSE_SHARE : PAGE_ERROR
            };
        case 'book':
            page = PAGE_SHARE_BOOKING;
            return {
                type: RECEIVE_SHARE_CMD,
                stripeKey: json.stripeKey,
                booking: json.booking,
                page: json.booking !== null ? PAGE_VIEW_SHARE_BOOKING : PAGE_ERROR
            };
    }
}

/*
function receiveShare(json) {
    return {
        type: RECEIVE_SHARE,
        confirmed: json.confirmed
    }
}
*/

function doshare(cmd, id) {
    _util2.default.inspect(cmd, { showHidden: true, depth: null });
    _util2.default.inspect(id, { showHidden: true, depth: null });
    var body = JSON.stringify({
        cmd: cmd,
        id: id
    });
    return function (dispatch) {
        (0, _isomorphicFetch2.default)((0, _network.getUrl)('doshare'), (0, _network.getMethod)('POST', body)).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            return dispatch(receiveShareCmd(cmd, responseJson));
        }).catch(function (error) {
            // console.error(error);
        });
    };
}

/*function fetchSharingRequestOnServer(sharingRequest) {
    util.inspect(sharingRequest, { showHidden: true, depth: null });
    var body = JSON.stringify(
        sharingRequest
    );
    return dispatch => {
        fetch(getUrl('requestshare'), getMethod('POST',body))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveShare(responseJson)))
            .catch((error) => {
                console.error(error);
            });

    }
}*/