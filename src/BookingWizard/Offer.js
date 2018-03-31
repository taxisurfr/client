import React, {Component} from 'react';
import {Carousel, Well, Popover, Glyphicon, Grid, Row, Col, Button, Image} from 'react-bootstrap';

class BookingApp extends Component {


    render() {
        var price = this.props.price;
        var contractor = price ? price.contractor : null;
        var website = contractor ? contractor.address3:null;
        var name = contractor ? contractor.name:null;
        var facebook = contractor ? contractor.address2:null;
        var image = contractor ? contractor.address4:null;

        var dollars = price ? '$US' + price.cents / 100:'';
        var rupees = price ? price.cents*154/100+' rupees': '';
        return (
            <div className="mui--text-left">
                <Well bsSize="large">
                    <Grid>
                        <Row>
                            <Col>
                                <h1><strong>{dollars}</strong></h1>
                            </Col>
                            <Col>
                                <h2 bsSize="large">{rupees}</h2>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <Row>
                            <Col xs={6} md={3}>

                                <Image href="#" alt="100x180" src={image} thumbnail/>
                            </Col>
                            <Col xs={6} md={3}>
                                <h2>{name}</h2>
                                <span><a href={facebook} target='_blank'><i className="fa fa-facebook-official"/></a></span>
                                <Button bsStyle="link" target='_blank' href={website}>Website</Button>
                                <div>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Well>
                <button type="button" className="next" onClick={() => this.props.selectPrice(price)} >Book now.</button>

            </div>
        );
    }
}
export default BookingApp;
