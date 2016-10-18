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
require('rxjs/add/observable/forkJoin');
var httpUtils_1 = require('./httpUtils');
var StarshipApi = (function () {
    function StarshipApi(http) {
        this.http = http;
    }
    StarshipApi.prototype.starships = function () {
        var _this = this;
        var url = 'http://swapi.co/api/starships/';
        return this.http.get(url, httpUtils_1.jsonRequestHeaders)
            .map(function (response) { return response.json(); })
            .map(function (shipWrapper) { return shipWrapper.results; })
            .flatMap(function (ships) {
            return Observable_1.Observable.forkJoin(ships.map(function (ship) {
                console.log('GETting film data for ' + ship.name);
                return _this.http.get(ship.films[0], httpUtils_1.jsonRequestHeaders)
                    .map(function (response) { return response.json(); })
                    .map(function (film) {
                    ship.filmName = film.title;
                    return ship;
                });
            }));
        });
    };
    StarshipApi = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StarshipApi);
    return StarshipApi;
})();
exports.StarshipApi = StarshipApi;
//# sourceMappingURL=starshipApi.js.map