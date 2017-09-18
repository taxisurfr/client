import React, {Component, PropTypes} from 'react'
import Appbar from 'muicss/lib/react/appbar';
import NavLink from '../util/NavLink'
import FontAwesome from 'react-fontawesome'
import Responsive from 'react-responsive';
class TaxisurfrAppbar extends Component {
    render() {
        const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />;
        const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;

        const removePadding = {
            paddingLeft: '0px',
            paddingRight: '0px'
        };
        const taxisurfr = {
            color: 'blue',
            fontFamily: 'Cooper Black, Georgia, Serif',
            fontSize: 32
        };
        var taxisurfrImgDesktop = {padding: '10px', height: '150px', cursor: 'pointer'};
        var taxisurfrImgMobile = {padding: '0px', height: '50px'};

        const clrText = {color: 'black',marginLeft:'12%'};
        const clrTextMobile = {color: 'black',marginLeft:'10px'};
        const clr = {backgroundColor: '#66ff99'};

        const s1 = {verticalAlign: 'middle'};
        const s2 = {textAlign: 'right', color: 'black',paddingRight: '5px'};
        var style = {
            color: 'white',
            fontSize: 24
        }
        var home = {
            color: 'seagreen',
        }
        /*
         const base = 'https://app.taxisurfr.com/review/';
         */
        const base = 'http://localhost:3000/image/';
        return (
            <div style={removePadding}>
                <Appbar style={clr}>
                    <table width="100%">
                        <tbody>
                        <tr style={s1}>
                            <td className="mui--text-left">
                                <Desktop>
                                    <img onClick={() => {
                                        this.props.navigateHome() }} style={taxisurfrImgDesktop} src="/image/fb_hi.png" alt="taxisurfr">
                                    </img>
                                </Desktop>
                                <Mobile>
                                    <img onClick={() => { this.props.navigateHome() }} style={taxisurfrImgMobile} src="/image/fb_hi.png" alt="taxisurfr"/>
                                </Mobile>
                            </td>
                            <td className="mui--appbar-height">
                                <Desktop>
                                    <div>
                                        <div className="mui--text-display1 mui--text-left" style={clrText}>{this.props.headline}</div>
                                        <div className="mui--text-headline mui--text-left" style={clrText}>{this.props.rupee}</div>
                                    </div>                                </Desktop>
                                <Mobile>
                                    <div>
                                        <div className="mui--text-subhead mui--text-left" style={clrTextMobile}>{this.props.headline}</div>
                                        <div className="mui--text-subhead mui--text-left" style={clrTextMobile}>{this.props.rupee}</div>
                                    </div>                                </Mobile>

                            </td>
                            <Desktop>
                           {/* <td className="mui--appbar-height" style={s2}><NavLink
                                className="mui--text-title mui--text-right" style={s2}
                                to="/taxisurfr">Other routes</NavLink>


                            </td>*/}
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
