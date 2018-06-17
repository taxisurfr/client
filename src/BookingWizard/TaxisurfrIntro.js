import React, {Component} from 'react';
import {Carousel, Well, Popover, Glyphicon, Grid, Row, Col, Button, Image} from 'react-bootstrap';
import Panel from 'muicss/lib/react/panel';

class TaxisurfrIntro extends Component {


    render() {
        let hotel = this.props.hotel;
        const message1 = 'taxisurfr is for the independent traveller wanting to connect with local trusted operators. Passengers will be met at the airport, hotel, train station or arranged meeting point.'
        const noborder = {border: 'none'};

        const show = {backgroundColor: 'HoneyDew'};


        return (
            <div className="mui--text-center mui--text-title">
            <Panel style={show}>
                <div>
                    <div className="mui--text-left mui--text-title" style={noborder}>
                        <div width="100px" style={noborder}>
                            <h2>Taxi Booking in Sri Lanka.</h2>
                            <h3>{message1}</h3>

                        </div>
                    </div>
                </div>
            </Panel>
            </div>
        );
    }
}
export default TaxisurfrIntro;
