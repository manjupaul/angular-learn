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
var httpUtils_ts_1 = require('./httpUtils.ts');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var Swapi = (function () {
    function Swapi(http) {
        this.http = http;
    }
    Swapi.prototype.getJson = function (url) {
        return this.http.get(url, httpUtils_ts_1.jsonRequestHeaders)
            .toPromise(Promise)
            .then(function (response) { return response.json(); });
    };
    Swapi.prototype.getPeople = function () {
        var _this = this;
        return this.getJson('http://swapi.co/api/people/')
            .then(function (response) { return response.results; })
            .then(function (x) { return _this.addSwappData(x); });
    };
    ;
    Swapi.prototype.getImageMap = function () {
        return this.getJson('data/imageMap.json');
    };
    ;
    Swapi.prototype.getPerson = function (id) {
        var _this = this;
        return this.getJson('http://swapi.co/api/people/' + id + '/')
            .then(function (x) { return _this.processFilmList(x); })
            .then(function (x) { return _this.addImageUrl(x); })
            .then(addBaseStats)
            .then(modifyGender);
    };
    ;
    Swapi.prototype.processFilmList = function (character) {
        var _this = this;
        var filmPromises = [];
        _.forEach(character.films, function (filmUrl) {
            filmPromises.push(_this.getJson(filmUrl)
                .then(function (film) { return film.title; }));
        });
        return Promise.all(filmPromises).then(function (films) {
            character.filmNames = films;
            return character;
        });
    };
    Swapi.prototype.addImageUrl = function (character) {
        return this.getImageMap().then(function (map) {
            character.imageUrl = map[character.name];
            return character;
        });
    };
    Swapi.prototype.addSwappData = function (characters) {
        var _this = this;
        var imagePromises = [];
        characters.forEach(addBaseStats);
        characters.forEach(addRace);
        characters.forEach(modifyGender);
        characters.forEach(addCharacterId);
        characters.forEach(function (x) { return imagePromises.push(_this.addImageUrl(x)); });
        return Promise.all(imagePromises).then(function (_) { return characters; });
    };
    Swapi = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Swapi);
    return Swapi;
})();
exports.Swapi = Swapi;
function addCharacterId(character) {
    var urlSegments = character.url.split('/');
    character.id = urlSegments[urlSegments.length - 2];
    return character;
}
function modifyGender(character) {
    character.gender = character.gender[0];
    return character;
}
function addRace(character) {
    if (character.gender === 'n/a') {
        character.race = 'droid';
    }
    else {
        character.race = 'human';
    }
    return character;
}
function addBaseStats(character) {
    var minStr = 8, minDex = 4;
    character.baseStr = Math.round(minStr + (character.mass + character.height) / 15000);
    character.baseDex = Math.round(minDex + Math.pow(1550000 / (character.mass + character.height), 0.3));
    if (character.baseStr > character.baseDex) {
        character.statPref = 'str';
    }
    else {
        character.statPref = 'dex';
    }
    return character;
}
//# sourceMappingURL=swapi.js.map