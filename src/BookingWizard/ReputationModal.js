import React, {Component} from 'react';
import Slider from 'react-slick';
import FacebookProvider, { Page,Like } from 'react-facebook';
import ReactPixel from 'react-facebook-pixel';


import {Modal, Button, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap';

class ReputationModal extends Component {
    constructor(props) {
        super(props);
        this.closeReviews = this.closeReviews.bind(this);
        this.closeFacebook = this.closeFacebook.bind(this);
        this.openReviews = this.openReviews.bind(this);
        this.openFacebook = this.openFacebook.bind(this);
        this.state = {
            showModalReviews: false,
            showModalFacebook: false
        };
    }


    closeReviews() {
        this.setState({showModalReviews: false});
    }

    openReviews() {
        ReactPixel.track('Lead', {type:'reputation'} );
        this.setState({showModalReviews: true});
    }

    closeFacebook() {
        this.setState({showModalFacebook: false});
    }

    openFacebook() {
        this.setState({showModalFacebook: true});
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };


        const base = 'https://app.taxisurfr.com/review/';


        /*
         const base = 'http://localhost:3000/review/';
         */

        const imgrep = {
            maxWidth: '100%',
            maxHeight: '100%'
        };

        const s1 = {verticalAlign: 'middle'};

        return (
            <div>
                <p>We are proud of our reputation for reliabilty and safety. Please have a look at some reviews from
                    other passengers.</p>


                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.openReviews}
                >
                    Our Reviews
                </Button>
              {/*  <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.openFacebook}
                >
                    Our facebook page
                </Button>*/}

                <Modal show={this.state.showModalReviews} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reviews from our passengers</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <Slider {...settings}>
                            <div style={imgrep}><img src={base + '0001.jpg'}/></div>
                            <div style={imgrep}><img src={base + '0002.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00001.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00003.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00004.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00005.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00006.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00006.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00008.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00009.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00010.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00011.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00012.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00013.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00014.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00015.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00016.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00017.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00018.jpg'}/></div>
                            <div style={imgrep}><img src={base + '00019.jpg'}/></div>
                        </Slider>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeReviews}>Close</Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={this.state.showModalFacebook} onHide={this.closeFacebook}>
                    <Modal.Header closeButton>
                        <Modal.Title>Our Facebook Page</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FacebookProvider appId="123456789">
                            <Like href="http://www.facebook.com/taxisurfr" colorScheme="dark" showFaces share />
                        </FacebookProvider>

                        <FacebookProvider appId="1651399821757463">
                            <Page href="http://www.facebook.com/taxisurfr" colorScheme="dark" showFaces share />
                        </FacebookProvider>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeFacebook}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default ReputationModal;

