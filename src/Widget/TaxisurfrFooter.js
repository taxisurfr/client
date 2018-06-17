import React, {Component} from 'react'
import Appbar from 'muicss/lib/react/appbar';
import Responsive from 'react-responsive';
import NavLink from '../util/NavLink'

class TaxisurfrAppbar extends Component {
    render() {
        const Desktop = ({children}) => <Responsive minWidth={768} children={children}/>;
        const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;
        const clr = {
            height: '200px',
            backgroundColor: '#2c3e50'
        };
        const contactText = {
            float: 'right',
            paddingTop: '58px',
            fontFamily: '"Lato",sans-serif',
            fontSize: 14,
            color: 'rgb(20, 215, 134)',
            position: 'absolute',
        right: '0px',
        width: '200px',
        height: '80px',
        };
        return (
            <div>
                <Appbar style={clr}>
                <Desktop>
                    <td ><NavLink
                        style={contactText}
                        to="/contact">Contact us.</NavLink>
                    </td>
                    <h2>Some of our most popular routes</h2>
                    <div>
                        <a href="https://app.taxisurfr.com/taxi-colombo-airport--arugam-bay"
                           target="_blank">Colombo
                            Airport to Arugam Bay</a>
                    </div>

                    <div>
                        <a href="https://app.taxisurfr.com/taxi-colombo-airport--mirissa"
                           target="_blank">Colombo
                            Airport to Mirissa</a>
                    </div>
                    <div>
                        <a href="https://app.taxisurfr.com/taxi-colombo-airport--weligama"
                           target="_blank">Colombo
                            Airport to Weligama</a>
                    </div>
                    {/*<div>
                                        <a href="https://app.taxisurfr.com/taxi-colombo-airport-arugam-bay" target="_blank">Colombo
                                            Airport to Arugam Bay</a>
                                    </div>*/}
                </Desktop>
                </Appbar>
            </div>
        )
    }
}


export default TaxisurfrAppbar
