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
var WrapperComponent = (function () {
    function WrapperComponent() {
    }
    WrapperComponent = __decorate([
        core_1.Component({
            selector: 'wrapper',
            template: "\n  <div class=\"card\">\n    <div class=\"card-content\">\n      <div class=\"card-title\">I wrap content</div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], WrapperComponent);
    return WrapperComponent;
})();
exports.WrapperComponent = WrapperComponent;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <wrapper>\n      <p>\n        This is a p tag. Its only job is to be transcluded into the wrapper directive.\n      </p>\n    </wrapper>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=wrapper.js.map