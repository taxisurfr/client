/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import {reduxForm} from 'redux-form'
import {Table, Column, Cell} from 'fixed-data-table';
import ContainerDimensions from 'react-container-dimensions'
import Panel from 'muicss/lib/react/panel';

const BookingDetailsShow = (props) => {
    const {booking, description, price, handleSubmit, pristine, previousPage, submitting, pickup} = props;
    const rows = [
        ['Date', booking.dateText],
        ['Name', booking.name],
        ['Email', booking.email],
        [pickup.type, booking.flightNo],
        [pickup.time, booking.landingTime],
        ['Passengers', booking.pax],
        ['Surfboards', booking.surfboards],
        ['Requirements', booking.requirements],
    ];
    const noborder = {
        border: 'none',
        backgroundColor: 'HoneyDew',
        paddingLeft: '0px',
        paddingRight: '0px'
    };
    const noBackground = {
        border: 'none',
        backgroundColor: 'white'
    };
    var dollars = price ? '$US' + price.cents / 100:'';

    return (

        <form onSubmit={handleSubmit}>
            <div id="xxx">
                <Panel id="yyy" style={noborder}>
                    <div id="xxx" style={noborder}>
                        <ContainerDimensions>
                            { ({width, height}) =>

                                <Table className="mui--align-middle"
                                       rowHeight={50}
                                       rowsCount={rows.length}
                                       width={width}
                                       maxHeight={500}
                                       headerHeight={50}>
                                    <Column
                                        header={<Cell></Cell>}
                                        cell={({rowIndex, ...props}) => (
                                            <Cell {...props}>
                                                <div
                                                    className="mui--text-right mui--text-title">{rows[rowIndex][0]}</div>
                                            </Cell>
                                        )}
                                        width={20}
                                        flexGrow={1}
                                    />
                                    <Column
                                        header={<Cell></Cell>}
                                        cell={({rowIndex, ...props}) => (
                                            <Cell {...props}>
                                                <div
                                                    className="mui--text-left mui--text-title">{rows[rowIndex][1]}</div>
                                            </Cell>
                                        )}
                                        width={20}
                                        flexGrow={1}
                                    />
                                </Table>
                            }
                        </ContainerDimensions>
                        <div style={noborder}>
                            <button type="button" className="previous" onClick={previousPage}>Previous
                            </button>
                            <button type="submit" disabled={pristine || submitting}>Pay {dollars}</button>
                        </div>
                    </div>
                </Panel>
            </div>
        </form>
    )
}
const validate = values => {
    const errors = {}
    return errors
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(BookingDetailsShow)
