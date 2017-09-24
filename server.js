#!/bin/env node
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _server = require('react-dom/server');

var _ServerApp = require('./ServerApp');

var _ServerApp2 = _interopRequireDefault(_ServerApp);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _redux = require('redux');

var _wizardReducer = require('../BookingWizard/wizardReducer');

var _wizardReducer2 = _interopRequireDefault(_wizardReducer);

var _reduxForm = require('redux-form');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _network = require('../util/network');

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  OpenShift sample Node application
var express = require('express');
var fs = require('fs');
var cors = require('cors');

_nodeFetch2.default.Promise = _bluebird2.default;


//var expressLogging = require('express-logging'),
//    logger = require('logops');

/**
 *  Define the sample application.
 */
var SampleApp = function SampleApp() {

    //  Scope.
    var self = this;

    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function () {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        }
        ;
    };

    self.init = function (json, url, res) {
        var rootReducer = (0, _redux.combineReducers)({
            wizardReducer: _wizardReducer2.default,
            form: _reduxForm.reducer
        });

        var loggerMiddleware = (0, _reduxLogger.createLogger)();
        var history = (0, _createMemoryHistory2.default)();

        function configureStore(preloadedState) {
            _wizardReducer2.default.page = -1;
            _wizardReducer2.default.country = 'lka';
            _wizardReducer2.default.route = json;
            return (0, _redux.createStore)(rootReducer, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware));
        }

        function globalize() {
            momentLocalizer(Moment);
            // Globalize.locale('en');
            // globalizeLocalizer(Globalize);
            // Globalize.formatMessage("intro-1");
        }

        var preloadedState = { wizardReducer: _wizardReducer2.default };

        var store = configureStore(preloadedState);

        var isMobile = true;
        var initialState = { isMobile: isMobile };
        var appString = (0, _server.renderToString)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_ServerApp2.default, { history: history })
        ));
        console.log('setup app cache');
        self.zcache[url] = (0, _template2.default)({
            body: appString,
            title: 'taxisurfr.com',
            initialState: JSON.stringify(initialState)
        });
        res.send(self.cache_get(url));
    };
    /**
     *  Populate the cache.
     */
    self.populateCache = function () {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'build/index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['build/index.html'] = fs.readFileSync('./build/index.html');
    };

    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function (key) {
        return self.zcache[key];
    };

    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function (sig) {
        if (typeof sig === "string") {
            console.log('%s: Received %s - terminating sample app ...', Date(Date.now()), sig);
            process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()));
    };

    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function () {
        //  Process on exit and signals.
        process.on('exit', function () {
            self.terminator();
        });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'].forEach(function (element, index, array) {
            process.on(element, function () {
                self.terminator(element);
            });
        });
    };

    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function () {
        self.routes = {};

        self.routes['/asciimo'] = function (req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };
        self.routes['/lka_/**'] = function (req, res) {
            function getRoute(link, receiveRoute, res) {
                var url = 'https://taxisurfr-taxisurfr.rhcloud.com/rest/api' + link;
                return (0, _nodeFetch2.default)(url).then(function (response) {
                    return response.json();
                }).then(function (responseJson) {
                    return receiveRoute(responseJson, link, res);
                }).catch(function (error) {
                    console.error(error);
                });
            }

            var content = self.cache_get(req.url);
            if (content) {
                console.log("_using cache for " + req.url);
                res.setHeader('Content-Type', 'text/html');
                res.send(content);
            } else {
                console.log("filling cache for " + req.url);
                getRoute(req.url, self.init, res);
            }
        };
        self.routes['/'] = function (req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('build/index.html'));
        };
        self.routes['/share/**'] = function (req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('build/index.html'));
        };
        self.routes['/lka/**'] = function (req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('build/index.html'));
        };
        self.routes['/taxi**'] = function (req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('build/index.html'));
        };
        self.routes['/contact'] = function (req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('build/index.html'));
        };
        self.routes['/arugambay'] = function (req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('build/index.html'));
        };
    };

    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function () {
        self.createRoutes();
        self.app = express();
        self.app.use(cors());
        //self.app.use(expressLogging(logger));

        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };

    /**
     *  Initializes the sample application.
     */
    self.initialize = function () {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };

    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function () {
        self.app.use(express.static('build'));

        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function () {
            console.log('%s: Node server started on %s:%d ...', Date(Date.now()), self.ipaddress, self.port);
        });
    };
};
/*  Sample Application.  */

/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();