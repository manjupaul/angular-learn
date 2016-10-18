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
var CounterDisplay = (function () {
    function CounterDisplay() {
        this.pick = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CounterDisplay.prototype, "label");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CounterDisplay.prototype, "counter");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CounterDisplay.prototype, "pick");
    CounterDisplay = __decorate([
        core_1.Component({
            selector: 'counter-display',
            templateUrl: './counter-display.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CounterDisplay);
    return CounterDisplay;
})();
exports.CounterDisplay = CounterDisplay;
;
//# sourceMappingURL=counter-display.js.map