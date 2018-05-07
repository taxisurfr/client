import React, {Component, PropTypes} from 'react'
import Transport from './Transport'
import SharingList from './SharingList'
import BookingDetailsCollection from './BookingDetailsCollection'
import SharingDetailsCollection from './SharingDetailsCollection'
import SharingAnnouncementDetailsCollection from './SharingAnnouncementDetailsCollection'
import BookingDetailsShow from './BookingDetailsShow'
import BookingPayment from './BookingPayment'
import BookingConfirmation from './BookingConfirmation'
import ShareRequestConfirmation from './ShareRequestConfirmation'
import ShareAnnouncementRequestConfirmation from './ShareAnnouncementRequestConfirmation'
import ShareAnnouncementConfirmation from './ShareAnnouncementConfirmation'
import {connect} from 'react-redux'
import TaxisurfrAppbar from '../Widget/TaxisurfrAppbar';
import TaxisurfrFooter from '../Widget/TaxisurfrFooter';
import {Redirect} from 'react-router-dom'
import ReactPixel from 'react-facebook-pixel';

import {
    setPriceForBooking,
    setPickupOrDropoff,
    nextPageAction,
    homePageAction,
    setPageAction,
    previousPageAction,
    fetchPaymentIfNeeded,
    fetchBooking,
    fetchNewSession,
    fetchSharingDataIfNeeded,
    setShareId,
    fetchSharingRequest,
    paymentError,
    findRoute,
    PAGE_SHARE_DETAILS_COLLECTION,
    PAGE_SHARE_REQUEST_CONFIRMATION,
    PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION,
    PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION,
    PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION,
    PAGE_PAYMENT,
    PAGE_SHARE_PAYMENT
} from './actions'

import
{
    getPickup,
}
    from '../util/formatter';

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.acceptDetails = this.acceptDetails.bind(this);
        this.navigateHome = this.navigateHome.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.payment = this.payment.bind(this);
        this.paymentForShare = this.paymentForShare.bind(this);
        this.createBooking = this.createBooking.bind(this);
        this.createNewSession = this.createNewSession.bind(this);
        this.createNewSessionWithShareAnnouncement = this.createNewSessionWithShareAnnouncement.bind(this);
        this.getSharingList = this.getSharingList.bind(this);
        this.gotoPage = this.gotoPage.bind(this);
        this.gotoPayment = this.gotoPayment.bind(this);
        this.gotoSharePayment = this.gotoSharePayment.bind(this);
        this.requestShare = this.requestShare.bind(this);
        this.createShareRequest = this.createShareRequest.bind(this);
        this.paymentError = paymentError.bind(this);
        this.findRoute = findRoute.bind(this);
        this.getPickup = getPickup.bind(this);
        this.goSharingList = this.goSharingList.bind(this);
        this.createSession = this.createSession.bind(this);
        this.onPickupDropoffUpdate = this.onPickupDropoffUpdate.bind(this);
        this.selectPrice = this.selectPrice.bind(this);
    }

    selectPrice(price) {
        const {dispatch} = this.props;
        dispatch(setPriceForBooking(price));
    }

    acceptDetails() {
        ReactPixel.track('AddToCart', {type: 'acceptDetails'});
        const {dispatch} = this.props;
        dispatch(nextPageAction());
    }

    navigateHome() {
        const {dispatch} = this.props;
        dispatch(homePageAction());
    }

    setPage(page) {
        const {dispatch} = this.props;
        dispatch(setPageAction(PAGE_PAYMENT));
    }

    onPickupDropoffUpdate(pickupDropoff,value){
        const {dispatch} = this.props;
        dispatch(setPickupOrDropoff(pickupDropoff,value));
    }
    getSharingList() {


        const {dispatch} = this.props;
        var {pickup} = this.props;
        var {dropoff} = this.props;
        ReactPixel.track('Search', {pickup, dropoff});
        dispatch(fetchSharingDataIfNeeded(pickup, dropoff));
    }

    payment(token) {
        const {dispatch} = this.props;
        dispatch(fetchPaymentIfNeeded(token, this.props.booking.id), false);
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

    createNewSession() {
        ReactPixel.track('InitiateCheckout', 'xxx');
        this.createSession(false);
    }

    createNewSessionWithShareAnnouncement() {
        this.createSession(true);
    }

    createSession(shareAnnouncement) {
        const {dispatch} = this.props;
        const {prices} = this.props;
        const session = {
            /*
                        fixme
            */
        };
        dispatch(fetchNewSession(session, shareAnnouncement));
    }


    createBooking() {
        const {dispatch} = this.props;
        const {price} = this.props;
        const {values} = this.props;
        const booking = {
            price: price,
            name: values.name,
            date: values.date,
            email: values.email,
            dateText: values.dateText,
            flightNo: values.flightNo,
            landingTime: values.landingTime,
            pax: values.passengers || 1,
            surfboards: values.surfboards || 0,
            requirements: values.requirements,
            shareWanted: values.shareWanted,
            announceShare: this.props.shareAnnouncement
        };
        ReactPixel.track('AddToCart', booking);
        dispatch(fetchBooking(booking));

    }

    createShareRequest() {
        const {dispatch} = this.props;
        const {values} = this.props;
        const {shareId} = this.props;

        const sharingRequest = {
            bookingId: shareId,
            sharingName: values.sharingName,
            sharingEmail: values.sharingEmail,
            sharingFlightNo: values.sharingFlightNo,
            sharingLandingTime: values.sharingLandingTime,
            sharingPax: values.sharingPassengers || 1,
            sharingSurfboards: values.sharingSurfboards || 0,
            requirements: values.sharingMessage,
        }
        dispatch(fetchSharingRequest(sharingRequest));

    }

    previousPage() {
        const {dispatch} = this.props;
        dispatch(previousPageAction())
    }

    gotoPayment() {
        const {dispatch} = this.props;
        dispatch(setPageAction(PAGE_PAYMENT))
    }

    gotoPage(page) {
        const {dispatch} = this.props;
        dispatch(setPageAction(page))
    }

    gotoSharePayment() {
        const {dispatch} = this.props;
        dispatch(setPageAction(PAGE_SHARE_PAYMENT))
    }

    goSharingList() {
        this.gotoPage(2);
    }


    gotoClient(cents) {
        ;
    }


    getHeadling(shareAnnouncement) {
       /* if (this.props.prices) {
            const routedesc = this.getRouteDescription(this.props.price);
            const price = shareAnnouncement ? '' : this.getFormatedPrice(this.props.price);
            if (this.props.shareId) {
                return routedesc;
            } else {
                return routedesc + '    ' + price;
            }
        }*/
        return 'taxi transfers in Sri Lanka';
    }

    render() {

        const base = 'https://app.taxisurfr.com/review/';
        const sectionStyle = {
            width: "100%",
            backgroundImage: "src( + { base + '0001.jpg' } + )"

        };

        const {src} = this.props;
        const {match} = this.props;
        const {dispatch} = this.props;
        const {page} = this.props;
        var target = (match && match.params && match.params[0]) ? match.params[0] : null;

        if (target) {
            target = target.replace('/lka/','');
            this.props.match.params[0] = null;
            dispatch(findRoute(target, 'srcfixme'));
        }

        const {values} = this.props;
        const link = this.props.booking ? this.props.booking.price.link : '';
        const routeLink = 'https://app.taxisurfr.com' + link;
        const s1 = {verticalAlign: 'middle'};
        const s2 = {textAlign: 'right'};
        var style = {
            color: 'white',
            fontSize: 24
        }
        const headline = this.getHeadling(this.props.shareAnnouncement);

        document.title = headline;

            var price = this.props.price ? this.props.price : (this.props.prices ? this.props.prices[0] : null);
        return (


            <div style={sectionStyle}>
                <TaxisurfrAppbar
                    price={price}
                    navigateHome={this.navigateHome}
                />
                {page === 1 && <Transport onSubmit={this.getSharingList}
                                          onPickupDropoffUpdate={this.onPickupDropoffUpdate}
                                          noRouteMessage={this.props.noRouteMessage}
                                          startlocations={this.props.startlocations}
                                          endlocations={this.props.endlocations}
                />}
                {page === 2 && <SharingList
                    selectPrice={this.selectPrice}
                    onSelectShare={this.requestShare}
                    sharingList={this.props.sharingList}
                    previousPage={this.previousPage}
                    announceShare={this.createNewSessionWithShareAnnouncement}
                    prices={this.props.prices}
                    onSubmit={this.createNewSession}
                />}
                {page === 3 && <BookingDetailsCollection previousPage={this.previousPage}
                                                         values={values}
                                                         onSubmit={this.createBooking}
                                                         pickup={this.getPickup(this.props.price)}
                                                         shareAnnouncement={this.props.shareAnnouncement}


                />}
                {page === 4 && <BookingDetailsShow
                    price={this.props.price}
                    booking={this.props.booking}
                    previousPage={this.previousPage}
                    pickup={this.getPickup(this.props.price)}
                    onSubmit={this.acceptDetails}/>
                }
                {page === PAGE_PAYMENT && <BookingPayment
                    stripeKey={this.props.stripeKey}
                    price={this.props.price}
                    isFetchingPayment={this.props.isFetchingPayment}
                    booking={this.props.booking}
                    CCname={values.CCname}
                    previousPage={this.previousPage}
                    payment={this.payment}
                    paymentError={this.paymentError}
                    paymentErrorText={this.props.paymentErrorText}
                />}
                {page === PAGE_SHARE_DETAILS_COLLECTION &&
                <SharingDetailsCollection
                    previousPage={this.goSharingList}
                    description={this.props.description}
                    pickup={getPickup(this.props.price)}
                    values={this.props.values}
                    onSubmit={this.createShareRequest}
                    value={this.startDate}
                    dateText={this.props.dateText}

                />}
                {page === PAGE_SHARE_ANNOUNCEMENT_DETAILS_COLLECTION &&
                <SharingAnnouncementDetailsCollection previousPage={this.goSharingList}
                                                      description={this.props.description}
                                                      priceToJoin={this.props.priceToJoin}
                                                      values={this.props.values}
                                                      onSubmit={this.createShareRequest}
                                                      value={this.startDate}
                                                      dateText={this.props.dateText}

                />}


                {page === PAGE_SHARE_REQUEST_CONFIRMATION &&
                <ShareRequestConfirmation previousPage={this.previousPage}/>}

                {page === PAGE_SHARE_ANNOUNCEMENT_REQUEST_CONFIRMATION &&
                <ShareAnnouncementRequestConfirmation/>}

                {page === PAGE_SHARE_ANNOUNCEMENT_CONFIRMATION &&
                <ShareAnnouncementConfirmation routeLink={routeLink}/>}

                {page === 6 &&
                <BookingConfirmation previousPage={this.previousPage}
                                     routeLink={routeLink}
                />}

                <TaxisurfrFooter/>
            </div>
        )
    }
}












BookingForm.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const headline ='headline';
    const {pickup} = state.wizardReducer;
    const {dropoff} = state.wizardReducer;
    const {country} = state.wizardReducer;
    const {route_link} = state.wizardReducer || null;
    const {page} = state.wizardReducer;
    const {bookingId} = state.wizardReducer;
    const {shareId} = state.wizardReducer;
    const {sharingList} = state.wizardReducer || null;
    const {prices} = state.wizardReducer;
    const {price} = state.wizardReducer;
    const {booking} = state.wizardReducer;
    const {dateText} = state.wizardReducer;
    const {isFetchingPayment} = state.wizardReducer;
    const {form} = state.wizardReducer;
    const {stripeKey} = state.wizardReducer;
    const {noRouteMessage} = state.wizardReducer;
    const {shareAnnouncement} = state.wizardReducer;
    const paymentErrorText = state.wizardReducer.paymentErrorText ? state.wizardReducer.paymentErrorText : '';
    const values = state.form.wizard && state.form.wizard.values ? state.form.wizard.values : {
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

    return {
        headline,
        pickup,dropoff,
        page,
        shareId,
        bookingId,
        values,
        sharingList,
        isFetchingPayment,
        form,
        stripeKey,
        paymentErrorText,
        dateText,
        prices,
        price,
        booking,
        route_link,
        noRouteMessage,
        shareAnnouncement
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)
