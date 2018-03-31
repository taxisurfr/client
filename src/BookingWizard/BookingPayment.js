/**
 * Created by peter on 28/01/2017.
 */
import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import CardReactFormContainer from 'card-react';
import Input from 'muicss/lib/react/input';
import Panel from 'muicss/lib/react/panel';

class BookingPayment extends Component {
    constructor(props) {
        super(props)
        this.handlePayment = this.handlePayment.bind(this);
    }

    handlePayment(event) {
        var paymentError = this.props.paymentError;
        var dispatch = this.props.dispatch;
        var payment = this.props.payment;
        var exp = event.target.CCexpiry.value.split('/');
        var ccValues = {
            name: event.target.CCname.value,
            number: event.target.CCnumber.value,
            // number: '4242424242424242',
            cvc: event.target.CCcvc.value,
            exp_month: exp[0] != null ? exp[0].trim() : null,
            exp_year: exp[1] != null ? exp[1].trim() : null
        };
        event.preventDefault();
        // send form here
        window.Stripe.createToken(ccValues, function (status, response) {
            if (response.error) {
                console.log("ERROR: could not get payment token:" + response.error.message);
                // self.setState({paymentError: response.error.message, submitDisabled: false});
                dispatch(paymentError(response.error.message));
            }
            else {
                console.log(response.id);
                payment(response.id);
                // self.setState({paymentComplete: true, submitDisabled: false, token: response.id});
                // make request to your server here!
            }
        });

    }

    render() {
        const {stripeKey, price, isFetchingPayment, previousPage} = this.props;
        window.Stripe.setPublishableKey(stripeKey);
        var dollars = price ? '$US' + price.cents / 100:'';


        var style = {
            color: 'red'
        };
        const show = {backgroundColor: 'HoneyDew'};
        const removeBorder = {border: 'none'};

        return (
            <div>
                <div className="mui--text-display1">
                    <span style={style}>{this.props.paymentErrorText}</span>
                </div>
                < CardReactFormContainer

                    // the id of the container element where you want to render the card element.
                    // the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
                    container="card-wrapper" // required

                    // an object contain the form inputs names.
                    // every input must have a unique name prop.
                    formInputsNames={
                        {
                            number: 'CCnumber', // optional — default "number"
                            expiry: 'CCexpiry',// optional — default "expiry"
                            cvc: 'CCcvc', // optional — default "cvc"
                            name: 'CCname' // optional - default "name"
                        }
                    }

                    // initial values to render in the card element
                    initialValues_X={
                        {
                            number: '4242424242424242', // optional — default •••• •••• •••• ••••
                            cvc: '123', // optional — default •••
                            expiry: '12/18', // optional — default ••/••
                            name: 'Random Name' // optional — default FULL NAME
                        }
                    }

                    // the class name attribute to add to the input field and the corresponding part of the card element,
                    // when the input is valid/invalid.
                    classes={
                        {
                            valid: 'valid-input', // optional — default 'jp-card-valid'
                            invalid: 'invalid-input' // optional — default 'jp-card-invalid'
                        }
                    }

                    // specify whether you want to format the form inputs or not
                    formatting={true} // optional - default true
                >


                    <form style={removeBorder} onSubmit={this.handlePayment}>
                        <div id="xxx" style={removeBorder}>

                            <Panel style={show}>
                                <div>
                                    <Input style={removeBorder} name="CCname" hint="Name on the credit card"/>
                                    <Input style={removeBorder} name="CCnumber" hint="Card number"/>
                                    <Input style={removeBorder}
                                           name="CCexpiry"
                                           hint="MM/YY"/>
                                    <Input style={removeBorder}
                                           name="CCcvc"
                                           hint="CVC"/>
                                    <div style={removeBorder}>
                                        <button type="button" className="previous" onClick={previousPage}>
                                            Previous
                                        </button>
                                        <button disabled={isFetchingPayment} type="submit">Pay {dollars}</button>
                                        {isFetchingPayment && <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>}
                                    </div>
                                </div>
                            </Panel>
                        </div>
                    </form>
                </CardReactFormContainer>
                <div id="card-wrapper"></div>
            </div>

        )
    }
}

BookingPayment.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    paymentErrorText: PropTypes.string
};

const validate = values => {
    const errors = {}

    return errors
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(BookingPayment)
