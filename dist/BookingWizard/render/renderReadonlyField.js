"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.renderReadonly = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderReadonly = exports.renderReadonly = function renderReadonly(_ref) {
        var hint = _ref.hint,
            label = _ref.label,
            type = _ref.type;
        return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                        "label",
                        null,
                        label
                ),
                _react2.default.createElement(
                        "div",
                        { className: "mui--text-right mui--text-headline" },
                        hint
                )
        );
};
exports.default = renderReadonly;