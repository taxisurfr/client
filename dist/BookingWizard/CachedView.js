'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

var _renderReadonlyField = require('./render/renderReadonlyField');

var _NavLink = require('../util/NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CachedView = function (_React$Component) {
    _inherits(CachedView, _React$Component);

    function CachedView() {
        _classCallCheck(this, CachedView);

        return _possibleConstructorReturn(this, (CachedView.__proto__ || Object.getPrototypeOf(CachedView)).apply(this, arguments));
    }

    _createClass(CachedView, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                description = _props.description,
                price = _props.price;

            console.log(description);
            console.log(description);
            return _react2.default.createElement(
                _panel2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mui--text-left' },
                    _react2.default.createElement(_reduxForm.Field, { name: 'route', hint: description, component: _renderReadonlyField.renderReadonly,
                        label: 'Route' }),
                    _react2.default.createElement(_reduxForm.Field, { name: 'price', hint: price, component: _renderReadonlyField.renderReadonly,
                        label: 'Price' }),
                    _react2.default.createElement(
                        _NavLink2.default,
                        { to: '/arugambay' },
                        'Book this taxi'
                    )
                )
            );
        }
    }]);

    return CachedView;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: _validate2.default
})(CachedView);