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

var SharingAnnouncementDetailsCollection = function SharingAnnouncementDetailsCollection(props) {
    var show = { backgroundColor: 'HoneyDew' };
    var description = props.description,
        priceToJoin = props.priceToJoin,
        dateText = props.dateText,
        handleSubmit = props.handleSubmit,
        previousPage = props.previousPage,
        pickup = props.pickup;

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
                    { className: 'mui--text-left' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Hi, a fellow traveller has created this share announcement.',
                        _react2.default.createElement('br', null),
                        'Fill in the details below and these details will be sent to that person.',
                        _react2.default.createElement('br', null),
                        'When they agree, you will receive a message with their contact details and you can communicate directly.',
                        _react2.default.createElement('br', null),
                        'Important: the taxi has not been booked.'
                    ),
                    _react2.default.createElement(_reduxForm.Field, { hint: dateText, component: _renderReadonlyField.renderReadonly,
                        label: 'Pickup date' })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _panel2.default,
                { style: show },
                _react2.default.createElement(
                    'div',
                    { className: 'mui--text-left' },
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingName', hint: 'your name',
                        component: _renderField.renderInput, label: 'Your Name' }),
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingEmail', hint: 'your@email.com',
                        component: _renderField.renderInput, label: 'Your Email' }),
                    _react2.default.createElement(_reduxForm.Field, { name: 'sharingMessage', component: _renderTextArea.renderTextArea,
                        placeholder: ' Hi, I would like to share your taxi ...', label: 'Message' })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            null,
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
    );
};

exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false, // <------ unregister fields on unmount
    validate: _validate2.default
})(SharingAnnouncementDetailsCollection);