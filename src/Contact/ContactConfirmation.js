/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate'

const ContactConfirmation = (props) => {
    return (
    <h1>Thanks for your message.</h1>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(ContactConfirmation)
