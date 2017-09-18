'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BookingApp = require('./BookingWizard/BookingApp');

var _BookingApp2 = _interopRequireDefault(_BookingApp);

var _ContactForm = require('./Contact/ContactForm');

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _ShareForm = require('./Share/ShareForm');

var _ShareForm2 = _interopRequireDefault(_ShareForm);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _container = require('muicss/lib/react/container');

var _container2 = _interopRequireDefault(_container);

var _appbar = require('muicss/lib/react/appbar');

var _appbar2 = _interopRequireDefault(_appbar);

var _NavLink = require('./util/NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

var _reactFacebook = require('react-facebook');

var _reactFacebook2 = _interopRequireDefault(_reactFacebook);

var _reactFacebookPixel = require('react-facebook-pixel');

var _reactFacebookPixel2 = _interopRequireDefault(_reactFacebookPixel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrowserApp = function (_Component) {
    _inherits(BrowserApp, _Component);

    function BrowserApp(props) {
        _classCallCheck(this, BrowserApp);

        var _this = _possibleConstructorReturn(this, (BrowserApp.__proto__ || Object.getPrototypeOf(BrowserApp)).call(this, props));

        _this.connectBackButtonHandler = _this.connectBackButtonHandler.bind(_this);

        return _this;
    }

    _createClass(BrowserApp, [{
        key: 'connectBackButtonHandler',
        value: function connectBackButtonHandler() {
            var history = this.props.history;
            window.onbeforeunload = function () {
                history.push("/");
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.connectBackButtonHandler();
        }
    }, {
        key: 'render',
        value: function render() {
            var s2 = { textAlign: 'right' };
            _reactFacebookPixel2.default.init('254006428444239');
            _reactFacebookPixel2.default.pageView();

            var noborder = {
                paddingLeft: '0px',
                paddingRight: '0px'
            };

            return _react2.default.createElement(
                _container2.default,
                { fluid: true, style: noborder },
                _react2.default.createElement(
                    _reactRouterRedux.ConnectedRouter,
                    { history: this.props.history },
                    _react2.default.createElement(
                        _reactRouter.Switch,
                        null,
                        _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _ContactForm2.default }),
                        _react2.default.createElement(_reactRouter.Route, { path: '/share/:cmd?/:id?', component: _ShareForm2.default }),
                        _react2.default.createElement(_reactRouter.Route, { history: this.props.history, path: '*', component: _BookingApp2.default }),
                        _react2.default.createElement(_reactRouter.Route, { history: this.props.history, path: '/**', component: _BookingApp2.default })
                    )
                )
            );
        }
    }]);

    return BrowserApp;
}(_react.Component);

exports.default = BrowserApp;