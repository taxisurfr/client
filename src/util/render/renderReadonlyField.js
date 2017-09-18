import React from 'react'

const showWhiteBackground = {border: 'none', backgroundColor: 'white'};

export const renderConditions = ({hint, label, type, route}) => (
    <div>
        <div>
            <h2 className="mui--text-title">Features</h2>
            <table width="100%">
                {route && !route.pickupType.startsWith('SHUTTLE_') && <tbody>
                <tr>
                    <td>
                        <i className="fa fa-plus"/><span className="mui--text-title"> All fuel charges and expenses are included.</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-plus"/><span
                        className="mui--text-title"> Online booking with credit card.</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-plus"/><span className="mui--text-title"> 100% refund up to 24 hours before pickup.</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-plus"/><span
                        className="mui--text-title"> 5 or 7 seater air-conditioned taxi.</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-plus"/><span
                        className="mui--text-title"> Super sharing function (see below).</span>
                    </td>
                </tr>
                </tbody>}
                {route && route.pickupType == 'SHUTTLE_AIRPORT' && <tbody>
                <tr>
                    <td>
                        <i className="fa fa-plus"/><span
                        className="mui--text-title"> Pickup from the airport at {route.description}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-plus"/><span className="mui--text-title"> Price is per person.</span>
                    </td>
                </tr>
                </tbody>}
                {route && route.pickupType == 'SHUTTLE_HOTEL' && <tbody>
                <tr>
                    <td>
                        <i className="fa fa-plus"/><span
                        className="mui--text-title"> Pickup from your hotel approx. {route.description}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-plus"/><span className="mui--text-title"> Price is per person.</span>
                    </td>
                </tr>
                </tbody>}
            </table>
        </div>
    </div>
)


export const renderDescription = ({hint, label, type}) => (
    <div>
        <h2 className="mui--text-headline">Your Transfer</h2>
        <table width="100%">
            <tbody>
            <tr>
                <td>
                    <div className="mui--text-title">{hint}</div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
)
export const renderPrice = ({hint, label, type}) => (
    <div>

        <table width="100%">
            <tbody>
            <tr>
                <td>
                    <td><h2 className="mui--text-title">Price</h2></td>
                </td>
                <td>
                    <td>
                        <div className="mui--text-headline">{hint}</div>
                    </td>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
)
export const renderReadonly = ({hint, label, type}) => (
    <div style={showWhiteBackground}>
        <table width="100%">
            <tbody>
            <tr>
                <td>
                    <h2 className="mui--text-title">{label}</h2>
                </td>
                <td>
                    <h2 className="mui--text-title mui--text-right">{hint}</h2>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
)
export default renderReadonly
