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
var LayerOne = (function () {
    function LayerOne() {
    }
    LayerOne = __decorate([
        core_1.Component({
            selector: 'layer-one',
            template: "\n    <div class='card'>\n      <div class='card-content'>\n        <div class='card-title'>Layer 1 Component: </div>\n        <layer-two></layer-two>\n      </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], LayerOne);
    return LayerOne;
})();
exports.LayerOne = LayerOne;
//# sourceMappingURL=layer-one.component.js.map