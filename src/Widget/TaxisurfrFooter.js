import React, {Component, PropTypes} from 'react'
import FacebookProvider, { Like,Share } from 'react-facebook';

class TaxisurfrAppbar extends Component {
    render() {
        return (
            <div>
                <FacebookProvider appId="1651399821757463">
                    <Like href="http://www.facebook.com/taxisurfr" colorScheme="dark" showFaces share />
                    {/*<Share href="http://www.facebook.com/taxisurfr">
                        <button type="button">Share</button>
                    </Share>*/}
                </FacebookProvider>

            </div>
        )
    }
}


export default TaxisurfrAppbar
