import React, {Component, PropTypes} from 'react'
import SharingDetailsCollection from '../BookingWizard/SharingDetailsCollection'
import AcceptRefuseShareConfirmation from './AcceptRefuseShareConfirmation'
import ShareBookingConfirmation from './ShareBookingConfirmation'
import BookingPayment from '../BookingWizard/BookingPayment'
import ShareRequestConfirmation from '../BookingWizard/ShareRequestConfirmation'
import ViewShareBookingDetails from './ViewShareBookingDetails'
import {connect} from 'react-redux'
import TaxisurfrAppbar from '../Widget/TaxisurfrAppbar';
import TaxisurfrFooter from '../Widget/TaxisurfrFooter';

import {
    doshare,
    PAGE_SHARE_PAYMENT,
    PAGE_ACCEPT_REFUSE_SHARE,
    PAGE_VIEW_SHARE_BOOKING,
    PAGE_SHARE_BOOKING_CONFIRMATION

} from './actions'

import {
    setShareId,
    fetchSharingRequest,
    PAGE_SHARE_DETAILS_COLLECTION,
    PAGE_SHARE_REQUEST_CONFIRMATION
} from '../BookingWizard/actions'

import {
    setPageAction,
    fetchPaymentIfNeeded,
    paymentError,

} from '../BookingWizard/actions'

import
{
    getRouteDescription, getFormatedPrice, getPickup
}
    from '../util/formatter';

class ShareForm extends Component {
    constructor(props) {
        super(props);
        this.paymentForShare = this.paymentForShare.bind(this);
        this.gotoSharePayment = this.gotoSharePayment.bind(this);
        this.requestShare = this.requestShare.bind(this);
        this.createShareRequest = this.createShareRequest.bind(this);
        this.doshare = doshare.bind(this);
        this.getRouteDescription = getRouteDescription.bind(this);
        this.getFormatedPrice = getFormatedPrice.bind(this);
        this.getPickup = getPickup.bind(this);
        this.paymentError = paymentError.bind(this);
    }


    paymentForShare(token) {
        const {dispatch} = this.props;
        dispatch(fetchPaymentIfNeeded(token, this.props.booking.id, true));
    }

    requestShare(shareIndex) {
        const {dispatch} = this.props;
        console.log('requesting shareIndex' + shareIndex);
        dispatch(setShareId(shareIndex));
    }

    createShareRequest() {
        const {dispatch} = this.props;
        const {values} = this.props;
        const {booking} = this.props;

        const sharingRequest = {
            bookingId: booking.id,
            sharingName: values.sharingName,
            sharingEmail: values.sharingEmail,
            sharingFlightNo: values.sharingFlightNo,
            sharingLandingTime: values.sharingLandingTime,
            sharingPax: values.sharingPax || 1,
            sharingSurfboards: values.sharingSurfboards || 0,
            requirements: values.sharingMessage,
        }
        dispatch(fetchSharingRequest(sharingRequest));

    }

    gotoSharePayment() {
        const {dispatch} = this.props;
        dispatch(setPageAction(PAGE_SHARE_PAYMENT))
    }

    getHeadling(shareAnnouncement) {
        if (this.props.booking && this.props.booking.route) {
            const shareAnnouncement = this.props.booking.orderType === 'SHARE_ANNOUNCEMENT';
            const routedesc = 'taxi: ' +this.getRouteDescription(this.props.booking.route);
            const price = shareAnnouncement ? '' :this.getFormatedPrice(this.props.booking.route.cents);
            const priceToShare = this.getFormatedPrice(this.props.booking.route.centsToJoin);
            if (this.props.shareId) {
                return routedesc;
            } else {
                return routedesc + '    ' + price;
            }
        }
        return 'taxisurfr';
    }

    render() {

        const {match} = this.props;
        const {dispatch} = this.props;
        if (match && match.params) {
            if ('agree' === match.params.cmd || 'refuse' === match.params.cmd || 'book' === match.params.cmd|| 'request' === match.params.cmd) {
                const cmd = match.params.cmd;
                const id = match.params.id;
                this.props.match.params = null;
                dispatch(doshare(cmd, id));
                return null;
            }
        }
        const {page} = this.props;
        const {values} = this.props;
/*
        const headline = this.props.booking.route ? this.getRouteDescription(this.props.booking.route) + '    ' +this.getFormatedPrice(this.props.booking.route.centsToJoin): 'taxisurfr';
*/
        const headline = this.getHeadling(this.props.shareAnnouncement);

        return (<div>
                <TaxisurfrAppbar headline={headline} rupee="xxx"/>

                {page === PAGE_VIEW_SHARE_BOOKING &&
                <ViewShareBookingDetails
                    booking={this.props.booking}
                    previousPage={this.previousPage}
                    onSubmit={this.gotoSharePayment}
                    pickup={this.getPickup(this.props.booking.route)}
                />
                }
                {page === PAGE_SHARE_PAYMENT && <BookingPayment
                    stripeKey={this.props.stripeKey}
                    description={this.getRouteDescription(this.props.booking.route)}
                    price={this.getFormatedPrice(this.props.booking.route.centsToJoin)}
                    CCname={values.CCname}
                    previousPage={this.previousPage}
                    payment={this.paymentForShare}
                    paymentError={this.paymentError}
                    paymentErrorText={this.props.paymentErrorText}
                />}
                {page === PAGE_SHARE_BOOKING_CONFIRMATION &&
                <ShareBookingConfirmation/>}

                {page === PAGE_ACCEPT_REFUSE_SHARE &&
                <AcceptRefuseShareConfirmation form={this.props.form}/>}

                {page === PAGE_SHARE_DETAILS_COLLECTION &&
                <SharingDetailsCollection previousPage={this.previousPage}
                                          priceToJoin={this.getFormatedPrice(this.props.booking.route.centsToJoin)}
                                          dateText={this.props.booking.dateText}
                                          values={this.props.values}
                                          onSubmit={this.createShareRequest}
                                          pickup={this.getPickup(this.props.booking.route)}
                                          shareAnnouncement={this.props.booking.orderType === 'SHARE_ANNOUNCEMENT'}
                />}
                {page === PAGE_SHARE_REQUEST_CONFIRMATION &&
                <ShareRequestConfirmation />}
                <TaxisurfrFooter/>

            </div>
        )
    }
}


ShareForm
    .propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

function

mapStateToProps(state) {
    const {country} = state.wizardReducer;
    const {route_link} = state.wizardReducer || null;
    const {page} = state.wizardReducer;
    const {bookingId} = state.wizardReducer;
    const {shareId} = state.wizardReducer;
    const {sharingList} = state.wizardReducer || null;
    const {route} = state.wizardReducer;
    const {booking} = state.wizardReducer;
    const {dateText} = state.wizardReducer;
    const {isFetchingPayment} = state.wizardReducer;
    const {form} = state.wizardReducer;
    const {stripeKey} = state.wizardReducer;
    const {noRouteMessage} = state.wizardReducer;
    const {shareAnnouncement} = state.wizardReducer;
    const paymentErrorText = state.wizardReducer.paymentErrorText ? state.wizardReducer.paymentErrorText : '';
    const values = state.form.wizard && state.form.wizard.values ? state.form.wizard.values : {
        pickup: 'test airport',
        dropoff: 'test arugam bay',
        amount: '66600',
        name: 'Peter Hall',
        flightNo: 'QR222',
        landingTime: '12:00',
        email: 'hall@hall-services',
        passengers: 2,
        surfboards: 1,
        requirements: 'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx ',
        CCname: 'Peter CC',
        paymentErrorText: paymentErrorText
    };
    const price = route ? '$US' + route.cents / 100 : null;
    const priceToJoin = route ? '$US' + route.centsToJoin / 100 : null;
    const description = values.pickup + ' to ' + values.dropoff;
    return {
        page,
        shareId,
        bookingId,
        values,
        sharingList,
        description,
        price,
        isFetchingPayment,
        form,
        stripeKey,
        paymentErrorText,
        priceToJoin,
        dateText,
        route,
        booking,
        route_link,
        noRouteMessage,
        shareAnnouncement
    }
}


const
    mapDispatchToProps = (dispatch) => {
        return {
            dispatch: dispatch
        }
    };

export
default

connect(mapStateToProps, mapDispatchToProps)

(
    ShareForm
)
