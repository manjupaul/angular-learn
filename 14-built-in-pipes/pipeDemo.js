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
var PipeDemoComponent = (function () {
    function PipeDemoComponent() {
        this.myDate = new Date();
        this.someNumber = 12;
        this.items = ['abc', '123', 'xyzabcdef', 'abc123', '8756'];
        this.cars = [
            { brand: 'Toyota', year: 2014, color: 'Red' },
            { brand: 'Toyota', year: 2011, color: 'Green' },
            { brand: 'Ford', year: 2005, color: 'Black' },
            { brand: 'Ford', year: 2009, color: 'White' },
            { brand: 'Ford', year: 2013, color: 'Yellow' },
        ];
    }
    PipeDemoComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './pipeDemo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PipeDemoComponent);
    return PipeDemoComponent;
})();
exports.PipeDemoComponent = PipeDemoComponent;
//# sourceMappingURL=pipeDemo.js.map