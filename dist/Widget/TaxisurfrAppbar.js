'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _appbar = require('muicss/lib/react/appbar');

var _appbar2 = _interopRequireDefault(_appbar);

var _NavLink = require('../util/NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaxisurfrAppbar = function (_Component) {
    _inherits(TaxisurfrAppbar, _Component);

    function TaxisurfrAppbar() {
        _classCallCheck(this, TaxisurfrAppbar);

        return _possibleConstructorReturn(this, (TaxisurfrAppbar.__proto__ || Object.getPrototypeOf(TaxisurfrAppbar)).apply(this, arguments));
    }

    _createClass(TaxisurfrAppbar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var Desktop = function Desktop(_ref) {
                var children = _ref.children;
                return _react2.default.createElement(_reactResponsive2.default, { minWidth: 768, children: children });
            };
            var Mobile = function Mobile(_ref2) {
                var children = _ref2.children;
                return _react2.default.createElement(_reactResponsive2.default, { maxWidth: 768, children: children });
            };

            var removePadding = {
                paddingLeft: '0px',
                paddingRight: '0px'
            };
            var taxisurfr = {
                color: 'blue',
                fontFamily: 'Cooper Black, Georgia, Serif',
                fontSize: 32
            };
            var taxisurfrImgDesktop = { padding: '10px', height: '150px', cursor: 'pointer' };
            var taxisurfrImgMobile = { padding: '0px', height: '50px' };

            var clrText = { color: 'black', marginLeft: '12%' };
            var clrTextMobile = { color: 'black', marginLeft: '10px' };
            var clr = { backgroundColor: '#66ff99' };

            var s1 = { verticalAlign: 'middle' };
            var s2 = { textAlign: 'right', color: 'black', paddingRight: '5px' };
            var style = {
                color: 'white',
                fontSize: 24
            };
            var home = {
                color: 'seagreen'
                /*
                 const base = 'https://app.taxisurfr.com/review/';
                 */
            };var base = 'http://localhost:3000/image/';
            return _react2.default.createElement(
                'div',
                { style: removePadding },
                _react2.default.createElement(
                    _appbar2.default,
                    { style: clr },
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
                                    { className: 'mui--text-left' },
                                    _react2.default.createElement(
                                        Desktop,
                                        null,
                                        _react2.default.createElement('img', { onClick: function onClick() {
                                                _this2.props.navigateHome();
                                            }, style: taxisurfrImgDesktop, src: '/image/fb_hi.png', alt: 'taxisurfr' })
                                    ),
                                    _react2.default.createElement(
                                        Mobile,
                                        null,
                                        _react2.default.createElement('img', { onClick: function onClick() {
                                                _this2.props.navigateHome();
                                            }, style: taxisurfrImgMobile, src: '/image/fb_hi.png', alt: 'taxisurfr' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'td',
                                    { className: 'mui--appbar-height' },
                                    _react2.default.createElement(
                                        Desktop,
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'mui--text-display1 mui--text-left', style: clrText },
                                                this.props.headline
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'mui--text-headline mui--text-left', style: clrText },
                                                this.props.rupee
                                            )
                                        ),
                                        '                                '
                                    ),
                                    _react2.default.createElement(
                                        Mobile,
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'mui--text-subhead mui--text-left', style: clrTextMobile },
                                                this.props.headline
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'mui--text-subhead mui--text-left', style: clrTextMobile },
                                                this.props.rupee
                                            )
                                        ),
                                        '                                '
                                    )
                                ),
                                _react2.default.createElement(
                                    Desktop,
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        { className: 'mui--appbar-height', style: s2 },
                                        _react2.default.createElement(
                                            _NavLink2.default,
                                            {
                                                className: 'mui--text-title mui--text-right', style: s2,
                                                to: '/contact' },
                                            'Contact'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TaxisurfrAppbar;
}(_react.Component);

exports.default = TaxisurfrAppbar;