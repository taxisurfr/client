import React, {Component} from 'react';
import {Carousel, Well, Popover, Glyphicon, Grid, Row, Col, Button, Image} from 'react-bootstrap';

class BookingApp extends Component {


    render() {
        let price = this.props.price;
        let contractor = price ? price.contractor : null;
        let website = contractor ? contractor.address3:null;
        let name = contractor ? contractor.name:null;
        let facebook = contractor ? contractor.address2:null;
        let image = contractor ? contractor.address4:null;
        let isreturn = (price && price.return);
        let isreturntext = ' ** return';
        let returnstyle={backgroundColor: "#9bf442"};

        let dollars = price ? '$US' + price.cents / 100:'';
        let rupees = price ? (Number(price.cents*154/10000).toFixed(0))*100+' rupees': '';
        return (
            <div className="mui--text-left">
                <Well bsSize="large">
                    <Grid>
                        <Row>
                            <Col xs={6} md={3}>
                                <h1><strong>{dollars}</strong></h1>
                                <h2 bsSize="large">{rupees}</h2>
                                {isreturn && <h2 style={returnstyle}>{isreturntext}</h2>}
                            </Col>
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
