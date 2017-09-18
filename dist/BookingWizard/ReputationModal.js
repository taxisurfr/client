'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _reactFacebook = require('react-facebook');

var _reactFacebook2 = _interopRequireDefault(_reactFacebook);

var _reactFacebookPixel = require('react-facebook-pixel');

var _reactFacebookPixel2 = _interopRequireDefault(_reactFacebookPixel);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReputationModal = function (_Component) {
    _inherits(ReputationModal, _Component);

    function ReputationModal(props) {
        _classCallCheck(this, ReputationModal);

        var _this = _possibleConstructorReturn(this, (ReputationModal.__proto__ || Object.getPrototypeOf(ReputationModal)).call(this, props));

        _this.closeReviews = _this.closeReviews.bind(_this);
        _this.closeFacebook = _this.closeFacebook.bind(_this);
        _this.openReviews = _this.openReviews.bind(_this);
        _this.openFacebook = _this.openFacebook.bind(_this);
        _this.state = {
            showModalReviews: false,
            showModalFacebook: false
        };
        return _this;
    }

    _createClass(ReputationModal, [{
        key: 'closeReviews',
        value: function closeReviews() {
            this.setState({ showModalReviews: false });
        }
    }, {
        key: 'openReviews',
        value: function openReviews() {
            _reactFacebookPixel2.default.track('Lead', { type: 'reputation' });
            this.setState({ showModalReviews: true });
        }
    }, {
        key: 'closeFacebook',
        value: function closeFacebook() {
            this.setState({ showModalFacebook: false });
        }
    }, {
        key: 'openFacebook',
        value: function openFacebook() {
            this.setState({ showModalFacebook: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var popover = _react2.default.createElement(
                _reactBootstrap.Popover,
                { id: 'modal-popover', title: 'popover' },
                'very popover. such engagement'
            );
            var tooltip = _react2.default.createElement(
                _reactBootstrap.Tooltip,
                { id: 'modal-tooltip' },
                'wow.'
            );

            var settings = {
                dots: true,
                infinite: true,
                autoplay: true,
                pauseOnHover: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            };

            var base = 'https://app.taxisurfr.com/review/';

            /*
             const base = 'http://localhost:3000/review/';
             */

            var imgrep = {
                maxWidth: '100%',
                maxHeight: '100%'
            };

            var s1 = { verticalAlign: 'middle' };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'We are proud of our reputation for reliabilty and safety. Please have a look at some reviews from other passengers.'
                ),
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                        bsStyle: 'primary',
                        bsSize: 'large',
                        onClick: this.openReviews
                    },
                    'Our Reviews'
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { show: this.state.showModalReviews, onHide: this.close },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Header,
                        { closeButton: true },
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Title,
                            null,
                            'Reviews from our passengers'
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        null,
                        _react2.default.createElement(
                            _reactSlick2.default,
                            settings,
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '0001.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '0002.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00001.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00003.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00004.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00005.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00006.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00006.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00008.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00009.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00010.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00011.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00012.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00013.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00014.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00015.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00016.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00017.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00018.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: imgrep },
                                _react2.default.createElement('img', { src: base + '00019.jpg' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Footer,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { onClick: this.closeReviews },
                            'Close'
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { show: this.state.showModalFacebook, onHide: this.closeFacebook },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Header,
                        { closeButton: true },
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Title,
                            null,
                            'Our Facebook Page'
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        null,
                        _react2.default.createElement(
                            _reactFacebook2.default,
                            { appId: '123456789' },
                            _react2.default.createElement(_reactFacebook.Like, { href: 'http://www.facebook.com/taxisurfr', colorScheme: 'dark', showFaces: true, share: true })
                        ),
                        _react2.default.createElement(
                            _reactFacebook2.default,
                            { appId: '1651399821757463' },
                            _react2.default.createElement(_reactFacebook.Page, { href: 'http://www.facebook.com/taxisurfr', colorScheme: 'dark', showFaces: true, share: true })
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Footer,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { onClick: this.closeFacebook },
                            'Close'
                        )
                    )
                )
            );
        }
    }]);

    return ReputationModal;
}(_react.Component);

exports.default = ReputationModal;