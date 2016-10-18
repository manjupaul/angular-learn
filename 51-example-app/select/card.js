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
var formatPipes_ts_1 = require('../formatPipes.ts');
var template = "\n<div>\n  <h3>{{archetype.name}}</h3>\n  <a [ngClass]=\"{'disabled': !enabled}\" (click)=\"enabled && select()\">\n    <img class=\"meme\" [src]=\"archetype.imageUrl\">\n  </a>\n  <dl class=\"dl-horizontal\">\n    <dt>Born:</dt>\n    <dd>{{archetype.birth_year}}</dd>\n    <dt>Height:</dt>\n    <dd>{{archetype.height | stringCentimetersToNumberFeet | roundTo:1}} ft.</dd>\n    <dt>Mass:</dt>\n    <dd>{{archetype.mass}} kg</dd>\n    <dt>Strength:</dt>\n    <dd>{{archetype.baseStr}}</dd>\n    <dt>Dexterity:</dt>\n    <dd>{{archetype.baseDex}}</dd>\n    <dt>Hair Color</dt>\n    <dd>{{archetype.hair_color}}</dd>\n  </dl>\n  <div class=\"text-center\">\n    <button (click)=\"enabled && select()\" [disabled]=\"!enabled\" class=\"btn btn-default\">\n      <a>Choose</a>\n    </button>\n  </div>\n</div>\n";
var Card = (function () {
    function Card() {
        this.action = new core_1.EventEmitter();
    }
    Card.prototype.select = function () {
        this.action.emit(this.archetype.id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Card.prototype, "archetype");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Card.prototype, "enabled");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Card.prototype, "action");
    Card = __decorate([
        core_1.Component({
            selector: 'character-card',
            template: template,
            pipes: [formatPipes_ts_1.StringCentimetersToNumberFeetPipe, formatPipes_ts_1.RoundToPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], Card);
    return Card;
})();
exports.Card = Card;
//# sourceMappingURL=card.js.map