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
require('rxjs/add/operator/map');
var car_state_service_1 = require('../car-state.service');
var ValidityDisplayComponent = (function () {
    function ValidityDisplayComponent(carStateService) {
        this.carStateService = carStateService;
    }
    ValidityDisplayComponent.prototype.ngOnInit = function () {
        this.ok$ = this.carStateService.state$.map(function (carState) { return carState.ok; });
        this.message$ = this.carStateService.state$.map(function (carState) { return carState.message ? carState.message : 'ok!'; });
    };
    ValidityDisplayComponent = __decorate([
        core_1.Component({
            selector: 'validity-display',
            templateUrl: 'validity-display/validity-display.component.html',
            styleUrls: ['validity-display/validity-display.component.css']
        }), 
        __metadata('design:paramtypes', [car_state_service_1.CarStateService])
    ], ValidityDisplayComponent);
    return ValidityDisplayComponent;
})();
exports.ValidityDisplayComponent = ValidityDisplayComponent;
//# sourceMappingURL=validity-display.component.js.map