import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderInput} from '../util/render/renderField'
import {renderReadonly} from '../util/render/renderReadonlyField'
import Panel from 'muicss/lib/react/panel';
import validate from './validate'
import {renderPassengerCountSelector} from '../util/render/renderPassengerCountSelector'
import {renderSurfboardCountSelector} from '../util/render/renderSurfboardCountSelector'
import {renderTextArea} from '../util/render/renderTextArea'

const SharingDetailsCollection = (props) => {
    const show = {backgroundColor: 'HoneyDew'};
    const showWhiteBackground = {border: 'none'};
    const {description, priceToJoin, dateText, handleSubmit, previousPage, pickup, shareAnnouncement} = props;
    const pickupLabel = "Your " + pickup.type;
    const pickupTimeLabel = "Your " + pickup.time;
    return (
        <form onSubmit={handleSubmit}>
            <Panel style={show}>
                <div>
                    {shareAnnouncement &&
                    <div style={showWhiteBackground} className="mui--text-title mui--text-left">Hi, this is how our taxi
                        sharing works:
                        <br/>Someone is interested in sharing a taxi on this route on {dateText}.
                        <br/>They have not yet booked the taxi and are looking for people like you.
                        <br/>Fill in the details below and your details will be sent to that person.
                        <br/>They will then contact you directly.<br/>Good luck!
                    </div>}

                    {!shareAnnouncement &&
                    <div style={showWhiteBackground} className="mui--text-title mui--text-left">Hi, this is how our taxi
                        sharing works:
                        <br/>A taxi has been ordered and paid for on {dateText}.
                        <br/>The person who paid for the taxi might share it with you.
                        <br/>Fill in the details below and these details will be sent to that person.
                        <br/>When they agree, you will receive a message and you will be asked to pay the sharing price
                        of {priceToJoin}.
                        <br/>This amount will be refunded to the person who booked the taxi. <br/>Good luck!
                    </div>}

                    <div className="mui--text-title mui--text-left">
                        <Field hint={dateText} component={renderReadonly}
                               label="Pickup date is"/>
                        {!shareAnnouncement && <Field hint={priceToJoin} component={renderReadonly}
                                                      label="Price to share"/>}
                    </div>

                    <div style={showWhiteBackground} className="mui--text-left">
                        <Field name="sharingFlightNo" hint={pickup.typeHint} component={renderInput}
                               label={pickupLabel}/>
                        <Field name="sharingLandingTime" label={pickupTimeLabel}
                               hint={pickup.timeHint}
                               component={renderInput} type=" input"/>
                        <Field name="sharingName" hint="your name"
                               component={renderInput} label="Your Name"/>
                        <Field name="sharingEmail" hint="your@email.com"
                               component={renderInput} label="Your Email"/>
                        <Field name="sharingPassengers" component={renderPassengerCountSelector} label=" Passengers"/>
                        <Field name="sharingSurfboards" component={renderSurfboardCountSelector} label=" Surfboards"/>
                        <Field name="sharingMessage" component={renderTextArea}
                               placeholder=" Hi, I would like to share your taxi ..." label="Message"/>


                    </div>

                    <div>
                        <button type="button" className="previous" onClick={previousPage}>Previous</button>
                        <button type="submit" className="next">Send sharing request.</button>
                    </div>
                </div>
            </Panel>
        </form>
    )
}


export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,  // <------ unregister fields on unmount
    validate
})(SharingDetailsCollection)
