import fetch from 'isomorphic-fetch'
import util from 'util';
import {getMethod, getUrl} from '../util/network';
import TableStore from './../util/TableStore';
import Moment from 'moment';
import ReactPixel from 'react-facebook-pixel';

export const HOME_PAGE = 'HOME_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const SET_PAGE = 'SET_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const REQUEST_PAYMENT = 'REQUEST_PAYMENT';
export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const SET_PICKUP_DROPOFF = 'SET_PICKUP_DROPOFF';
export const REQUEST_SHARINGDATA = 'REQUEST_SHARINGDATA';
export const RECEIVE_SHARINGDATA = 'RECEIVE_SHARINGDATA';
export const RECEIVE_ROUTE_FROM_LINK = 'RECEIVE_ROUTE_FROM_LINK';
export const RECEIVE_FORMDATA = 'RECEIVE_FORMDATA';
export const REQUEST_SHARE = 'REQUEST_SHARE'
export const RECEIVE_SHARE = 'RECEIVE_SHARE'
export const REGISTER_SHAREID = 'REGISTER_SHAREID'
export const PAYMENT_ERROR = 'PAYMENT_ERROR'
export const RECEIVE_SHARE_CMD = 'RECEIVE_SHARE_CMD'
export const RECEIVE_DO_NOTHING = 'RECEIVE_DO_NOTHING'
export const SET_PICKUP = 'SET_PICKUP'
export const SET_DROPOFF = 'SET_DROPOFF'
export const SET_PRICE_FOR_BOOKING = 'SET_PRICE_FOR_BOOKING'


export const PAGE_CACHED = -1;
export const PAGE_TRANSPORT = 0;
export const PAGE_PAYMENT = 5;
export const PAGE_SHARE_DETAILS_COLLECTION = 30;
export const PAGE_SHARE_REQUEST_CONFIRMATION = 31;
export const PAGE_ERROR = 32;
export const PAGE_VIEW_SHARE_BOOKING = 33;
export const PAGE_SHARE_PAYMENT = 34;
export const PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION = 35;
export const PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION = 36;
export const PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION = 37;


export const PAGE_CONTACT = 40;

export function previousPageAction() {
    return {
        type: PREV_PAGE
    }
}


export function nextPageAction() {
    return {
        type: NEXT_PAGE
    }
}

export function homePageAction() {
    return {
        type: HOME_PAGE
    }
}

export function setPageAction(p) {
    return {
        type: SET_PAGE,
        page: p
    }
}

export function setPickupOrDropoff(pickupDropoff, value) {
    if ('PICKUP' === pickupDropoff) {
        return {
            type: SET_PICKUP,
            pickup: value
        }
    }
    if ('DROPOFF' === pickupDropoff) {
        return {
            type: SET_DROPOFF,
            dropoff: value
        }
    }
}

export function paymentAction(tokenId) {
    return {
        type: REQUEST_PAYMENT,
        tokenId: tokenId
    }
}

export function fetchSharingRequest(sharingRequest) {
    return (dispatch, getState) => {
        return dispatch(fetchSharingRequestOnServer(sharingRequest));
    }
}
function fetchSharingRequestOnServer(sharingRequest) {
    util.inspect(sharingRequest, {showHidden: true, depth: null});
    var body = JSON.stringify(
        sharingRequest
    );
    return dispatch => {
        fetch(getUrl('requestshare'), getMethod('POST', body))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveShare(responseJson)))
            .catch((error) => {
                console.error(error);
            });

    }
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
        }
    } else {
        return {
            type: PAYMENT_ERROR,
            error: json.error
        }
    }
}

export function paymentError(error) {
    return {
        type: PAYMENT_ERROR,
        error: error
    }
}
function receiveBooking(json) {
    return {
        type: RECEIVE_BOOKING,
        booking: json
    }
}
function receiveSession(json, shareAnnouncement) {
    return {
        type: RECEIVE_SESSION,
        shareAnnouncement: shareAnnouncement
    }
}

function receiveShare(json) {
    return {
        type: RECEIVE_SHARE,
        confirmed: json.confirmed,
        orderType: json.orderType
    }
}

export function findBookingForm(url, id) {
    util.inspect(url, {showHidden: true, depth: null});
    util.inspect(id, {showHidden: true, depth: null});
    var body = JSON.stringify({
        id: id,
    });
    return dispatch => {
        fetch(getUrl('formx'), getMethod('POST', body))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveFormData(responseJson)))
            .catch((error) => {
                // console.error(error);
            });

    }
}

export function findRoute(link,src) {
    util.inspect(link, {showHidden: true, depth: null});
    var body = JSON.stringify({
        link: link
    });
    return dispatch => {
        fetch(getUrl('routefromlink'), getMethod('POST', body))
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(receiveRouteFromLink(false, responseJson)),
                    getSessionOnServer(link, null, null, src)
            })
            .catch((error) => {
                // console.error(error);
            });

    }
}

function getPaymentOnServer(token, bookingId, share) {
    util.inspect(token, {showHidden: true, depth: null});
    var body = JSON.stringify({
        token: token,
        bookingId: bookingId,
        share: share
    });
    return dispatch => {
        dispatch(paymentAction());
        fetch(getUrl('payment'), getMethod('POST', body))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receivePayment(responseJson)))
            .catch((error) => {
                // console.error(error);
            });

    }
}

function fetchBookingOnServer(booking) {
    booking.dateText = Moment(booking.date).format('DD/MM/YYYY');
    util.inspect(booking, {showHidden: true, depth: null});
    var body = JSON.stringify(
        booking
    );
    return dispatch => {

        fetch(getUrl('newbooking'), getMethod('POST', body))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveBooking(responseJson)))
            .catch((error) => {
                console.error(error);
            });

    }
}
function fetchNewSessionOnServer(session, shareAnnouncement) {
    session.hostname = window.location.hostname;
    session.shareAnnouncement = shareAnnouncement;
    util.inspect(session, {showHidden: true, depth: null});
    var body = JSON.stringify(
        session
    );
    return dispatch => {

        fetch(getUrl('session'), getMethod('POST', body))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveSession(responseJson, shareAnnouncement)))
            .catch((error) => {
                console.error(error);
            });

    }
}

function shouldPayment(state) {
    const isFetching = state.paymentOK
    return !isFetching;
}

export function fetchPaymentIfNeeded(token, bookingId, share) {
    return (dispatch, getState) => {
        if (shouldPayment(getState())) {
            return dispatch(getPaymentOnServer(token, bookingId, share));
        }
    }
}

export function fetchBooking(booking) {
    return (dispatch, getState) => {
        return dispatch(fetchBookingOnServer(booking));
    }
}

export function fetchNewSession(session, shareAnnouncement) {
    return (dispatch, getState) => {
        return dispatch(fetchNewSessionOnServer(session, shareAnnouncement));
    }
}


function receiveFormData(json) {
    return {
        type: RECEIVE_FORMDATA,
        form: json.form
    }
}

function receiveSessionOnServer(json) {
    return {
        type: RECEIVE_DO_NOTHING,
    }
}

export function setPriceForBooking(price) {
    return {
        type: SET_PRICE_FOR_BOOKING,
        price:price
    }
}

//// share
function receiveSharingData(forward, json) {

    console.log('received sharing data for route')
    return {
        type: RECEIVE_SHARINGDATA,
        sharingList: json.sharingList ? new TableStore(json.sharingList): null,
        prices: json.prices,
        hotels: json.hotels,
        forward: forward,
        showNoRouteMessage: json.showNoRouteMessage,
        stripeKey: json.stripeKey
    }
}

function receiveRouteFromLink(forward, json) {

    return {
        type: RECEIVE_ROUTE_FROM_LINK,
        sharingList: json.sharingList ? new TableStore(json.sharingList): null,
        prices: json.prices,
        hotel: json.hotel,
        hotels: json.hotels,
        forward: forward,
        showNoRouteMessage: json.showNoRouteMessage,
        stripeKey: json.stripeKey
    }
}


function shouldFetchSharingData(state) {
    const isFetching = state.sharingList
    return !isFetching;
}

export function fetchSharingDataIfNeeded(pickup, dropoff, src) {
    return (dispatch, getState) => {
        if (shouldFetchSharingData(getState())) {
            return dispatch(getRouteAndSharingsOnServer(pickup, dropoff, src))
        }
    }
}

export function getRouteAndSharings(pickup, dropoff, src) {
    console.log("getRouteAndSharings: " + pickup + " " + dropoff);
    return (dispatch, getState) => {
        return dispatch(getRouteAndSharingsOnServer("pickup", "dropoff", src))
    }
}
function getRouteAndSharingsOnServer(pickup, dropoff, src) {
    util.inspect(pickup, {showHidden: true, depth: null});
    util.inspect(dropoff, {showHidden: true, depth: null});
    var body = JSON.stringify({
        pickup: pickup,
        dropoff: dropoff
    });
    return dispatch => {
        fetch(getUrl('routeandsharings'), getMethod('POST', body))
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(


                    receiveSharingData(true, responseJson)),
                    getSessionOnServer(null, pickup, dropoff, src)
            })
            .catch((error) => {
                console.error(error);
            });

    }

}

export function getSessionOnServer(link, pickup, dropoff, src) {
    var body = JSON.stringify({
        link: link,
        pickup: pickup,
        dropoff: dropoff,
        src: src
    });
        fetch(getUrl('sessiononserver'), getMethod('POST', body))
            .then((response) => response.json())
            .then((responseJson) => {
                ReactPixel.track('ViewContent',{country:responseJson.country});
            })
            .catch((error) => {
                console.error(error);
            });
}

export function getRoute(link, receiveRoute) {
    return dispatch => {
        fetch(getUrl('link/' + link), getMethod('GET'))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveRoute(responseJson)))
            .catch((error) => {
                console.error(error);
            });
    }
}


export const setPickupDropoff = (pickup, dropoff) => {
    return {
        type: SET_PICKUP_DROPOFF,
        pickup: pickup,
        dropoff: dropoff
    }
}

/*
 function registerShareId(shareIndex) {
 return {
 shareIndex: shareIndex,
 type: REGISTER_SHAREID,
 }
 }
 */

export function setShareId(shareIndex) {
    return (dispatch, getState) => {
        return dispatch(registerShareId(shareIndex))
    }
}

function registerShareId(shareIndex) {
    return {
        shareIndex: shareIndex,
        type: REGISTER_SHAREID,
    }
}


