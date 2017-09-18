import React, {Component, PropTypes} from 'react'
import FacebookProvider, { Page,Like } from 'react-facebook';

class FacebookPage extends Component {
    render() {
        return (
            <div>
                <FacebookProvider appId="1651399821757463" width="100%">
                    <Page href="http://www.facebook.com/taxisurfr" colorScheme="dark" showFaces share />
                </FacebookProvider>
            </div>
        )
    }
}


export default FacebookPage
