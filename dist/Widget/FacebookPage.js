'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFacebook = require('react-facebook');

var _reactFacebook2 = _interopRequireDefault(_reactFacebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FacebookPage = function (_Component) {
    _inherits(FacebookPage, _Component);

    function FacebookPage() {
        _classCallCheck(this, FacebookPage);

        return _possibleConstructorReturn(this, (FacebookPage.__proto__ || Object.getPrototypeOf(FacebookPage)).apply(this, arguments));
    }

    _createClass(FacebookPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactFacebook2.default,
                    { appId: '1651399821757463', width: '100%' },
                    _react2.default.createElement(_reactFacebook.Page, { href: 'http://www.facebook.com/taxisurfr', colorScheme: 'dark', showFaces: true, share: true })
                )
            );
        }
    }]);

    return FacebookPage;
}(_react.Component);

exports.default = FacebookPage;