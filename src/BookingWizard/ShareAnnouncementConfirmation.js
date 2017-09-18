/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import {reduxForm} from 'redux-form'
import validate from './validate'
import Panel from 'muicss/lib/react/panel';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Button} from 'react-bootstrap';


const ShareAnnouncementConfirmation = (props) => {
    return (
        <div>
            <Panel>
                <h1>Congratulations. </h1>
                <h1>Your share announcement has been registered.</h1>
                <h1>You can see it how it will appear when you seach this route.</h1>
                <h1>Good luck!</h1>
            </Panel>
            <Panel>
                <h1>Sharing your taxi</h1>
                <h2>You can improve your chances of finding someone to share by posting the following link in sharing forums.</h2>

                <h2>{props.routeLink}</h2>
                <CopyToClipboard text={props.routeLink}>
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                    >Copy share link to clipboard</Button>
                </CopyToClipboard>
            </Panel>
            <Panel>
                <h2>Here are some good forums for sharing.</h2>
                <div>
                    <a className="mui--text-title" href="https://www.facebook.com/pg/taxisurfr/posts">Taxisurfr in
                        Facebook</a>
                </div>
                <div>
                    <a className="mui--text-title" href="https://www.facebook.com/groups/srilankataxishare">Sri Lanka Taxishare</a>
                </div>
                <div>
                    <a className="mui--text-title" href="https://www.carpoolworld.com/carpool_SRI_LANKA_favorites.html">Carpool</a>
                </div>

            </Panel>
        </div>

    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(ShareAnnouncementConfirmation)
