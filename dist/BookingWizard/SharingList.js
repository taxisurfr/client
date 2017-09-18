'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _fixedDataTable = require('fixed-data-table');

var _fixedDataTable2 = _interopRequireDefault(_fixedDataTable);

var _reactContainerDimensions = require('react-container-dimensions');

var _reactContainerDimensions2 = _interopRequireDefault(_reactContainerDimensions);

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

var _ReputationModal = require('./ReputationModal');

var _ReputationModal2 = _interopRequireDefault(_ReputationModal);

var _reactFacebookPixel = require('react-facebook-pixel');

var _reactFacebookPixel2 = _interopRequireDefault(_reactFacebookPixel);

var _renderReadonlyField = require('../util/render/renderReadonlyField');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Table = _fixedDataTable2.default.Table,
    Column = _fixedDataTable2.default.Column,
    Cell = _fixedDataTable2.default.Cell;


var tooltip = _react2.default.createElement(
    _reactBootstrap.Tooltip,
    { id: 'tooltip' },
    _react2.default.createElement(
        'strong',
        null,
        'Click here to share this taxi'
    )
);
var tooltipSA = _react2.default.createElement(
    _reactBootstrap.Tooltip,
    { id: 'tooltip' },
    _react2.default.createElement(
        'strong',
        null,
        'Share announcement only. No taxi booked.'
    )
);
var tooltipTB = _react2.default.createElement(
    _reactBootstrap.Tooltip,
    { id: 'tooltip' },
    _react2.default.createElement(
        'strong',
        null,
        'Taxi booked and paid.'
    )
);

var TextCell = function TextCell(_ref) {
    var rowIndex = _ref.rowIndex,
        data = _ref.data,
        col = _ref.col,
        props = _objectWithoutProperties(_ref, ['rowIndex', 'data', 'col']);

    return _react2.default.createElement(
        _reactBootstrap.OverlayTrigger,
        { placement: 'left', overlay: tooltip },
        _react2.default.createElement(
            Cell,
            props,
            _react2.default.createElement(
                'div',
                { className: 'mui--text-right mui--text-title' },
                data.getObjectAt(rowIndex)[col]
            )
        )
    );
};

var StatusCell = function StatusCell(_ref2) {
    var rowIndex = _ref2.rowIndex,
        data = _ref2.data,
        col = _ref2.col,
        props = _objectWithoutProperties(_ref2, ['rowIndex', 'data', 'col']);

    return _react2.default.createElement(
        Cell,
        props,
        data.getObjectAt(rowIndex)[col] === 3 && _react2.default.createElement(
            _reactBootstrap.OverlayTrigger,
            { placement: 'left', overlay: tooltipSA },
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-handshake-o' }),
                _react2.default.createElement(
                    'span',
                    { className: 'mui--text-title' },
                    ' Share announcement'
                )
            )
        ),
        data.getObjectAt(rowIndex)[col] === 0 && _react2.default.createElement(
            _reactBootstrap.OverlayTrigger,
            { placement: 'left', overlay: tooltipTB },
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-cab' }),
                _react2.default.createElement(
                    'span',
                    { className: 'mui--text-title' },
                    ' Taxi ordered'
                )
            )
        )
    );
};

var SharingList = function (_React$Component) {
    _inherits(SharingList, _React$Component);

    function SharingList(props) {
        _classCallCheck(this, SharingList);

        var _this = _possibleConstructorReturn(this, (SharingList.__proto__ || Object.getPrototypeOf(SharingList)).call(this, props));

        _this.selectRow = _this.selectRow.bind(_this);
        return _this;
    }

    _createClass(SharingList, [{
        key: 'selectRow',
        value: function selectRow(event, index, object) {
            _reactFacebookPixel2.default.track('AddToWishlist', index);
            this.props.onSelectShare(index);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var show = { backgroundColor: 'HoneyDew' };
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                announceShare = _props.announceShare,
                route = _props.route;

            var sharingList = this.props.sharingList || null;
            var isShuttle = this.props.route ? this.props.route.pickupType.startsWith('SHUTTLE_') : false;
            var _props2 = this.props,
                routeShortDescription = _props2.routeShortDescription,
                routeLongDescription = _props2.routeLongDescription,
                price = _props2.price,
                priceSharing = _props2.priceSharing;

            var sharingListSize = sharingList === null || sharingList.getSize() === 0 ? 0 : sharingList.getSize();
            var hide = {
                display: sharingListSize === 0 ? 'none' : null
            };

            return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit },
                _react2.default.createElement(
                    'div',
                    { itemScope: true, itemType: 'http://schema.org/Offer' },
                    _react2.default.createElement(
                        _panel2.default,
                        { style: show },
                        _react2.default.createElement(
                            'div',
                            { className: 'mui--text-left' },
                            _react2.default.createElement(_reduxForm.Field, { name: 'routeLongDescription', hint: routeLongDescription,
                                component: _renderReadonlyField.renderDescription,
                                label: 'Description' }),
                            _react2.default.createElement(_reduxForm.Field, { name: 'conditions', route: route, component: _renderReadonlyField.renderConditions,
                                label: 'Conditions' }),
                            _react2.default.createElement(
                                'button',
                                { type: 'submit', className: 'next' },
                                'Book now.'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mui--text-left' },
                    _react2.default.createElement(
                        _panel2.default,
                        { style: show },
                        _react2.default.createElement(_ReputationModal2.default, null)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    sharingListSize !== 0 && !isShuttle && _react2.default.createElement(
                        _panel2.default,
                        { style: show },
                        _react2.default.createElement(
                            'div',
                            { className: 'mui--text-left' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mui--text-headline' },
                                'Want to share a taxi?'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'mui--text-title' },
                                'Here are some existing orders and share announcements'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'mui--text-title' },
                                'Browse by clicking on the row'
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: hide },
                                _react2.default.createElement(
                                    _reactContainerDimensions2.default,
                                    null,
                                    function (_ref3) {
                                        var width = _ref3.width,
                                            height = _ref3.height;
                                        return _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                Table,
                                                _extends({
                                                    onRowClick: _this2.selectRow,
                                                    rowHeight: 30,
                                                    groupHeaderHeight: 30,
                                                    headerHeight: 30,
                                                    rowsCount: sharingListSize,
                                                    width: width - 15,
                                                    maxHeight: 500
                                                }, _this2.props),
                                                _react2.default.createElement(Column, {
                                                    fixed: true,
                                                    header: _react2.default.createElement(
                                                        Cell,
                                                        null,
                                                        'Pickup Date'
                                                    ),
                                                    cell: _react2.default.createElement(TextCell, { data: sharingList, col: 'dateText' }),
                                                    width: 17,
                                                    flexGrow: 1 }),
                                                _react2.default.createElement(Column, {
                                                    fixed: true,
                                                    header: _react2.default.createElement(
                                                        Cell,
                                                        null,
                                                        'Pickup Time'
                                                    ),
                                                    cell: _react2.default.createElement(TextCell, { data: sharingList, col: 'time' }),
                                                    width: 17,
                                                    flexGrow: 1 }),
                                                _react2.default.createElement(Column, {
                                                    fixed: true,
                                                    header: _react2.default.createElement(
                                                        Cell,
                                                        null,
                                                        'Status'
                                                    ),
                                                    cell: _react2.default.createElement(StatusCell, { data: sharingList, col: 'orderType' }),
                                                    width: 20,
                                                    flexGrow: 2 })
                                            )
                                        );
                                    }
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'mui--text-title' },
                                'Can\'t find anything and not yet ready to book and pay a taxi? Then simply create a share announcement.'
                            ),
                            _react2.default.createElement(
                                'button',
                                { type: 'button', className: 'next', onClick: announceShare },
                                'Announce share'
                            )
                        )
                    ),
                    sharingListSize === 0 && !isShuttle && _react2.default.createElement(
                        _panel2.default,
                        { style: show },
                        _react2.default.createElement(
                            'div',
                            { className: 'mui--text-left' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mui--text-title' },
                                'Want to share but not yet ready to book and pay a taxi? Then simply create a share announcement.'
                            ),
                            _react2.default.createElement(
                                'button',
                                { type: 'button', className: 'next', onClick: announceShare },
                                'Announce share'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SharingList;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({
    form: 'sharinglist', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: _validate2.default
})(SharingList);