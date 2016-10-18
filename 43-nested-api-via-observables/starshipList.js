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
var starshipApi_1 = require('./starshipApi');
require('rxjs/Rx');
var StarshipListComponent = (function () {
    function StarshipListComponent(api) {
        this.starships$ = api.starships();
    }
    StarshipListComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [starshipApi_1.StarshipApi],
            templateUrl: 'starshipList.html'
        }), 
        __metadata('design:paramtypes', [starshipApi_1.StarshipApi])
    ], StarshipListComponent);
    return StarshipListComponent;
})();
exports.StarshipListComponent = StarshipListComponent;
//# sourceMappingURL=starshipList.js.map