/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate'


const ShareRequestConfirmation = (props) => {
    return (
        <div>
        <h1>Congratulations. </h1>
        <h1>Your share request has been sent to the person who booked the taxi.</h1>
        <h1>You will now have to wait until they reply.</h1>
        <h1>Good luck!</h1>
        </div>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(ShareRequestConfirmation)
