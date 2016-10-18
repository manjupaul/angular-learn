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
var forms_1 = require('@angular/forms');
var layers_1 = require('./layers');
var layer_one_component_1 = require('./layer-one.component');
var layer_two_component_1 = require('./layer-two.component');
var layer_three_component_1 = require('./layer-three.component');
var sharedData_1 = require('./sharedData');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                layers_1.LayerComponent,
                layer_one_component_1.LayerOne,
                layer_two_component_1.LayerTwo,
                layer_three_component_1.LayerThree
            ],
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule],
            bootstrap: [layers_1.LayerComponent],
            providers: [sharedData_1.SharedData]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map