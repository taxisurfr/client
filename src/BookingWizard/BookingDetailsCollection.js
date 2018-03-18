import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Panel from 'muicss/lib/react/panel';
import validate from './validate'
import {renderCalendar} from '../util/render/renderCalendar'
import {renderShuttleCalendar} from '../util/render/renderCalendar'
import {renderInput} from '../util/render/renderField'
import {renderError} from '../util/render/renderField'
import {renderPassengerCountSelector} from '../util/render/renderPassengerCountSelector'
import {renderSurfboardCountSelector} from '../util/render/renderSurfboardCountSelector'
import {renderTextArea} from '../util/render/renderTextArea'

class BookingDetailsCollection extends React.Component {

    render() {
        const show = {backgroundColor: 'HoneyDew'};
        const showWhiteBackground = {border: 'none', backgroundColor: 'white'};
        const {values, description, price, handleSubmit, previousPage, announceShare, pickup, shareAnnouncement,pickupType} = this.props;
        const buttonAction = shareAnnouncement ? 'Announce share' : 'Book taxi';
        return (
            <form onSubmit={handleSubmit}>

                <div>
                <Panel style={show}>
                    <div>
                    {shareAnnouncement &&
                    <div className="mui--text-title mui--text-left">
                        This is where you can announce that you are considering a taxi and looking for people to
                        share
                        it.
                        <br/>It is not a booking but simply information for fellow travellers.
                        <br/>Fill in the details and they will appear in the list on the previous page when somebody
                        else is
                        looking at this route.
                        <br/>When somebody is travelling at the same time, we will send you a message.
                        <br/>Good luck!
                    </div>}
                    {!shareAnnouncement &&
                    <div className="mui--text-title mui--text-left">
                        Please fill in your details below to book your taxi.
                        <br/>
                        </div>}
                            <Field name="date" label="Date of pickup" component={renderCalendar}/>
                            <Field name="date" label="Date of shuttle" component={renderShuttleCalendar}/>
                            <Field name="flightNo" id="flightNo" hint={pickup.typeHint} component={renderInput}
                               label={pickup.type}/>
                            <Field name="landingTime" label={pickup.time}
                               hint={pickup.timeHint} readonly={true}
                               component={renderInput} type="input"/>
                        <Field name="name" id="name" hint="Your name"
                               component={renderInput} label="Name"/>
                        <Field name="email" id="email" hint="your@email.com"
                               component={renderInput} label="Email"/>
                        <Field name="passengers" value="2 passengers" component={renderPassengerCountSelector}/>
                        <Field name="surfboards" component={renderSurfboardCountSelector}/>
                        <Field name="requirements" component={renderTextArea}
                               placeholder="Additionally, I would like ..." label="Additionally I require ..."/>
                        <div>
                            <button type="button" className="previous" onClick={previousPage}>Previous</button>
                            <button type="submit" className="next">{buttonAction}</button>
                        </div>
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
})(BookingDetailsCollection)
