'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUrl = getUrl;
exports.redirect = redirect;
exports.getMethod = getMethod;
function getUrl(type) {
    var url = 'http://server-taxisurfr1.b9ad.pro-us-east-1.openshiftapps.com/';

    if ("undefined" !== typeof window) {
        console.log(window.location.hostname);
        console.log(window.location.port);
        if (window.location.hostname === 'localhost') {
            url = 'http://localhost:8080/taxisurfr-1.0/';
            console.log('CAUTION: connecting with:' + url);
        }
    }

    url = url + 'rest/api/' + type;
    return url;
}

function redirect(link) {
    window.location = 'arugambay';
}

function getMethod(method, body) {
    return {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body

    };
}