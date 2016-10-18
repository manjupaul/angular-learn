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
var formatPipes_1 = require('./../formatPipes');
var template = "\n<div *ngIf=\"character\" class=\"panel panel-default\">\n  <div class=\"panel-heading character-card-heading text-center\">\n    {{character.avatarName}}\n  </div>\n  <div class=\"panel-body text-center\">\n    <img class=\"meme\" [src]=\"character.imageUrl\">\n    <dl class=\"dl-horizontal\">\n      <hr>\n      <dt>Archetype:</dt>\n      <dd>{{character.name}}</dd>\n      <hr>\n      <dt>Height:</dt>\n      <dd>{{character.height | stringCentimetersToNumberFeet | roundTo:1}} ft.</dd>\n      <hr>\n      <dt>Strength:</dt>\n      <dd>{{str}}</dd>\n      <hr>\n      <dt>Dexterity:</dt>\n      <dd>{{dex}}</dd>\n      <hr>\n      <dt>Gender:</dt>\n      <dd>{{character.gender}}</dd>\n      <hr>\n      <dt>Appearances:</dt>\n      <dd *ngFor=\"let film of character.filmNames\">{{film}}</dd>\n    </dl>\n  </div>\n</div>\n";
var CharacterCard = (function () {
    function CharacterCard() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CharacterCard.prototype, "character");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CharacterCard.prototype, "str");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CharacterCard.prototype, "dex");
    CharacterCard = __decorate([
        core_1.Component({
            selector: 'character-card',
            template: template,
            pipes: [formatPipes_1.StringCentimetersToNumberFeetPipe, formatPipes_1.RoundToPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], CharacterCard);
    return CharacterCard;
})();
exports.CharacterCard = CharacterCard;
//# sourceMappingURL=characterCard.js.map