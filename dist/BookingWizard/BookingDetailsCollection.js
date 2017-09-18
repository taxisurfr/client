'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _renderCalendar = require('../util/render/renderCalendar');

var _renderField = require('../util/render/renderField');

var _renderPassengerCountSelector = require('../util/render/renderPassengerCountSelector');

var _renderSurfboardCountSelector = require('../util/render/renderSurfboardCountSelector');

var _renderTextArea = require('../util/render/renderTextArea');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookingDetailsCollection = function (_React$Component) {
    _inherits(BookingDetailsCollection, _React$Component);

    function BookingDetailsCollection() {
        _classCallCheck(this, BookingDetailsCollection);

        return _possibleConstructorReturn(this, (BookingDetailsCollection.__proto__ || Object.getPrototypeOf(BookingDetailsCollection)).apply(this, arguments));
    }

    _createClass(BookingDetailsCollection, [{
        key: 'render',
        value: function render() {
            var show = { backgroundColor: 'HoneyDew' };
            var showWhiteBackground = { border: 'none', backgroundColor: 'white' };
            var _props = this.props,
                values = _props.values,
                description = _props.description,
                price = _props.price,
                handleSubmit = _props.handleSubmit,
                previousPage = _props.previousPage,
                announceShare = _props.announceShare,
                pickup = _props.pickup,
                shareAnnouncement = _props.shareAnnouncement,
                pickupType = _props.pickupType;

            var buttonAction = shareAnnouncement ? 'Announce share' : 'Book taxi';
            var isShuttle = pickupType.startsWith('SHUTTLE_');
            var isShuttleAirport = pickupType === 'SHUTTLE_AIRPORT';
            return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _panel2.default,
                        { style: show },
                        _react2.default.createElement(
                            'div',
                            null,
                            shareAnnouncement && _react2.default.createElement(
                                'div',
                                { className: 'mui--text-title mui--text-left' },
                                'This is where you can announce that you are considering a taxi and looking for people to share it.',
                                _react2.default.createElement('br', null),
                                'It is not a booking but simply information for fellow travellers.',
                                _react2.default.createElement('br', null),
                                'Fill in the details and they will appear in the list on the previous page when somebody else is looking at this route.',
                                _react2.default.createElement('br', null),
                                'When somebody is travelling at the same time, we will send you a message.',
                                _react2.default.createElement('br', null),
                                'Good luck!'
                            ),
                            !shareAnnouncement && _react2.default.createElement(
                                'div',
                                { className: 'mui--text-title mui--text-left' },
                                'Please fill in your details below to book your taxi.',
                                _react2.default.createElement('br', null)
                            ),
                            !isShuttle && _react2.default.createElement(_reduxForm.Field, { name: 'date', label: 'Date of pickup', component: _renderCalendar.renderCalendar }),
                            isShuttle && _react2.default.createElement(_reduxForm.Field, { name: 'date', label: 'Date of shuttle', component: _renderCalendar.renderShuttleCalendar }),
                            !isShuttleAirport && _react2.default.createElement(_reduxForm.Field, { name: 'flightNo', id: 'flightNo', hint: pickup.typeHint, component: _renderField.renderInput,
                                label: pickup.type }),
                            !isShuttle && _react2.default.createElement(_reduxForm.Field, { name: 'landingTime', label: pickup.time,
                                hint: pickup.timeHint, readonly: true,
                                component: _renderField.renderInput, type: 'input' }),
                            _react2.default.createElement(_reduxForm.Field, { name: 'name', id: 'name', hint: 'Your name',
                                component: _renderField.renderInput, label: 'Name' }),
                            _react2.default.createElement(_reduxForm.Field, { name: 'email', id: 'email', hint: 'your@email.com',
                                component: _renderField.renderInput, label: 'Email' }),
                            _react2.default.createElement(_reduxForm.Field, { name: 'passengers', value: '2 passengers', component: _renderPassengerCountSelector.renderPassengerCountSelector }),
                            _react2.default.createElement(_reduxForm.Field, { name: 'surfboards', component: _renderSurfboardCountSelector.renderSurfboardCountSelector }),
                            _react2.default.createElement(_reduxForm.Field, { name: 'requirements', component: _renderTextArea.renderTextArea,
                                placeholder: 'Additionally, I would like ...', label: 'Additionally I require ...' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'previous', onClick: previousPage },
                                    'Previous'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { type: 'submit', className: 'next' },
                                    buttonAction
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BookingDetailsCollection;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: _validate2.default
})(BookingDetailsCollection);