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
require('rxjs/add/operator/toPromise');
var httpUtils_1 = require('./httpUtils');
var StarshipListComponent = (function () {
    function StarshipListComponent(http) {
        var _this = this;
        http.get('http://swapi.co/api/starships/', httpUtils_1.jsonRequestHeaders)
            .toPromise(Promise)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            return data;
        })
            .then(function (data) { return _this.starships = data.results; })
            .catch(console.error);
    }
    StarshipListComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h3>Starships</h3>\n    <ul>\n      <li *ngFor='let s of starships'>{{s.name}}</li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StarshipListComponent);
    return StarshipListComponent;
})();
exports.StarshipListComponent = StarshipListComponent;
//# sourceMappingURL=starshipList.js.map