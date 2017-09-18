import {
    PAGE_CONTACT,
    PAGE_CONTACT_CONFIRMATION,
    RECEIVE_CONTACT, SHOW_VERIFIED
} from './actions'

function contactReducer(state = {
    page: PAGE_CONTACT,
}, action) {
    switch (action.type) {
        case RECEIVE_CONTACT:
            return Object.assign({}, state, {
                page: PAGE_CONTACT_CONFIRMATION
            });
        case SHOW_VERIFIED:
            return Object.assign({}, state, {
                verified: action.verified
            });
        default:
            return state
    }
}
export default contactReducer

