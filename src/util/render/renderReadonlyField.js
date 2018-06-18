import React from 'react'

const showWhiteBackground = {border: 'none', backgroundColor: 'white'};

export const renderConditions = ({hint, label, type}) => (
    <div>
        <div>
            <h2 className="mui--text-title">Features</h2>
            <table width="100%">
                {true && <tbody>
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
                        className="mui--text-title"> Super taxi sharing function.</span>
                    </td>
                </tr>
                </tbody>}
            </table>
        </div>
    </div>
)


























export const renderDescription = ({hint, label, type}) => (
    <div>
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
                    <td><h1 className="mui--text-title"></h1></td>
                </td>
                <td>
                    <td>
                        <h1 className="mui--text-title">{hint}</h1>
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
