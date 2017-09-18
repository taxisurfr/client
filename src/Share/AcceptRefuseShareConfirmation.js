/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import { reduxForm } from 'redux-form'
import validate from '../BookingWizard/validate'


const AcceptRefuseShareConfirmation = (props) => {
    return (
        <div>
        <h1>Thank you.</h1>
        <h1>The person who requested the share has been notified.</h1>
        </div>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(AcceptRefuseShareConfirmation)
