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
var VisualsComponent = (function () {
    function VisualsComponent() {
        this.n = 1;
    }
    VisualsComponent.prototype.increment = function () {
        this.n++;
    };
    VisualsComponent.prototype.classFor = function (x) {
        if (x > 7) {
            return 'extra-class';
        }
    };
    VisualsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styleUrls: ['./component.css'],
            templateUrl: './visuals.html'
        }), 
        __metadata('design:paramtypes', [])
    ], VisualsComponent);
    return VisualsComponent;
})();
exports.VisualsComponent = VisualsComponent;
//# sourceMappingURL=visuals.js.map