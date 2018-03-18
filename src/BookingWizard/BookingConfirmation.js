import React from 'react';
import {reduxForm} from 'redux-form';
import validate from './validate';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Button} from 'react-bootstrap';
import Panel from 'muicss/lib/react/panel';

const BookingConfirmation = (props) => {
    var isShuttle = false;
    return (
        <div>
            <Panel>
            <h1>Congratulations. Booking is completed. Details have be sent per email.</h1>
            </Panel>
            {!isShuttle && <Panel>
            <h1>Sharing your taxi</h1>
            <h2>Maybe you are interested in sharing your taxi to reduce costs and meet other people?</h2>
            <h2>You can improve your chances of sharing by posting the following link in sharing forums.</h2>

            <h2>{props.routeLink}</h2>
            <CopyToClipboard text={props.routeLink}>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                >Copy share link to clipboard</Button>
            </CopyToClipboard>
            </Panel>}
            {!isShuttle && <Panel>
                <h2>Here are some good forums for sharing.</h2>
                <div>
                    <a className="mui--text-title" href="https://www.facebook.com/pg/taxisurfr/posts">Taxisurfr in Facebook</a>
                </div>
                <div>
                <a className="mui--text-title" href="https://srilankataxishare.com">Sri Lanka Taxishare</a>
                </div>
                <div>
                <a className="mui--text-title" href="https://www.carpoolworld.com/carpool_SRI_LANKA_favorites.html">Carpool</a>
                </div>

            </Panel>}
        </div>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(BookingConfirmation)
