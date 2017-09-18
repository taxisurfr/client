'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _renderField = require('../util/render/renderField');

var _renderReadonlyField = require('../util/render/renderReadonlyField');

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _renderPassengerCountSelector = require('../util/render/renderPassengerCountSelector');

var _renderSurfboardCountSelector = require('../util/render/renderSurfboardCountSelector');

var _renderTextArea = require('../util/render/renderTextArea');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SharingDetailsCollection = function SharingDetailsCollection(props) {
    var show = { backgroundColor: 'HoneyDew' };
    var showWhiteBackground = { border: 'none' };
    var description = props.description,
        priceToJoin = props.priceToJoin,
        dateText = props.dateText,
        handleSubmit = props.handleSubmit,
        previousPage = props.previousPage,
        pickup = props.pickup,
        shareAnnouncement = props.shareAnnouncement;

    var pickupLabel = "Your " + pickup.type;
    var pickupTimeLabel = "Your " + pickup.time;
    return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit },
        _react2.default.createElement(
            _panel2.default,
            { style: show },
            _react2.default.createElement(
                'div',
                null,
                shareAnnouncement && _react2.default.createElement(
                    'div',
                    { style: showWhiteBackground, className: 'mui--text-title mui--text-left' },
                    'Hi, this is how our taxi sharing works:',
                    _react2.default.createElement('br', null),
                    'Someone is interested in sharing a taxi on this route on ',
                    dateText,
                    '.',
                    _react2.default.createElement('br', null),
                    'They have not yet booked the taxi and are looking for people like you.',
                    _react2.default.createElement('br', null),
                    'Fill in the details below and your details will be sent to that person.',
                    _react2.default.createElement('br', null),
                    'They will then contact you directly.',
                    _react2.default.createElement('br', null),
                    'Good luck!'
                ),
                !shareAnnouncement && _react2.default.createElement(
                    'div',
                    { style: showWhiteBackground, className: 'mui--text-title mui--text-left' },
                    'Hi, this is how our taxi sharing works:',
                    _react2.default.createElement('br', null),
                    'A taxi has been ordered and paid for on ',
                    dateText,
                    '.',
                    _react2.default.createElement('br', null),
                    'The person who paid for the taxi might share it with you.',
                    _react2.default.createElement('br', null),
                    'Fill in the details below and these details will be sent to that person.',
                    _react2.default.createElement('br', null),
                    'When they agree, you will receive a message and you will be asked to pay the sharing price of ',
                    priceToJoin,
                    '.',
                    _react2.default.createElement('br', null),
                    'This amount will be refunded to the person who booked the taxi. ',
                    _react2.default.createElement('br', null),
                    'Good luck!'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mui--text-title mui--text-left' },
                    _react2.default.createElement(_reduxForm.Field, { hint: dateText, component: _renderReadonlyField.renderReadonly,
                        label: 'Pickup date is' }),
                    !shareAnnouncement && _react2.default.createElement(_reduxForm.Field, { hint: priceToJoin, component: _renderReadonlyField.renderReadonly,
                        label: 'Price to share' })
                ),
                _react2.default.createElement(
                    'div',
                    { style: showWhiteBackground, className: 'mui--text-left' },
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingFlightNo', hint: pickup.typeHint, component: _renderField.renderInput,
                        label: pickupLabel }),
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingLandingTime', label: pickupTimeLabel,
                        hint: pickup.timeHint,
                        component: _renderField.renderInput, type: ' input' }),
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingName', hint: 'your name',
                        component: _renderField.renderInput, label: 'Your Name' }),
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingEmail', hint: 'your@email.com',
                        component: _renderField.renderInput, label: 'Your Email' }),
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingPassengers', component: _renderPassengerCountSelector.renderPassengerCountSelector, label: ' Passengers' }),
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingSurfboards', component: _renderSurfboardCountSelector.renderSurfboardCountSelector, label: ' Surfboards' }),
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingMessage', component: _renderTextArea.renderTextArea,
                        placeholder: ' Hi, I would like to share your taxi ...', label: 'Message' })
                ),
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
                        'Send sharing request.'
                    )
                )
            )
        )
    );
};

exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false, // <------ unregister fields on unmount
    validate: _validate2.default
})(SharingDetailsCollection);