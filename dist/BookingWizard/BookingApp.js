'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BookingForm = require('./BookingForm');

var _BookingForm2 = _interopRequireDefault(_BookingForm);

var _renderReadonlyField = require('../util/render/renderReadonlyField');

var _reduxForm = require('redux-form');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookingApp = function (_Component) {
    _inherits(BookingApp, _Component);

    function BookingApp() {
        _classCallCheck(this, BookingApp);

        return _possibleConstructorReturn(this, (BookingApp.__proto__ || Object.getPrototypeOf(BookingApp)).apply(this, arguments));
    }

    _createClass(BookingApp, [{
        key: 'render',
        value: function render() {
            var location = this.props.location;
            var history = this.props.history;

            var src = null;
            if (location && location.search) {
                var parsed = _queryString2.default.parse(location.search);
                src = parsed.s_;
            }
            (0, _actions.getSessionOnServer)('base', null, null, src);

            var base = 'https://app.taxisurfr.com/review/';
            var sectionStyle = {
                width: "100%",
                heightx: "400px",
                backgroundImage: "src( + { base + '0001.jpg' } + )"

            };
            return _react2.default.createElement(
                'div',
                { className: 'BookingApp-border', style: sectionStyle },
                _react2.default.createElement(
                    'div',
                    { className: 'BookingApp' },
                    _react2.default.createElement(_BookingForm2.default, { history: history, match: this.props.match, location: this.props.location, src: src })
                )
            );
        }
    }]);

    return BookingApp;
}(_react.Component);

exports.default = BookingApp;