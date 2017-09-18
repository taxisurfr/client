"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderTextArea = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _textarea = require("muicss/lib/react/textarea");

var _textarea2 = _interopRequireDefault(_textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderTextArea = exports.renderTextArea = function renderTextArea(_ref) {
    var input = _ref.input,
        placeholder = _ref.placeholder,
        label = _ref.label,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "label",
            null,
            label
        ),
        _react2.default.createElement(_textarea2.default, _extends({ label: placeholder }, input, { defaultValue: "" }))
    );
};

exports.default = renderTextArea;