import util from 'util';
import {getUrl} from '../util/network';
import {getMethod} from '../util/network';

export const NEXT_PAGE = 'NEXT_PAGE';
export const SET_PAGE = 'SET_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const REQUEST_SHARE = 'REQUEST_SHARE'
export const RECEIVE_SHARE = 'RECEIVE_SHARE'
export const REGISTER_SHAREID = 'REGISTER_SHAREID'
export const RECEIVE_SHARE_CMD = 'RECEIVE_SHARE_CMD'

export const PAGE_ACCEPT_REFUSE_SHARE = 130;
export const PAGE_SHARE_BOOKING = 131;
export const PAGE_ERROR = 132;
export const PAGE_VIEW_SHARE_BOOKING = 133;
export const PAGE_SHARE_PAYMENT = 134;
export const PAGE_SHARE_BOOKING_CONFIRMATION = 135;

import {
    PAGE_SHARE_DETAILS_COLLECTION
} from '../BookingWizard/actions'


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

export function setPageAction(p) {
    return {
        type: SET_PAGE,
        page: p
    }
}

function receiveShareCmd(cmd,json) {
    var page = null;
    switch (cmd){
        case 'request':
            return {
                type: RECEIVE_SHARE_CMD,
                booking: json.booking,
                stripeKey: json.stripeKey,
                page: json.booking !== null? PAGE_SHARE_DETAILS_COLLECTION : PAGE_ERROR
            }
        case 'agree':
        case 'refuse':
            return {
                type: RECEIVE_SHARE_CMD,
                booking: json.booking,
                paymentOK: json.booking !== null,
                page: json.booking !== null? PAGE_ACCEPT_REFUSE_SHARE : PAGE_ERROR
            }
        case 'book':
            page = PAGE_SHARE_BOOKING;
            return {
                type: RECEIVE_SHARE_CMD,
                stripeKey: json.stripeKey,
                booking: json.booking,
                page: json.booking !== null? PAGE_VIEW_SHARE_BOOKING : PAGE_ERROR
            }
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




export function doshare(cmd,id) {
    util.inspect(cmd, { showHidden: true, depth: null });
    util.inspect(id, { showHidden: true, depth: null });
    var body = JSON.stringify({
        cmd: cmd,
        id: id,
    });
    return dispatch => {
        fetch(getUrl('doshare'), getMethod('POST',body))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveShareCmd(cmd,responseJson)))
            .catch((error) => {
                // console.error(error);
            });

    }
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



