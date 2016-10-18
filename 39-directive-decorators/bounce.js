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
var Bounce = (function () {
    function Bounce() {
        this.speed = 25;
        this.n = 0;
    }
    Bounce.prototype.ngOnInit = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            _this.n = _this.n + 0.1;
        }, this.speed);
    };
    Bounce.prototype.rotation = function () {
        return Math.sin(this.n) * 5;
    };
    Bounce.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Bounce.prototype, "speed");
    Bounce = __decorate([
        core_1.Directive({
            selector: '[bounce]',
            host: {
                '[style.transform]': "'rotate(' + rotation() + 'deg)'"
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Bounce);
    return Bounce;
})();
exports.Bounce = Bounce;
//# sourceMappingURL=bounce.js.map