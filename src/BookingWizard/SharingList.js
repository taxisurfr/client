import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import FixedDataTable from 'fixed-data-table';
import ContainerDimensions from 'react-container-dimensions'
import Panel from 'muicss/lib/react/panel';
import Offer from './Offer';
import ReactPixel from 'react-facebook-pixel';

import {renderReadonly, renderConditions, renderDescription, renderPrice} from '../util/render/renderReadonlyField'

import {Carousel, Well, Popover, Glyphicon, Grid, Row, Col, Thumbnail, Image} from 'react-bootstrap';
import {Button, Tooltip, OverlayTrigger} from 'react-bootstrap';
import HotelDetails from "./HotelDetails";

const {Table, Column, Cell} = FixedDataTable;

const tooltip = (
    <Tooltip id="tooltip"><strong>Click here to share this taxi</strong></Tooltip>
);
const tooltipSA = (
    <Tooltip id="tooltip"><strong>Share announcement only. No taxi booked.</strong></Tooltip>
);
const tooltipTB = (
    <Tooltip id="tooltip"><strong>Taxi booked and paid.</strong></Tooltip>
);


const TextCell = ({rowIndex, data, col, ...props}) => (
    <OverlayTrigger placement="left" overlay={tooltip}>
        <Cell {...props}>
            <div className="mui--text-right mui--text-title">{data.getObjectAt(rowIndex)[col]}</div>
        </Cell>
    </OverlayTrigger>
);

const StatusCell = ({rowIndex, data, col, ...props}) => (
    <Cell {...props}>
        {data.getObjectAt(rowIndex)[col] === 3 &&
        <OverlayTrigger placement="left" overlay={tooltipSA}>
            <span><i className="fa fa-handshake-o"/><span className="mui--text-title"> Share announcement</span></span>
        </OverlayTrigger>
        }
        {data.getObjectAt(rowIndex)[col] === 0 &&
        <OverlayTrigger placement="left" overlay={tooltipTB}>
            <span><i className="fa fa-cab"/><span className="mui--text-title"> Taxi ordered</span></span>
        </OverlayTrigger>}
    </ Cell>
);

class SharingList extends React.Component {
    constructor(props) {
        super(props);
        this.selectRow = this.selectRow.bind(this);
    };

    selectRow(event, index, object) {
        ReactPixel.track('AddToWishlist', index);
        this.props.onSelectShare(index);
    }

    render() {
        var prices = this.props.prices && this.props.prices.length > 0 ? this.props.prices : [];
        const panelStyle = {backgroundColor: 'HoneyDew'};
        const {handleSubmit, announceShare} = this.props;
        var sharingList = this.props.sharingList || null;
        var sharingListSize = ((sharingList === null || sharingList.getSize() === 0)) ? 0 : sharingList.getSize();
        var hide = {
            display: (sharingListSize === 0) ? 'none' : null
        };
        return (
            <form onSubmit={handleSubmit}>
                <div itemScope itemType="http://schema.org/Offer">

                    <Panel style={panelStyle}>
                    {
                        prices.map((price) => {
                            return <Offer
                                exchangeRate={this.props.exchangeRate}
                                currency={this.props.currency}
                                price={price}
                                selectPrice={this.props.selectPrice}
                            />;
                        })
                    }

                    </Panel>
                </div>
                <div>
                    <Panel style={panelStyle}>
                        <div className="mui--text-left">
                            <Field name="conditions" component={renderConditions}
                                   label="Conditions"/>

                        </div>
                    </Panel>
                </div>
                {this.props.hotels && <div>
                    <Panel style={panelStyle}>
                        {
                            this.props.hotels.map((hotel) => {
                                return <HotelDetails
                                    hotel={hotel}
                                    selectPrice={this.props.selectHotel}
                                />;
                            })
                        }

                    </Panel>
                </div>}
                {!this.props.hotel && <div className="mui--text-left">
                    <Panel style={panelStyle}>
                        <div >
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                        </div>
                        <div className="trustpilot-widget" data-locale="en-US"
                             data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="5b40ab6b266600000141c164"
                             data-style-height="24px" data-style-width="100%" data-theme="light">
                            <a href="https://www.trustpilot.com/review/taxisurfr.com" target="_blank">Read our reviews</a>
                        </div>
                       {/* <Carousel>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/0001.jpg"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/00001.jpg"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/0002.jpg"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/00002.png"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/00003.jpg"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/00003.jpg"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/00004.jpg"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/00005.jpg"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/00006.jpg"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="http://app.taxisurfr.com/review/00007.jpg"/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>*/}
                    </Panel>
                </div>}
                {!this.props.hotel && <div>

                    {sharingListSize !== 0 && <Panel style={panelStyle}>
                        <div className="mui--text-left">
                            <div className="mui--text-headline">Want to share a taxi?</div>
                            <div className="mui--text-title">Here are some existing orders and share announcements
                            </div>
                            <div className="mui--text-title">Browse by clicking on the row</div>
                            <div style={hide}>
                                <ContainerDimensions>
                                    {({width, height}) =>
                                        <div>
                                            <Table
                                                onRowClick={this.selectRow}
                                                rowHeight={30}
                                                groupHeaderHeight={30}
                                                headerHeight={30}
                                                rowsCount={sharingListSize}
                                                width={width - 15}
                                                maxHeight={500}
                                                {...this.props}>
                                                <Column
                                                    fixed={true}
                                                    header={<Cell>Pickup Date</Cell>}
                                                    cell={<TextCell data={sharingList} col="dateText"/>}
                                                    width={17}
                                                    flexGrow={1}/>
                                                <Column
                                                    fixed={true}
                                                    header={<Cell>Pickup Time</Cell>}
                                                    cell={<TextCell data={sharingList} col="time"/>}
                                                    width={17}
                                                    flexGrow={1}/>
                                                <Column
                                                    fixed={true}
                                                    header={<Cell>Status</Cell>}
                                                    cell={<StatusCell data={sharingList} col="orderType"/>}
                                                    width={20}
                                                    flexGrow={2}/>
                                            </Table>
                                        </div>
                                    }
                                </ContainerDimensions>

                            </div>
                            <div className="mui--text-title">Can't find anything and not yet ready to book and pay a
                                taxi? Then simply create a share announcement.
                            </div>
                            <button type="button" className="next" onClick={announceShare}>Announce share</button>
                        </div>
                    </Panel>}

                    {sharingListSize === 0 && <Panel style={panelStyle}>
                        <div className="mui--text-left">
                            <div className="mui--text-title">Want to share but not yet ready to book and pay a taxi?
                                Then simply create a share announcement.
                            </div>
                            <button type="button" className="next" onClick={announceShare}>Announce share</button>
                        </div>
                    </Panel>}
                </div>}
            </form>
        );
    }
}


export default reduxForm({
    form: 'sharinglist',  //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(SharingList)
