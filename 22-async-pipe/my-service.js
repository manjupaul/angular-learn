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
var rxjs_1 = require('rxjs');
var sampleShipData = [
    { name: 'Titanic', filmName: 'Titanic' },
    { name: 'Orca', filmName: 'Jaws' },
    { name: 'Poseidon', filmName: 'Poseidon' }
];
var MyService = (function () {
    function MyService() {
    }
    MyService.prototype.loadShips1 = function () {
        return rxjs_1.Observable.of(sampleShipData).delay(2000);
    };
    MyService.prototype.loadShips2 = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(sampleShipData); }, 3000);
        });
    };
    MyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MyService);
    return MyService;
})();
exports.MyService = MyService;
//# sourceMappingURL=my-service.js.map