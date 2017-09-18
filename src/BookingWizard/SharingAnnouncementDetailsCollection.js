import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderInput} from '../util/render/renderField'
import {renderReadonly} from '../util/render/renderReadonlyField'
import Panel from 'muicss/lib/react/panel';
import validate from './validate'
import {renderPassengerCountSelector} from '../util/render/renderPassengerCountSelector'
import {renderSurfboardCountSelector} from '../util/render/renderSurfboardCountSelector'
import {renderTextArea} from '../util/render/renderTextArea'

const SharingAnnouncementDetailsCollection = (props) => {
    const show = {backgroundColor: 'HoneyDew'};
    const {description, priceToJoin, dateText, handleSubmit, previousPage, pickup} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Panel style={show}>

                    <div className="mui--text-left">
                        <h2>Hi, a fellow traveller has created this share announcement.
                            <br/>Fill in the details below and these details will be sent to that person.
                            <br/>When they agree, you will receive a message with their contact details and you can
                            communicate directly.
                            <br/>Important: the taxi has not been booked.
                        </h2>
                        <Field hint={dateText} component={renderReadonly}
                               label="Pickup date"/>
                    </div>
                </Panel>
            </div>
            <div>
                <Panel style={show}>
                    <div className="mui--text-left">

                        <Field name="sharingName" hint="your name"
                               component={renderInput} label="Your Name"/>
                        <Field name="sharingEmail" hint="your@email.com"
                               component={renderInput} label="Your Email"/>
                        <Field name="sharingMessage" component={renderTextArea}
                               placeholder=" Hi, I would like to share your taxi ..." label="Message"/>


                    </div>
                </Panel>
            </div>
            <div>
                <div>
                    <button type="button" className="previous" onClick={previousPage}>Previous</button>
                    <button type="submit" className="next">Send sharing request.</button>
                </div>
            </div>
        </form>
    )
}


export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,  // <------ unregister fields on unmount
    validate
})(SharingAnnouncementDetailsCollection)
