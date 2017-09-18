'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('./actions');

function contactReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        page: _actions.PAGE_CONTACT
    };
    var action = arguments[1];

    switch (action.type) {
        case _actions.RECEIVE_CONTACT:
            return Object.assign({}, state, {
                page: _actions.PAGE_CONTACT_CONFIRMATION
            });
        case _actions.SHOW_VERIFIED:
            return Object.assign({}, state, {
                verified: action.verified
            });
        default:
            return state;
    }
}
exports.default = contactReducer;