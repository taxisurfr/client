import React, {Component} from 'react';
import BookingForm from './BookingForm';
import queryString from 'query-string';
import Responsive from 'react-responsive';

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
        const sectionStyle_ = {
            width: "100%",
            heightx: "400px",
            backgroundImage: "src( + { base + '0001.jpg' } + )"

        };


        let Background = '/image/srilanka1.png'
        //let Background = 'https://images.unsplash.com/photo-1465924655546-6c184df810a9'
        //let Background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxQOQjBJMR_ld2QCFJGjOcvCmVtwBAFwAe0Wa5t6Pf7qgyFrsbw';
        //let Background = 'http://wpteam.online/ypasan/wp-content/uploads/2018/06/image2.jpg';

        const Desktop = ({children}) => <Responsive minWidth={768} children={children}/>;
        const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;

        let sectionStylex = {
        };

        let sectionStyle = {
            width: "100%",
            height: 'auto',
            backgroundImage: "url(" + Background + ")",
            positionx: 'fixed',
        };


        return (
            <div className="BookingApp-border">

                <Desktop>
                <div className="BookingApp" style={ sectionStyle }>
                    <BookingForm history={history}
                                 match={this.props.match}
                                 location={this.props.location}
                                 src={src}/>

                </div>
                </Desktop>

                <Mobile>
                <div className="BookingApp">
                    <BookingForm history={history}
                                 match={this.props.match}
                                 location={this.props.location}
                                 src={src}/>

                </div>
                </Mobile>
            </div>
        );
    }
}
export default BookingApp;
