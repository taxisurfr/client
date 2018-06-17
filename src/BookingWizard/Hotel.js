/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import Combobox from 'react-widgets/lib/Combobox'
import Panel from 'muicss/lib/react/panel';
import TaxisurfrYoutube from "../Widget/TaxisurfrYoutube";
import {Label, Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import Select from 'react-select';
import {Carousel, Well, Popover, Glyphicon, Grid, Row, Col, Image} from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import {locations} from './Locations'
import HotelDetails from "./HotelDetails";
import TaxisurfrIntro from "./TaxisurfrIntro";

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

class Hotel extends React.Component {
    state = {
        selectedPickup: '',
        selectedDropoff: '',
    }
    handlePickupChange = (selectedOption) => {
        this.setState({selectedPickup: selectedOption});
        this.props.onPickupDropoffUpdate('PICKUP', selectedOption.value);
    }
    handleDropoffChange = (selectedOption) => {
        this.setState({selectedDropoff: selectedOption});
        this.props.onPickupDropoffUpdate('DROPOFF', selectedOption.value);

    }

    render() {
        const {selectedPickup} = this.state;
        const value = selectedPickup && selectedPickup.value;
        const block = {float: 'left'}
        const noborder = {border: 'none'};
        const show = {backgroundColor: 'HoneyDew'};
        const message1 = 'taxisurfr is for the independent traveller wanting to connect with local trusted operators. Passengers will be met at the airport, hotel, train station or arranged meeting point.'
        const {handleSubmit, noRouteMessage} = this.props;
        const {startlocations, endlocations} = this.props;
        const isNoRoute = typeof noRouteMessage != 'undefined' && noRouteMessage != null && noRouteMessage != '';

        let Background = 'http://wpteam.online/ypasan/wp-content/uploads/2018/06/image2.jpg';
        let sectionStyle = {
            width: "100%",
            height: "400px",
            backgroundImage: "url(" + Background + ")"
        };

        this.props.setHotelLocation(this.props.hotel);
        return (
            <div style={noborder}>
               {/* <Grid>
                    <Row style={ sectionStyle }>
                        <Col style={show}>
                            <div style={noborder}>
                                <div className="mui--text-left mui--text-headline style"
                                     style={noborder}>{noRouteMessage}</div>
                                <div className="mui--text-left">
                                    <h1 className="mui--text-left">
                                        Where can we pick you up?
                                    </h1>
                                </div>
                                <Select
                                    placeholder='please type the name of the town'
                                    name="form-pickup"
                                    value={this.state.selectedPickup.value}
                                    onChange={this.handlePickupChange}
                                    options={
                                        locations.map((v) => {
                                            var option = {value: v, label: v};
                                            return option;
                                        })}

                                />
                                <h1 className="mui--text-left">
                                    And bring you direct to your Hotel
                                </h1>

                                <HotelDetails hotel={this.props.hotel}/>
                                <div className="mui--text-left" style={noborder}>
                                    <button disabled={isNoRoute} type="submit" className="next">See details.</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>*/}
                <form onSubmit={handleSubmit}>
                        <TaxisurfrIntro/>
                    <div className="mui--text-center mui--text-title" itemScope itemType="http://schema.org/Offer" >
                        <Panel style={show}>
                            <div style={noborder}>
                                <div className="mui--text-left mui--text-headline style"
                                     style={noborder}>{noRouteMessage}</div>
                                <div className="mui--text-left">
                                <h1 className="mui--text-left">
                                    Where can we pick you up?
                                </h1>
                                </div>
                                <Select
                                    placeholder='please type the name of the town'
                                    name="form-pickup"
                                    value={this.state.selectedPickup.value}
                                    onChange={this.handlePickupChange}
                                    options={
                                        locations.map((v) => {
                                            var option = {value: v, label: v};
                                            return option;
                                        })}

                                />
                                <h1 className="mui--text-left">
                                    And bring you direct to your Hotel
                                </h1>

                                <HotelDetails hotel={this.props.hotel}/>
                                <div className="mui--text-left" style={noborder}>
                                    <button disabled={isNoRoute} type="submit" className="next">See details.</button>
                                </div>
                            </div>
                        </Panel>
                        {/*<Panel style={show}>
                            <div className="mui--text-left mui--text-title">
                                <TaxisurfrYoutube/>
                                <h2>Useful Links</h2>
                                <div>
                                    <a href="http://arugam.info" target="_blank">Arugam Info</a>
                                    <br/>
                                    <a href="http://www.sanjutravels.com/" target="_blank">Sanju Travels</a>
                                </div>
                            </div>
                        </Panel>*/}
                    </div>
                </form>
            </div>
        )
    }
}












export default reduxForm({
    form: 'wizard',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(Hotel)
