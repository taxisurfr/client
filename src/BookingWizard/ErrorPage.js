/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate'


const ErrorPage = (props) => {
    return (
        <div>
        <h1>Whoops. Had a problem with that.</h1>
        <h1>Please get in contact with dispatch@taxisurfr.com</h1>
        </div>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(ErrorPage)
