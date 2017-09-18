import {
    HOME_PAGE,NEXT_PAGE,SET_PAGE,PREV_PAGE,REQUEST_PAYMENT,RECEIVE_PAYMENT,
    RECEIVE_BOOKING,RECEIVE_SESSION,
    REQUEST_SHARINGDATA,
    RECEIVE_SHARINGDATA,
    REQUEST_SHARE,RECEIVE_SHARE,REGISTER_SHAREID,PAYMENT_ERROR,RECEIVE_RESORT,RECEIVE_SHARE_CMD,
    RECEIVE_FORMDATA,
    PAGE_SHARE_DETAILS_COLLECTION,
    PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION,PAGE_SHARE_REQUEST_CONFIRMATION,PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION,
    PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION,
    PAGE_CONTACT
} from './actions'

const routeMessage = 'Sorry about that. We do not have a quote for that route. Get in contact (Contact above right) and we will be happy to provide one.'
function wizardReducer(state = {
    page: 2, noRouteMessage:'',
/*
    page: 4, noRouteMessage:'', route :{startroute:'xx', endroute:'yy', cents: 100}, booking: {dateText: 'ccc'}
*/
}, action) {
    switch (action.type) {

        case "@@redux-form/CHANGE":
            return Object.assign({}, state, {
                noRouteMessage: null
            });
        case HOME_PAGE:
            return Object.assign({}, state, {
                page: state.page=1
            });
        case NEXT_PAGE:
            return Object.assign({}, state, {
                page: state.page+1
            });
        case PREV_PAGE:
            return Object.assign({}, state, {
                page: state.page-1
            });
        case SET_PAGE:
            return Object.assign({}, state, {
                page: action.page
            });
        case REQUEST_PAYMENT:
            return Object.assign({}, state, {
                isFetchingPayment: true
            });
        case RECEIVE_PAYMENT:
            return Object.assign({}, state, {
                isFetchingPayment: false,
                page: state.page+1
            });
        case PAYMENT_ERROR:
            return Object.assign({}, state, {
                isFetchingPayment: false,
                paymentErrorText: action.error,
            });
        case RECEIVE_BOOKING:
            return Object.assign({}, state, {
                booking: action.booking,
                page: action.booking.orderType === 'BOOKING' ? state.page+1 : PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION

            });
        case RECEIVE_SESSION:
            return Object.assign({}, state, {
                shareAnnouncement: action.shareAnnouncement,
                page: state.page+1

            });
        case REQUEST_SHARINGDATA:
            return Object.assign({}, state, {
                isFetching: true,
                tokenId: action.tokenId
            });
        case RECEIVE_SHARINGDATA:
            return Object.assign({}, state, {
                isFetchingSharingData: false,
                route: action.route,
                sharingList: action.sharingList,
                stripeKey: action.stripeKey,
                noRouteMessage: action.route ===null && action.showNoRouteMessage? routeMessage : null,
                page: action.route ? 2 : 1
            });
       /* case RECEIVE_FORMDATA:
            return Object.assign({}, state, {
                form: action.form,
                page: PAGE_BOOKING_FORM
            });*/
        case RECEIVE_SHARE_CMD:
            return Object.assign({}, state, {
                stripeKey: action.stripeKey,
                booking: action.booking,
                page: action.page
            });
        case REQUEST_SHARE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_SHARE:
            return Object.assign({}, state, {
                isFetching: false,
                confirmed: action.confirmed,
                page: action.orderType ===3 ? PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION : PAGE_SHARE_REQUEST_CONFIRMATION
            });
        case REGISTER_SHAREID:
            var booking= state.sharingList.getObjectAt(action.shareIndex);
            var shareId= booking.bookingId;
            var dateText= booking.dateText;
            return Object.assign({}, state, {
                shareId: shareId,
                dateText: dateText,
                page: booking.orderType===0?PAGE_SHARE_DETAILS_COLLECTION :PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION

            });
        default:
            return state
    }
}
export default wizardReducer

