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
var Blink = (function () {
    function Blink() {
        this.speed = 500;
        this.on = true;
    }
    Blink.prototype.ngOnInit = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            _this.on = !_this.on;
        }, this.speed);
    };
    Blink.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Blink.prototype, "speed");
    Blink = __decorate([
        core_1.Directive({
            selector: '[blink]',
            host: {
                '[style.visibility]': "on ? 'visible' : 'hidden'"
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Blink);
    return Blink;
})();
exports.Blink = Blink;
//# sourceMappingURL=blink.js.map