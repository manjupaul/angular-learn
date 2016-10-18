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
var GreenWrapperComponent = (function () {
    function GreenWrapperComponent() {
    }
    GreenWrapperComponent = __decorate([
        core_1.Component({
            selector: 'green-wrapper',
            styles: ['.card { border: solid green }'],
            template: "\n  <div class=\"card\">\n    <ng-content select=\"[header]\"></ng-content>\n    <ng-content select=\"[body]\"></ng-content>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], GreenWrapperComponent);
    return GreenWrapperComponent;
})();
exports.GreenWrapperComponent = GreenWrapperComponent;
//# sourceMappingURL=green-wrapper.component.js.map