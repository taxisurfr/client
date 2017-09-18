import React, {Component} from 'react';
import {StaticRouter, Route} from 'react-router-dom';
import Appbar from 'muicss/lib/react/appbar';
import ServerBookingForm from "./ServerBookingForm";
import NavLink from '../util/NavLink'

class ServerApp extends Component {

    render() {
        const s1 = {verticalAlign: 'middle'};
        const s2 = {textAlign: 'right'};
        return (
            <div>
                <Appbar>
                    <table width="100%">
                        <tbody>
                        <tr style={s1}>

                            <td className="mui--text-display2 s1">taxisurfr</td>
                        </tr>
                        </tbody>
                    </table>
                </Appbar>
                <StaticRouter>
                    <Route>
                        <ServerBookingForm />
                    </Route>
                </StaticRouter>
            </div>

        );
    }
}

export default ServerApp;
