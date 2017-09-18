import React from 'react'
import {reduxForm} from 'redux-form'
import ReactPDF  from 'react-pdf';

const ViewBookingForm = (props) => {
    const {form} = props;
    const pdf =['some pdf']
    return (
        <div>
            <ReactPDF
                file={{ data: {pdf}}}
            />
        </div>
    );
}
const validate = values => {
    const errors = {}
    return errors
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(ViewBookingForm)
