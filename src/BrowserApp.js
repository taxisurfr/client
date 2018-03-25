import React, {Component} from 'react';
import BookingApp from './BookingWizard/BookingApp';
import ContactForm from './Contact/ContactForm';
import ShareForm from './Share/ShareForm';
import {Route,Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux'
import Container from 'muicss/lib/react/container';
import Appbar from 'muicss/lib/react/appbar';
import NavLink from './util/NavLink'
import FacebookProvider, {Page, Like} from 'react-facebook';
import ReactPixel from 'react-facebook-pixel';
import {Carousel } from 'react-bootstrap';





class BrowserApp extends Component {
    constructor(props) {
        super(props);
        this.connectBackButtonHandler = this.connectBackButtonHandler.bind(this);


    }

    connectBackButtonHandler() {
        const history = this.props.history;
        window.onbeforeunload = () => {
            history.push("/");
        }
    }

    componentDidMount() {
        this.connectBackButtonHandler();
    }


    render() {
        const s2 = {textAlign: 'right'};
        ReactPixel.init('254006428444239');
        ReactPixel.pageView();

        const noborder = {
            paddingLeft: '0px',
            paddingRight: '0px'
        };

        return (
                <Container fluid={true} style={noborder}>

                    <ConnectedRouter history={this.props.history}>
                        <Switch>
                            <Route path="/contact" component={ContactForm}/>
                            <Route path="/share/:cmd?/:id?" component={ShareForm}/>
                            <Route history={this.props.history} path="*" component = {BookingApp}  />
                            <Route history={this.props.history} path="/**" component = {BookingApp}  />

                        </Switch>
                    </ConnectedRouter>
                </Container>
        );
    }
}


export default BrowserApp;
