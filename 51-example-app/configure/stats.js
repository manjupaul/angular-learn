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
var points_1 = require('./points');
var template = "\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Configure\n  </div>\n  <div class=\"panel-body\">\n    <span [style.color]=\"pointsLeft() < 0 ? 'red' : 'black'\">\n      <div>\n        Additional Strength: 0 <input type=\"range\" min=\"0\" max=\"20\" style=\"width: 300px; display: inline-block\" [(ngModel)]=\"stats.additionalStrength\"> 20\n      </div>\n      <div>\n        Additional Dexterity: 0 <input type=\"range\" min=\"0\" max=\"20\" style=\"width: 300px; display: inline-block\" [(ngModel)]=\"stats.additionalDexterity\"> 20\n      </div>\n\n      <div [style.font-size.px]=\"pointsUsed()/20 + 14\">\n      Points Used: {{pointsUsed()}}\n      </div>\n      <div [style.font-size.px]=\"pointsLeft()-36\">\n        Points Left: {{pointsLeft()}}\n      </div>\n    </span>\n  </div>\n</div>\n";
var Details = (function () {
    function Details() {
    }
    Details.prototype.pointsUsed = function () {
        return points_1.PointsManager.pointsUsed(this.stats);
    };
    Details.prototype.pointsLeft = function () {
        return points_1.PointsManager.pointsLeft(this.stats);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', points_1.Stats)
    ], Details.prototype, "stats");
    Details = __decorate([
        core_1.Component({
            selector: 'stats-form',
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], Details);
    return Details;
})();
exports.Details = Details;
//# sourceMappingURL=stats.js.map