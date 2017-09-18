'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _wizardReducer = require('./BookingWizard/wizardReducer');

var _wizardReducer2 = _interopRequireDefault(_wizardReducer);

var _contactReducer = require('./Contact/contactReducer');

var _contactReducer2 = _interopRequireDefault(_contactReducer);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _BrowserApp = require('./BrowserApp');

var _BrowserApp2 = _interopRequireDefault(_BrowserApp);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _moment3 = require('react-widgets/lib/localizers/moment');

var _moment4 = _interopRequireDefault(_moment3);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

require('slick-carousel/slick/slick.css');

require('slick-carousel/slick/slick-theme.css');

require('./BookingWizard/BookingApp.css');

require('./css/card.css');

require('fixed-data-table/dist/fixed-data-table.min.css');

require('react-widgets/dist/css/react-widgets.css');

require('muicss/dist/css/mui.min.css');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)(); // Add this at the top of the file

var middleware = (0, _reactRouterRedux.routerMiddleware)(history);

var rootReducer = (0, _redux.combineReducers)({
    wizardReducer: _wizardReducer2.default, contactReducer: _contactReducer2.default,
    form: _reduxForm.reducer,
    router: _reactRouterRedux.routerReducer
});

var loggerMiddleware = (0, _reduxLogger.createLogger)();

function configureStore(preloadedState) {

    return (0, _redux.createStore)(rootReducer, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware, middleware));
}

function globalize() {
    (0, _moment4.default)(_moment2.default);
    // Globalize.locale('en');
    // globalizeLocalizer(Globalize);
    // Globalize.formatMessage("intro-1");
}

var params = _qs2.default.parse('url?counter=5');
var counter = parseInt(params.counter, 10) || 0;

// Compile an initial state

var store = configureStore();

// const store =
//     (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

var dest = document.getElementById('root');

var render = function render() {
    globalize();
    _reactDom2.default.render(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_BrowserApp2.default, { history: history })
    ), dest);
};

render();