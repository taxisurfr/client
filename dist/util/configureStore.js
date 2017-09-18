'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _sharingDataReducer = require('../Transport/sharingDataReducer');

var _sharingDataReducer2 = _interopRequireDefault(_sharingDataReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger.createLogger)();

function configureStore(preloadedState) {
    return (0, _redux.createStore)(_sharingDataReducer2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware));
}