"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.myTimeout = function (a, b) {
        console.log(a + b);
    };
    Customer.prototype.fooBar = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Die ID ist', _this.id);
        }, 2000);
        setTimeout(function () { return _this.myTimeout(_this.id, 5); }, 1000);
        return 5;
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map