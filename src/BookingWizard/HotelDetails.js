import React, {Component} from 'react';
import {Carousel, Well, Popover, Glyphicon, Grid, Row, Col, Button, Image} from 'react-bootstrap';

class HotelDetails extends Component {


    render() {
        let hotel = this.props.hotel;

        return (
            <div className="mui--text-left">
                <Well bsSize="large">
                    <Grid>
                        <Row>
                            <Col xs={6} md={3}>
                                <h1><strong>{hotel.name}</strong></h1>
                            </Col>
                            <Col xs={6} md={3}>
                                <Image href="#" alt="100x180" src={hotel.logo} thumbnail/>
                            </Col>
                            <Col xs={6} md={3}>
                                <h2>{name}</h2>
                                <span><a href={hotel.facebook} target='_blank'><i className="fa fa-facebook-official"/></a></span>
                                <Button bsStyle="link" target='_blank' href={hotel.web}>Website</Button>
                            </Col>
                        </Row>
                    </Grid>
                </Well>
            </div>
        );
    }
}
export default HotelDetails;
