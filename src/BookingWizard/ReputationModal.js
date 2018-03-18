import React, {Component} from 'react';
import FacebookProvider, { Page,Like } from 'react-facebook';
import ReactPixel from 'react-facebook-pixel';

import {Modal, Button, Popover, Tooltip, Carousel } from 'react-bootstrap';

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
            </div>
        );
    }
}


export default ReputationModal;

