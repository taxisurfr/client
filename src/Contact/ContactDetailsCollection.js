/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import {renderInput} from '../util/render/renderField'
import {renderTextArea} from '../util/render/renderTextArea'
import Recaptcha from 'react-recaptcha';
import Panel from 'muicss/lib/react/panel';

// site key
const sitekey = '6Ld1PxwUAAAAAGdVjbfgLQXifnF7DPjaVa7LfCxn';

// specifying your onload callback function
const callback = () => {
};


const expiredCallback = () => {
    console.log(`Recaptcha expired`);
};

// define a variable to store the recaptcha instance
let recaptchaInstance;


class ContactDetailsCollection extends React.Component {
    constructor(props) {
        super(props);
        this.resetRecaptcha = this.resetRecaptcha.bind(this);
    }

    // handle reset
    resetRecaptcha = () => {
        recaptchaInstance.reset();
    };

    render() {
        const show = {backgroundColor: 'HoneyDew'};
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Panel style={show}>
                        <div className="mui--text-headline">Contact us by filling out the following.</div>

                        <Field name="contactname" id="name" hint="Your name"
                               component={renderInput} label="Name"/>
                        <Field name="contactemail" id="email" hint="your@email.com"
                               component={renderInput} label="Email"/>
                        <Field name="contactmessage" component={renderTextArea} label="Message"/>

                        <Recaptcha
                            ref={e => recaptchaInstance = e}
                            sitekey={sitekey}
                            size="compact"
                            render="explicit"
                            verifyCallback={this.props.verifyCallback}
                            onloadCallback={callback}
                            expiredCallback={expiredCallback}
                        />
                        <div>
                            <button disabled={!this.props.verified} type="submit" className="next">Send message
                            </button>
                        </div>
                    </Panel>
                </div>
            </form>
        )
    }
}


export default reduxForm({
    form: 'wizard',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(ContactDetailsCollection)
