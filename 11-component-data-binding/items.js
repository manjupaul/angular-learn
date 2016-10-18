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
var OrderItems = (function () {
    function OrderItems() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], OrderItems.prototype, "items");
    OrderItems = __decorate([
        core_1.Component({
            selector: 'order-items',
            template: "\n  <div class=\"card\">\n    <div class=\"component-marker\">\n      OrderItems\n    </div>\n    <div class=\"card-content\">\n      <div class=\"card-title\">Order Items</div>\n      <ul class=\"collection\">\n        <li class=\"collection-item\" *ngFor=\"let item of items\">\n          {{item.quantity}}:\n          {{item.description}}</li>\n      </ul>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], OrderItems);
    return OrderItems;
})();
exports.OrderItems = OrderItems;
//# sourceMappingURL=items.js.map