/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import Combobox from 'react-widgets/lib/Combobox'
import Panel from 'muicss/lib/react/panel';
import TaxisurfrYoutube from "../Widget/TaxisurfrYoutube";

const locations = ['Colombo Airport', 'Colombo Downtown', 'Arugam Bay',
    'Dambulla', 'Galle', 'Haputale', 'Hikkaduwa', 'Kalpitiya', 'Kandy', 'Kitulgala', 'Polunnaruwa', 'Mirissa',
    'Weligama', 'Yala Tissamaharama', 'Polunaruwa', 'Bandarawella', 'Ella', 'Tangalle', 'Akkaraipattu', 'Nuwara Eliya',
    'Midigama', 'Kalpitiya', 'Batikallo', 'Passikuda','Sigiriya', 'Trinco', 'Udawalawa', 'Unawatuna'
];

const renderCombobox = ({input, data, label, meta: {touched, error}}) =>
    <div style={noborder}>
        <h2 className="mui--text-headline mui--text-left">{label}</h2>
        <Combobox style={centerer} {...input}
                  data={data}
                  defaultValue={data[1]}
                  onChange={input.onChange}
                  suggest
                  caseSensitive={false}
                  minLength={2}
                  filter="contains"
        />
        <div>{touched && error && <span>{error}</span>}</div>
    </div>

var style = {
    color: 'red'
};

var styleCenter1 = {
    margin: 'auto',
    width: '100%',
    border: '3px solid blue',
    paddingx: '10px'
};

var centerer = {
    display: 'block',
    margin: '0 auto',
    border: '1px solid'
}
var noborder = {
    border: 'none'
}


var filler = {
    margin: 'auto',
    border: '3px solid green',
}
var styleCenter3 = {}

class Transport extends React.Component {
    render() {
        const block = {float: 'left'}
        const noborder = {border: 'none'};
        const show = {backgroundColor: 'HoneyDew'};
        const message1 = 'taxisurfr is for the independent traveller wanting to connect with local trusted operators. Passengers will be met at the airport, hotel, train station or arranged meeting point.'
        const {handleSubmit, noRouteMessage} = this.props;
        const isNoRoute = typeof noRouteMessage != 'undefined' && noRouteMessage != null && noRouteMessage != '';
        return (

            <form onSubmit={handleSubmit}>
                <div className="mui--text-center mui--text-title" itemScope itemType="http://schema.org/Offer">
                    <Panel style={show}>
                        <div>
                            <div className="mui--text-left mui--text-title" style={noborder}>
                                <div width="100px" style={noborder}>
                                    <h2>Taxi Booking in Sri Lanka</h2>
                                    <h3>{message1}</h3>
                                    <h2>Some of our most popular routes</h2>
                                    <div>
                                        <a href="https://app.taxisurfr.com/taxi-colombo-airport-arugam-bay" target="_blank">Colombo
                                            Airport to Arugam Bay</a>
                                    </div>
                                    <div>
                                        <a href="https://app.taxisurfr.com/taxi-colombo-airport-mirissa" target="_blank">Colombo
                                            Airport to Mirissa</a>
                                    </div>
                                    <div>
                                        <a href="https://app.taxisurfr.com/taxi-colombo-airport-weligama" target="_blank">Colombo
                                            Airport to Weligama</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Panel>
                    <Panel style={show}>
                        <div style={noborder}>
                            <div className="mui--text-center mui--text-headline style"
                                 style={noborder}>{noRouteMessage}</div>

                            <Field
                                name="pickup"
                                component={renderCombobox}
                                data={locations}
                                valueField="value"
                                label="Pickup eg. Colombo Airport"
                            />
                            <Field
                                name="dropoff"
                                component={renderCombobox}
                                data={locations}
                                valueField="value"
                                textField="color"
                                label="Dropoff eg. Arugam Bay"
                            />
                            <div className="mui--text-left" style={noborder}>
                                <button disabled={isNoRoute} type="submit" className="next">See details.</button>
                            </div>
                        </div>
                    </Panel>
                    <Panel style={show}>
                        <div className="mui--text-left mui--text-title" >
                            <TaxisurfrYoutube/>
                            <h2>Useful Links</h2>
                            <div>
                                <a href="http://arugam.info" target="_blank">Arugam Info</a>
                                <br/>
                                <a href="http://www.sanjutravels.com/" target="_blank">Sanju Travels</a>
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
})(Transport)
