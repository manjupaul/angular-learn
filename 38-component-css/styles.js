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
var StylesComponent = (function () {
    function StylesComponent() {
    }
    StylesComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n    <h3>Component CSS &amp; Encapsulation</h3>\n    <div class=\"card\">\n      <h5>Three components with different styles</h5>\n      <app-first></app-first>\n      <app-second></app-second>\n      <app-third></app-third>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], StylesComponent);
    return StylesComponent;
})();
exports.StylesComponent = StylesComponent;
//# sourceMappingURL=styles.js.map