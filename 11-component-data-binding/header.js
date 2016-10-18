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
var OrderHeader = (function () {
    function OrderHeader() {
    }
    __decorate([
        core_1.Input('customerName'), 
        __metadata('design:type', String)
    ], OrderHeader.prototype, "customer");
    OrderHeader = __decorate([
        core_1.Component({
            selector: 'order-header',
            template: "\n  <div class=\"card\">\n    <div class=\"component-marker\">\n      OrderHeader\n    </div>\n    <div class=\"card-content\">\n      <div class=\"card-title\">{{customer}}</div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], OrderHeader);
    return OrderHeader;
})();
exports.OrderHeader = OrderHeader;
//# sourceMappingURL=header.js.map