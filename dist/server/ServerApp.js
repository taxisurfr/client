'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _appbar = require('muicss/lib/react/appbar');

var _appbar2 = _interopRequireDefault(_appbar);

var _ServerBookingForm = require('./ServerBookingForm');

var _ServerBookingForm2 = _interopRequireDefault(_ServerBookingForm);

var _NavLink = require('../util/NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerApp = function (_Component) {
    _inherits(ServerApp, _Component);

    function ServerApp() {
        _classCallCheck(this, ServerApp);

        return _possibleConstructorReturn(this, (ServerApp.__proto__ || Object.getPrototypeOf(ServerApp)).apply(this, arguments));
    }

    _createClass(ServerApp, [{
        key: 'render',
        value: function render() {
            var s1 = { verticalAlign: 'middle' };
            var s2 = { textAlign: 'right' };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _appbar2.default,
                    null,
                    _react2.default.createElement(
                        'table',
                        { width: '100%' },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                { style: s1 },
                                _react2.default.createElement(
                                    'td',
                                    { className: 'mui--text-display2 s1' },
                                    'taxisurfr'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactRouterDom.StaticRouter,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Route,
                        null,
                        _react2.default.createElement(_ServerBookingForm2.default, null)
                    )
                )
            );
        }
    }]);

    return ServerApp;
}(_react.Component);

exports.default = ServerApp;