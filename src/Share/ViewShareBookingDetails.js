/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import {reduxForm} from 'redux-form'
import {Table, Column, Cell} from 'fixed-data-table';
import ContainerDimensions from 'react-container-dimensions'

const ViewShareBookingDetails = (props) => {
    const bookingData =  [
        {
            "1": 'Route',
            "2": props.booking.route.startroute + ' to ' + props.booking.route.endroute,
        },
        {
            "1": 'Date',
            "2": props.booking.dateText
        },
        {
            "1": 'Flight No.',
            "2": props.booking.flightNo
        },
        {
            "1": 'Name',
            "2": props.booking.name
        },
        {
            "1": 'Email',
            "2": props.booking.email
        } ,{
            "1": 'Landing Time',
            "2": props.booking.landingTime
        } ,
        {
            "1": 'No. of passengers',
            "2": props.booking.passengers
        },
        {
            "1": 'Surfboards',
            "2": props.booking.surfboards
        },

        {
            "1": 'Requirements',
            "2": props.booking.requirements
        }

    ];

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

    const priceToJoin = props.booking ? '$US' + props.booking.route.centsToJoin / 100 : null;
    return (
        <div>
            <ContainerDimensions>
                { ({width, height}) =>
                    <div>

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
                                        <div className="mui--text-right mui--text-title">{rows[rowIndex][0]}</div>
                                    </Cell>
                                )}
                                width={20}
                                flexGrow={1}
                            />
                            <Column
                                header={<Cell></Cell>}
                                cell={({rowIndex, ...props}) => (
                                    <Cell {...props}>
                                        <div className="mui--text-left mui--text-title">{rows[rowIndex][1]}</div>
                                    </Cell>
                                )}
                                width={20}
                                flexGrow={1}
                            />
                        </Table>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <button type="submit">Pay {priceToJoin}</button>
                            </div>
                        </form>
                    </div>
                }
            </ContainerDimensions>
        </div>
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
})(ViewShareBookingDetails)
