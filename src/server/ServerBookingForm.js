import React, {Component, PropTypes} from 'react'
import CachedView from './CachedView'
import {connect} from 'react-redux'
import Container from 'muicss/lib/react/container';

import {
} from './actions'

class ServerBookingForm extends Component {
    constructor(props) {
        super(props);
    }

    gotoClient(cents){
        ;
    }
    getRouteDescription(route){
        return route.startroute +' to ' + route.endroute;
    }
    getFormatedPrice(route){
        return route.cents ? '$US' + route.cents / 100 : null;
    }
    getRouteLinkUrl(route){
        return 'https://app.taxisurfr.com/lka/'+route.link;
    }
    render() {

        const {dispatch} = this.props;
        console.log('redirectto'+this.props.redirectToTaxisurfr)

        return (
            <Container fluid={true}>
            <CachedView
                    url={this.getRouteLinkUrl(this.props.route)}
                    description={this.getRouteDescription(this.props.route)}
                    price={this.getFormatedPrice(this.props.route)}
                    priceSharing={this.getFormatedPrice(this.props.route.centsToJoin)}
            />
            </Container>

        )
    }
}


ServerBookingForm.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const route = state.wizardReducer.route ? state.wizardReducer.route : {startroute: "xxx",endroute:"yyy"};
    const values = state.form.wizard && state.form.wizard.values ? state.form.wizard.values : null;
    return {
        route
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerBookingForm)
