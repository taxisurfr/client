import React, {Component} from 'react';
import BookingForm from './BookingForm';
import {renderReadonly} from '../util/render/renderReadonlyField'
import {Field} from 'redux-form'
import queryString from 'query-string';

import {getSessionOnServer} from './actions';

class BookingApp extends Component {


    render() {
        const {location} = this.props;
        const {history}=this.props;
        var src = null;
        if (location && location.search) {
            var parsed = queryString.parse(location.search);
            src = parsed.s_;
        }
        getSessionOnServer('base', null, null, src);

        const base = 'https://app.taxisurfr.com/review/';
        const sectionStyle = {
            width: "100%",
            heightx: "400px",
            backgroundImage: "src( + { base + '0001.jpg' } + )"

        };
        return (
            <div className="BookingApp-border" style={ sectionStyle }>

                <div className="BookingApp" >
                    <BookingForm history={history}
                                 match={this.props.match}
                                 location={this.props.location}
                                 src={src}/>
                </div>
            </div>
        );
    }
}
export default BookingApp;
