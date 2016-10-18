var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OrderList = (function () {
    function OrderList() {
        this.selectOrder = new core_1.EventEmitter();
    }
    OrderList.prototype.select = function (order) {
        this.selectOrder.emit(order);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], OrderList.prototype, "orders");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], OrderList.prototype, "selectOrder");
    OrderList = __decorate([
        core_1.Component({
            selector: 'order-list',
            templateUrl: 'orderList.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderList);
    return OrderList;
})();
exports.OrderList = OrderList;
//# sourceMappingURL=orderList.js.map