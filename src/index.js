import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {reducer as reduxFormReducer} from 'redux-form'
import wizardReducer  from './BookingWizard/wizardReducer'
import contactReducer  from './Contact/contactReducer'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import BrowserApp from './BrowserApp';
import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

import createHistory from 'history/createBrowserHistory'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './BookingWizard/BookingApp.css';
import './css/card.css';
import 'fixed-data-table/dist/fixed-data-table.min.css';
import 'react-widgets/dist/css/react-widgets.css'
import 'muicss/dist/css/mui.min.css'
import qs from 'qs' // Add this at the top of the file
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const history = createHistory();
const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
    wizardReducer,contactReducer,
    form: reduxFormReducer,
    router: routerReducer
});

const loggerMiddleware = createLogger();

function configureStore(preloadedState) {

    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            middleware
        )
    )
}

function globalize() {
    momentLocalizer(Moment);
    // Globalize.locale('en');
    // globalizeLocalizer(Globalize);
    // Globalize.formatMessage("intro-1");
}

const params = qs.parse('url?counter=5');
const counter = parseInt(params.counter, 10) || 0

// Compile an initial state

const store = configureStore();

// const store =
//     (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

const dest = document.getElementById('root')

let render = () => {
    globalize();
    ReactDOM.render(
        <Provider store={store}>
            <BrowserApp history={history}/>
        </Provider>,
        dest
    )
}

render()
