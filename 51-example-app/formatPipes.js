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
var StringCentimetersToNumberFeetPipe = (function () {
    function StringCentimetersToNumberFeetPipe() {
    }
    StringCentimetersToNumberFeetPipe.prototype.transform = function (input) {
        if (parseFloat(input)) {
            return parseFloat(input) / 32;
        }
        else {
            return input;
        }
    };
    StringCentimetersToNumberFeetPipe = __decorate([
        core_1.Pipe({
            name: 'stringCentimetersToNumberFeet'
        }), 
        __metadata('design:paramtypes', [])
    ], StringCentimetersToNumberFeetPipe);
    return StringCentimetersToNumberFeetPipe;
})();
exports.StringCentimetersToNumberFeetPipe = StringCentimetersToNumberFeetPipe;
var RoundToPipe = (function () {
    function RoundToPipe() {
    }
    RoundToPipe.prototype.transform = function (input, roundTo) {
        if (_.isNumber(input) && _.isNumber(roundTo)) {
            return Math.round(input * Math.pow(10, roundTo)) / Math.pow(10, roundTo);
        }
        else {
            return input;
        }
    };
    RoundToPipe = __decorate([
        core_1.Pipe({
            name: 'roundTo'
        }), 
        __metadata('design:paramtypes', [])
    ], RoundToPipe);
    return RoundToPipe;
})();
exports.RoundToPipe = RoundToPipe;
//# sourceMappingURL=formatPipes.js.map