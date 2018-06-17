import React, {Component} from 'react'
import Appbar from 'muicss/lib/react/appbar';
import NavLink from '../util/NavLink'
import Responsive from 'react-responsive';
import {Carousel, Well, Popover, Glyphicon, Grid, Row, Col, Button, Image} from 'react-bootstrap';

class TaxisurfrAppbar extends Component {
    render() {
        const Desktop = ({children}) => <Responsive minWidth={768} children={children}/>;
        const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;

        const removePadding = {
            paddingLeft: '0px',
            paddingRight: '0px'
        };

        const imageStyle = {
            height: '115px',
            float: 'left'
        };

        const routeText = {
            paddingTop: '24px',
            fontSize: 28,
            color: 'rgb(20, 215, 134)'
        };

        const routeTextMobile = {
            paddingTop: '24px',
            fontSize: 28,
            color: 'rgb(20, 215, 134)',
        };

        const titleText = {
            paddingTop: '24px',
            fontFamily: '"Lato",sans-serif',
            fontSize: 28,
            color: 'rgb(20, 215, 134)',
            paddingLeft: '50%',
        };


        const titleTextMobile = {
            paddingTop: '20px',
            fontFamily: '"Lato",sans-serif',
            fontSize: 18,
            color: 'rgb(20, 215, 134)',
            marginLeft: '0%',
        };

        const headerText = {

            fontFamily: '"Lato",sans-serif',
            fontSize: 22,
            color: 'rgb(20, 215, 134)',
            marginLeft: '12%',
            fontStyle: 'normal',
            fontWeight: '700',
            letterSpacingx: '-0.035em'
        };

        const headerTextMobile = {

            fontFamily: '"Lato",sans-serif',
            fontSize: 14,
            color: 'rgb(20, 215, 134)',
            marginLeft: '12%',
            fontStyle: 'normal',
            fontWeight: '700',
        };

        const clrTextMobile = {color: 'rgb(20, 215, 134)', marginLeft: '10px'};
        const clr = {
            height: '115px',
            backgroundColor: '#2c3e50'
        };

        const s1 = {verticalAlign: 'middle'};
        const s2 = {color: 'rgb(20, 215, 134)',fontSize: 24};
        var style = {
            color: 'white',
            fontSize: 24
        }

        let left = {
            float: 'left'
        }

        let {price} =this.props;
        let {hotel} =this.props;
        let showreturn = price && price.return && this.props.page >=3;
        let routeReturn = showreturn ? ' -- return' : '';
        let hotelPresent = hotel ? true : false;
        let routeDescription =price ? price.startroute.name +' to ' + (hotel ? hotel.name : price.endroute.name) + routeReturn : '';
        let hideTaxisurfr = routeDescription && routeDescription.length > 0;
        const base = 'http://localhost:3000/image/';
        return (
            <div style={removePadding}>
                <Appbar style={clr}>
                    <Desktop>
                        <div>
                            <div className="mui--text-display1 mui--text-center"
                                 style={routeText}>{routeDescription}</div>
                        </div>
                    </Desktop>
                    <Mobile>
                        <div>
                            <div className="mui--text-subhead mui--text-left"
                                 style={headerTextMobile}>{routeDescription}</div>
                        </div>
                    </Mobile>
                </Appbar>
            </div>
        )
    }
}

export default TaxisurfrAppbar
