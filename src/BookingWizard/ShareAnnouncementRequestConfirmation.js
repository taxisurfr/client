/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate'


const ShareAnnouncementRequestConfirmation = (props) => {
    return (
        <div>
        <h1>Congratulations. </h1>
        <h1>Your share request has been sent to person who wants to share.</h1>
        <h1>They will contact you directly.</h1>
        <h1>Please note that no taxi has been ordered.</h1>
        <h1>If you need to book a taxi you can do this at taxisurfr.com</h1>
        <h1>Good luck!</h1>
        </div>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(ShareAnnouncementRequestConfirmation)
