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
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var httpUtils_1 = require('./httpUtils');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/share');
var AnakinComponent = (function () {
    function AnakinComponent(http) {
        this.showData = true;
        this.showExtraTime = true;
        this.name$ = http.get('http://swapi.co/api/people/11/', httpUtils_1.jsonRequestHeaders)
            .map(function (res) { return res.json(); })
            .do(function (thing) { return console.log(thing); })
            .map(function (data) { return data.name; });
        this.time$ = new Observable_1.Observable(function (observer) {
            console.log('Subscribing to time');
            var handle = setInterval(function () {
                console.log('emitting time');
                observer.next(new Date().getTime() % 10000);
            }, 100);
            return function () {
                console.log('Unsubscribing to time');
                clearInterval(handle);
            };
        }).share();
    }
    AnakinComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './anakin.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AnakinComponent);
    return AnakinComponent;
})();
exports.AnakinComponent = AnakinComponent;
//# sourceMappingURL=anakin.js.map