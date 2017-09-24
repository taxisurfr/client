#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs = require('fs');
var cors = require('cors');
import React from 'react';
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server';
import ServerApp from './ServerApp';
import template from './template';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import wizardReducer  from '../BookingWizard/wizardReducer'
import {reducer as reduxFormReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {getUrl} from '../util/network';
import {getMethod} from '../util/network';
import fetch from 'node-fetch';
import Bluebird from 'bluebird';
fetch.Promise = Bluebird;
import createHistory from 'history/createMemoryHistory'

//var expressLogging = require('express-logging'),
//    logger = require('logops');

/**
 *  Define the sample application.
 */
var SampleApp = function () {

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


    self.init = function (json,url,res) {
        const rootReducer = combineReducers({
            wizardReducer,
            form: reduxFormReducer
        });

        const loggerMiddleware = createLogger();
        const history = createHistory();

        function configureStore(preloadedState) {
            wizardReducer.page = -1;
            wizardReducer.country = 'lka';
            wizardReducer.route = json;
            return createStore(
                rootReducer,
                preloadedState,
                applyMiddleware(
                    thunkMiddleware,
                    loggerMiddleware
                )
            )
        }

 /*       function globalize() {
            momentLocalizer(Moment);
            // Globalize.locale('en');
            // globalizeLocalizer(Globalize);
            // Globalize.formatMessage("intro-1");
        }
*/
        let preloadedState = {wizardReducer};

        const store = configureStore(preloadedState);

        const isMobile = true;
        const initialState = {isMobile};
        const appString = renderToString(
            <Provider store={store}>
                <ServerApp history={history}/>
            </Provider>
        );
        console.log('setup app cache')
        self.zcache[url] = template({
            body: appString,
            title: 'taxisurfr.com',
            initialState: JSON.stringify(initialState)
        });
        res.send(self.cache_get(url));
    }
    /**
     *  Populate the cache.
     */
    self.populateCache = function () {
        if (typeof self.zcache === "undefined") {
            self.zcache = {'build/index.html': ''};
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
            console.log('%s: Received %s - terminating sample app ...',
                Date(Date.now()), sig);
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
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
            'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function (element, index, array) {
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
            function getRoute(link, receiveRoute,res) {
                const url = 'https://taxisurfr-taxisurfr.rhcloud.com/rest/api' + link;
                return fetch(url)
                    .then((response) => response.json())
                    .then((responseJson) => receiveRoute(responseJson,link,res))
                    .catch((error) => {
                        console.error(error);
                    });
            }


            var content = self.cache_get(req.url);
            if (content){
                console.log("_using cache for "+req.url)
                res.setHeader('Content-Type', 'text/html');
                res.send(content);
            }else
            {
                console.log("filling cache for "+req.url)
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
            console.log('%s: Node server started on %s:%d ...',
                Date(Date.now()), self.ipaddress, self.port);
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

