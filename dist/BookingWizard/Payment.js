'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactRedux = require('react-redux');

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by peter on 28/01/2017.
 */
var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

var renderColorSelector = function renderColorSelector(_ref) {
    var input = _ref.input,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'select',
            input,
            _react2.default.createElement(
                'option',
                { value: '' },
                'Select a color...'
            ),
            colors.map(function (val) {
                return _react2.default.createElement(
                    'option',
                    { value: val, key: val },
                    val
                );
            })
        ),
        touched && error && _react2.default.createElement(
            'span',
            null,
            error
        )
    );
};

var WizardFormThirdPage = function WizardFormThirdPage(props) {
    var handleSubmit = props.handleSubmit,
        pristine = props.pristine,
        previousPage = props.previousPage,
        submitting = props.submitting;

    return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                null,
                'Payment'
            ),
            _react2.default.createElement(_reduxForm.Field, { name: 'favoriteColor', component: renderColorSelector })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                { htmlFor: 'employed' },
                'Employed'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reduxForm.Field, { name: 'employed', id: 'employed', component: 'input', type: 'checkbox' })
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                null,
                'Notes'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reduxForm.Field, { name: 'notes', component: 'textarea', placeholder: 'Notes' })
            )
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
                { type: 'submit', disabled: pristine || submitting },
                'Submit'
            )
        )
    );
};
exports.default = (0, _reduxForm.reduxForm)({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: _validate2.default
})(WizardFormThirdPage);