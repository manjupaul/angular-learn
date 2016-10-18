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
var platform_browser_1 = require('@angular/platform-browser');
var TitleDisplayComponent = (function () {
    function TitleDisplayComponent(t) {
        this.pageTitle = t.getTitle();
    }
    TitleDisplayComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './titleDisplay.html'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], TitleDisplayComponent);
    return TitleDisplayComponent;
})();
exports.TitleDisplayComponent = TitleDisplayComponent;
//# sourceMappingURL=titleDisplay.js.map