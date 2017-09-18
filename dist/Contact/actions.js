'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PAGE_CONTACT_CONFIRMATION = exports.PAGE_CONTACT = exports.SHOW_VERIFIED = exports.RECEIVE_CONTACT = undefined;
exports.showVerified = showVerified;
exports.fetchContactOnServer = fetchContactOnServer;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _network = require('../util/network');

var _TableStore = require('./../util/TableStore');

var _TableStore2 = _interopRequireDefault(_TableStore);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RECEIVE_CONTACT = exports.RECEIVE_CONTACT = 'RECEIVE_CONTACT';
var SHOW_VERIFIED = exports.SHOW_VERIFIED = 'SHOW_VERIFIED';
var PAGE_CONTACT = exports.PAGE_CONTACT = 40;
var PAGE_CONTACT_CONFIRMATION = exports.PAGE_CONTACT_CONFIRMATION = 41;

function showVerified(verified) {
    console.log("showVerified:" + verified);
    return {
        type: SHOW_VERIFIED,
        verified: verified
    };
}

function receiveContact(json) {
    return {
        type: RECEIVE_CONTACT,
        result: json
    };
}

function fetchContactOnServer(contact) {
    _util2.default.inspect(contact, { showHidden: true, depth: null });
    var body = JSON.stringify(contact);
    return function (dispatch) {

        (0, _isomorphicFetch2.default)((0, _network.getUrl)('contact'), (0, _network.getMethod)('POST', body)).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            return dispatch(receiveContact(responseJson));
        }).catch(function (error) {
            console.error(error);
        });
    };
}