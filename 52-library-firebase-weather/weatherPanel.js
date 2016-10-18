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
var angular2_firebase_1 = require('angular2-firebase');
var firebase_1 = require('firebase');
var WeatherPanel = (function () {
    function WeatherPanel() {
    }
    WeatherPanel.prototype.ngOnInit = function () {
        //  This can't be called in the constructor because the properties
        // from the parent template are not yet populated.
        var _this = this;
        var weatherURL = 'https://publicdata-weather.firebaseio.com/';
        var city = new firebase_1.default(weatherURL).child(this.city);
        this.hourly$ = angular2_firebase_1.observableFirebaseArray(city.child('hourly/data').limitToLast(10));
        this.subscription = angular2_firebase_1.observableFirebaseObject(city.child('currently'))
            .subscribe(function (c) { return _this.currently = c; });
    };
    WeatherPanel.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WeatherPanel.prototype, "city");
    WeatherPanel = __decorate([
        core_1.Component({
            selector: 'weather-panel',
            templateUrl: './weatherPanel.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherPanel);
    return WeatherPanel;
})();
exports.WeatherPanel = WeatherPanel;
//# sourceMappingURL=weatherPanel.js.map