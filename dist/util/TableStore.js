"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableStore = function () {
    function TableStore( /*number*/data) {
        _classCallCheck(this, TableStore);

        this.size = data.length;
        this._cache = data;
    }

    _createClass(TableStore, [{
        key: "getObjectAt",
        value: function getObjectAt( /*number*/index) /*?object*/{
            if (index < 0 || index > this.size) {
                return undefined;
            }
            if (this._cache[index] === undefined) {
                this._cache[index] = this.getFinanceData(index);
            }
            return this._cache[index];
        }

        /**
         * Populates the entire cache with data.
         * Use with Caution! Behaves slowly for large sizes
         * ex. 100,000 rows
         */

    }, {
        key: "getAll",
        value: function getAll() {
            if (this._cache.length < this.size) {
                for (var i = 0; i < this.size; i++) {
                    this.getObjectAt(i);
                }
            }
            return this._cache.slice();
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return this.size;
        }
    }]);

    return TableStore;
}();

exports.default = TableStore;