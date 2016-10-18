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
var router_1 = require('@angular/router');
var swapi_1 = require('../swapi');
var characterCard_1 = require('./characterCard');
var stats_1 = require('./stats');
var points_1 = require('./points');
var template = "\n<div class=\"row\">\n  <div class=\"col-sm-6 col-md-push-2 col-md-4\">\n    <stats-form [stats]=\"userStats\" (statChange)=\"updateStats()\"></stats-form>\n  </div>\n  <div class=\"col-sm-6 col-md-push-2 col-md-4\">\n    <character-card [character]=\"characterDetails\" [dex]=\"calcDex()\" [str]=\"calcStr()\"></character-card>\n    <button (click)=\"storeCharacter()\" class=\"btn btn-default\" [disabled]=\"pointsUsed() > pointsLeft()\">\n      <a>Next</a>\n    </button>\n  </div>\n</div>\n";
var ConfigureScreen = (function () {
    function ConfigureScreen(activatedRoute, router, swapi) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.swapi = swapi;
        this.userStats = new points_1.Stats('0', '0', 100);
    }
    ConfigureScreen.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.swapi.getPerson(id).then(function (results) { return _this.characterDetails = results; });
        });
    };
    ConfigureScreen.prototype.pointsUsed = function () {
        return points_1.PointsManager.pointsUsed(this.userStats);
    };
    ConfigureScreen.prototype.pointsLeft = function () {
        return points_1.PointsManager.pointsLeft(this.userStats);
    };
    ConfigureScreen.prototype.calcStr = function () {
        return this.characterDetails && this.characterDetails.baseStr + parseInt(this.userStats.additionalStrength, 10);
    };
    ;
    ConfigureScreen.prototype.calcDex = function () {
        return this.characterDetails && this.characterDetails.baseDex + parseInt(this.userStats.additionalDexterity, 10);
    };
    ;
    ConfigureScreen.prototype.storeCharacter = function () {
        this.characterDetails.userStats = this.userStats;
        localStorage.setItem('characterObject', JSON.stringify(this.characterDetails));
        console.log('navigating');
        this.router.navigate(['/summary']);
    };
    ConfigureScreen = __decorate([
        core_1.Component({
            template: template,
            directives: [characterCard_1.CharacterCard, stats_1.Details, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, swapi_1.Swapi])
    ], ConfigureScreen);
    return ConfigureScreen;
})();
exports.ConfigureScreen = ConfigureScreen;
//# sourceMappingURL=configure.js.map