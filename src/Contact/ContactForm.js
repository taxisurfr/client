import React, {Component} from 'react'
import {connect} from 'react-redux'
import ContactDetailsCollection from './ContactDetailsCollection'
import ContactConfirmation from './ContactConfirmation'
import '../BookingWizard/BookingApp.css';
import TaxisurfrAppbar from '../Widget/TaxisurfrAppbar';
import TaxisurfrFooter from '../Widget/TaxisurfrFooter';

import {
    fetchContactOnServer, showVerified,
    PAGE_CONTACT,
    PAGE_CONTACT_CONFIRMATION
} from './actions'

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.createContact = this.createContact.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    verifyCallback = (response) => {
        const {dispatch} = this.props;
        dispatch(showVerified(true));
    };

    createContact() {
        const {dispatch} = this.props;
        const contact = {
            contactname: this.props.values.contactname,
            contactemail: this.props.values.contactemail,
            contactmessage: this.props.values.contactmessage,
        };
        dispatch(fetchContactOnServer(contact));

    }

    render() {
        const {page} = this.props;
        const s1 = {verticalAlign: 'middle'};
        const s2 = {textAlign: 'right'};
        return (
            <div className="BookingApp-border">
                <div className="BookingApp">
                    <div>
                        {page === PAGE_CONTACT && <ContactDetailsCollection
                            onSubmit={this.createContact} verified={this.props.verified}
                            verifyCallback={this.verifyCallback}/> }
                        {page === PAGE_CONTACT_CONFIRMATION &&
                        <ContactConfirmation/>}
                        <TaxisurfrFooter/>

                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const {verified} = state.contactReducer;
    const {page} = state.contactReducer;
    const values = state.form.wizard && state.form.wizard.values ? state.form.wizard.values : null;

    console.log("mapStatToProps:" + verified);
    return {
        page,
        values,
        verified
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
