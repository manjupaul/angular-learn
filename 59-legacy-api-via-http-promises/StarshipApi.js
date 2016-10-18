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
var http_1 = require('@angular/http');
var httpUtils_1 = require('./httpUtils');
var StarshipApi = (function () {
    function StarshipApi(http) {
        this.http = http;
    }
    StarshipApi.prototype.loadStarships = function () {
        var _this = this;
        return this.http.get('http://swapi.co/api/starships/', httpUtils_1.jsonRequestHeaders)
            .toPromise(Promise)
            .then(function (response) { return response.json(); })
            .then(function (shipList) {
            console.log('Ship list retrieved, GETting film data', shipList);
            return Promise.all(shipList.results.map(function (ship) {
                console.log('GETting film data for ' + ship.name);
                return _this.http.get(ship.films[0], httpUtils_1.jsonRequestHeaders)
                    .toPromise(Promise)
                    .then(function (response) { return response.json(); })
                    .then(function (film) {
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
//# sourceMappingURL=StarshipApi.js.map