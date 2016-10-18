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
var card_ts_1 = require('./card.ts');
var template = "\n  <div class=\"flex-container\">\n      <character-card [archetype]=\"character\"\n        (action)=\"choose(character.id)\"\n        [enabled]=\"formValid\"\n        *ngFor=\"let character of list\" class=\"archetype-panel\"></character-card>\n  </div>\n";
var CardList = (function () {
    function CardList() {
        this.list = [];
        this.formValid = false;
        this.select = new core_1.EventEmitter();
    }
    CardList.prototype.choose = function (id) {
        this.select.emit(id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CardList.prototype, "list");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CardList.prototype, "formValid");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CardList.prototype, "select");
    CardList = __decorate([
        core_1.Component({
            selector: 'character-card-list',
            template: template,
            directives: [card_ts_1.Card]
        }), 
        __metadata('design:paramtypes', [])
    ], CardList);
    return CardList;
})();
exports.CardList = CardList;
//# sourceMappingURL=cardList.js.map