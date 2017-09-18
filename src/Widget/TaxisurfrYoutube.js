import React, {Component, PropTypes} from 'react'
import YouTube from 'react-youtube';
import ContainerDimensions from 'react-container-dimensions'
class TaxisurfrYoutube extends Component {

    render() {
        const {width} = this.props;

        const opts = {
            height: '390',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        return (

            <YouTube
                videoId="_FH5v8ttzFQ"
                opts={opts}
                onReady={this._onReady}
            />);

    }
}

export default TaxisurfrYoutube
