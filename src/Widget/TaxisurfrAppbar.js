import React, {Component, PropTypes} from 'react'
import Appbar from 'muicss/lib/react/appbar';
import NavLink from '../util/NavLink'
import FontAwesome from 'react-fontawesome'
import Responsive from 'react-responsive';

class TaxisurfrAppbar extends Component {
    render() {
        const Desktop = ({children}) => <Responsive minWidth={768} children={children}/>;
        const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;

        const removePadding = {
            paddingLeft: '0px',
            paddingRight: '0px'
        };

        const titleText = {
            paddingTop: '24px',
            fontFamily: '"Lato",sans-serif',
            fontSize: 42,
            color: 'rgb(20, 215, 134)',
            marginLeft: '12%',
            fontFamily: 'Lato",sans-serif',
            fontStyle: 'normal',
            fontWeight: '700',
            letterSpacingx: '-0.035em'
        };

        const titleTextMobile = {
            paddingTop: '20px',
            fontFamily: '"Lato",sans-serif',
            fontSize: 32,
            color: 'rgb(20, 215, 134)',
            marginLeft: '12%',
            fontFamily: 'Lato",sans-serif',
            fontStyle: 'normal',
            fontWeight: '700',
            letterSpacingx: '-0.035em'
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
        const s2 = {textAlign: 'right', color: 'black',paddingRight: '5px'};
        var style = {
            color: 'white',
            fontSize: 24
        }

        var {price} =this.props;
        var routeDescription =price ? price.startroute.name +' to ' + price.endroute.name : '';

        const base = 'http://localhost:3000/image/';
        return (
            <div style={removePadding}>
                <Appbar style={clr}>
                    <table width="100%">
                        <tbody>
                        <tr style={s1}>
                            <td className="mui--text-left">
                                <Desktop>
                                    <div>
                                        <div style={titleText}>taxisurfr</div>
                                    </div>
                                </Desktop>
                                <Mobile>
                                    <div>
                                        <div style={titleTextMobile}>taxisurfr</div>
                                    </div>
                                </Mobile>
                            </td>
                            <td className="mui--appbar-height">
                                <Desktop>
                                    <div>
                                        <div className="mui--text-display1 mui--text-left"
                                             style={titleText}>{routeDescription}</div>
                                    </div>
                                </Desktop>
                                <Mobile>
                                    <div>
                                        <div className="mui--text-subhead mui--text-left"
                                             style={headerTextMobile}>{routeDescription}</div>
                                    </div>
                                </Mobile>

                            </td>
                            <Desktop>
                                <td className="mui--appbar-height" style={s2}><NavLink
                                    className="mui--text-title mui--text-right" style={s2}
                                    to="/contact">Contact</NavLink>
                                </td>
                            </Desktop>
                        </tr>
                        </tbody>
                    </table>
                </Appbar>
            </div>
        )
    }
}


export default TaxisurfrAppbar
