import fetch from 'isomorphic-fetch'
import util from 'util';
import {getUrl} from '../util/network';
import {getMethod} from '../util/network';
import TableStore from './../util/TableStore';
import Moment from 'moment';
export const RECEIVE_CONTACT = 'RECEIVE_CONTACT'
export const SHOW_VERIFIED = 'SHOW_VERIFIED'
export const PAGE_CONTACT = 40;
export const PAGE_CONTACT_CONFIRMATION = 41;


export function showVerified(verified) {
    console.log("showVerified:"+verified)
    return {
        type: SHOW_VERIFIED,
        verified: verified
    }
}

function receiveContact(json) {
    return {
        type: RECEIVE_CONTACT,
        result: json
    }
}


export function fetchContactOnServer(contact) {
    util.inspect(contact, { showHidden: true, depth: null });
    var body = JSON.stringify(
        contact
    );
    return dispatch => {

        fetch(getUrl('createcontact'), getMethod('POST',body))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveContact(responseJson)))
            .catch((error) => {
                console.error(error);
            });

    }
}

