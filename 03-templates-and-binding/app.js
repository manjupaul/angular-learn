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
var bindings_1 = require('./bindings');
var SomeModule1 = (function () {
    function SomeModule1() {
    }
    SomeModule1 = __decorate([
        core_1.NgModule({
            declarations: [bindings_1.BindingsComponent],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [bindings_1.BindingsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SomeModule1);
    return SomeModule1;
})();
exports.SomeModule1 = SomeModule1;
//# sourceMappingURL=app.js.map