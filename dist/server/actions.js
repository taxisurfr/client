'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRoute = getRoute;

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _network = require('../util/network');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRoute(link, receiveRoute) {
    return function (dispatch) {
        fetch((0, _network.getUrl)('link/' + link), (0, _network.getMethod)('GET')).then(function (response) {
            return response.json();
        }).then(function (responseJson) {
            return dispatch(receiveRoute(responseJson));
        }).catch(function (error) {
            console.error(error);
        });
    };
}