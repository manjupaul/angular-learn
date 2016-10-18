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
var characterCard_1 = require('./configure/characterCard');
var swapi_1 = require('./swapi');
var template = "\n<div class=\"row\">\n  <div class=\"col-md-4 col-md-push-4\">\n    <character-card [character]=\"character\" [dex]=\"calcDex()\" [str]=\"calcStr()\"></character-card>\n  </div>\n</div>\n<button class=\"btn btn-primary pull-right\" disabled=\"true\">Start Playing</button>\n";
var SummaryScreen = (function () {
    function SummaryScreen(swapi) {
        this.character = JSON.parse(localStorage.getItem('characterObject'));
        swapi.processFilmList(this.character);
    }
    SummaryScreen.prototype.calcStr = function () {
        return this.character.baseStr + parseInt(this.character.userStats.additionalStrength);
    };
    SummaryScreen.prototype.calcDex = function () {
        return this.character.baseDex + parseInt(this.character.userStats.additionalDexterity);
    };
    SummaryScreen = __decorate([
        core_1.Component({
            template: template,
            directives: [characterCard_1.CharacterCard]
        }), 
        __metadata('design:paramtypes', [swapi_1.Swapi])
    ], SummaryScreen);
    return SummaryScreen;
})();
exports.SummaryScreen = SummaryScreen;
//# sourceMappingURL=summary.js.map