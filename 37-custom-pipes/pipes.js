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
var CheckmarkPipe = (function () {
    function CheckmarkPipe() {
    }
    CheckmarkPipe.prototype.transform = function (input) {
        var checkMark = '\u2713';
        var xMark = '\u2718';
        return input ? checkMark : xMark;
    };
    CheckmarkPipe = __decorate([
        core_1.Pipe({
            name: 'checkmark'
        }), 
        __metadata('design:paramtypes', [])
    ], CheckmarkPipe);
    return CheckmarkPipe;
})();
exports.CheckmarkPipe = CheckmarkPipe;
var ToCapsPipe = (function () {
    function ToCapsPipe() {
    }
    ToCapsPipe.prototype.transform = function (input) {
        if (input && input.toUpperCase) {
            return input.toUpperCase();
        }
        return input;
    };
    ToCapsPipe = __decorate([
        core_1.Pipe({
            name: 'toCaps'
        }), 
        __metadata('design:paramtypes', [])
    ], ToCapsPipe);
    return ToCapsPipe;
})();
exports.ToCapsPipe = ToCapsPipe;
var ContainsXPipe = (function () {
    function ContainsXPipe() {
    }
    ContainsXPipe.prototype.transform = function (collection, searchTerm) {
        if (collection && collection.filter) {
            return collection.filter(function (v) { return v.indexOf(searchTerm) > -1; });
        }
        return collection;
    };
    ContainsXPipe = __decorate([
        core_1.Pipe({
            name: 'containsX'
        }), 
        __metadata('design:paramtypes', [])
    ], ContainsXPipe);
    return ContainsXPipe;
})();
exports.ContainsXPipe = ContainsXPipe;
var FieldRangePipe = (function () {
    function FieldRangePipe() {
    }
    FieldRangePipe.prototype.transform = function (input, fieldName, lower, upper) {
        if (input && input.filter) {
            return input.filter(function (v) { return (v[fieldName] >= lower && v[fieldName] <= upper); });
        }
        return input;
    };
    FieldRangePipe = __decorate([
        core_1.Pipe({
            name: 'fieldRange'
        }), 
        __metadata('design:paramtypes', [])
    ], FieldRangePipe);
    return FieldRangePipe;
})();
exports.FieldRangePipe = FieldRangePipe;
//# sourceMappingURL=pipes.js.map