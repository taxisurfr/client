import fetch from 'isomorphic-fetch'
import util from 'util';
import {getUrl} from '../util/network';
import {getMethod} from '../util/network';

export function getRoute(link,receiveRoute) {
    return dispatch => {
        fetch(getUrl('link/'+link), getMethod('GET'))
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveRoute(responseJson)))
            .catch((error) => {
                console.error(error);
            });
    }
}


