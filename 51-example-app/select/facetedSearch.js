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
var FacetButton = (function () {
    function FacetButton() {
        this.fieldChange = new core_1.EventEmitter();
        this.change = new core_1.EventEmitter();
    }
    FacetButton.prototype.clicked = function () {
        this.fieldChange.next(this.value);
        this.change.next({});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FacetButton.prototype, "field");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FacetButton.prototype, "fieldChange");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FacetButton.prototype, "change");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FacetButton.prototype, "value");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FacetButton.prototype, "label");
    FacetButton = __decorate([
        core_1.Component({
            selector: 'facet-button',
            template: "\n          <button class=\"pref-button\" (click)=\"clicked()\"\n                 [class.selected]=\"field == value\">{{label}}</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], FacetButton);
    return FacetButton;
})();
var template = "\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <label>Sex:<br>\n      <facet-button [(field)]=\"searchFields.gender\" value=\"m\" label=\"Male\" (change)=\"change()\"></facet-button>\n      <facet-button [(field)]=\"searchFields.gender\" value=\"f\" label=\"Female\" (change)=\"change()\"></facet-button>\n      <facet-button [(field)]=\"searchFields.gender\" value=\"n\" label=\"Other\" (change)=\"change()\"></facet-button>\n      <facet-button [(field)]=\"searchFields.gender\" value=\"\" label=\"All\" (change)=\"change()\"></facet-button>\n    </label>\n  </div>\n  <div class=\"col-md-3\">\n    <label>Race:<br>\n      <facet-button [(field)]=\"searchFields.race\" value=\"human\" label=\"Human\" (change)=\"change()\"></facet-button>\n      <facet-button [(field)]=\"searchFields.race\" value=\"droid\" label=\"Droid\" (change)=\"change()\"></facet-button>\n      <facet-button [(field)]=\"searchFields.race\" value=\"\" label=\"All\" (change)=\"change()\"></facet-button>\n    </label>\n  </div>\n  <div class=\"col-md-5\">\n    <label>Stat Preference:<br>\n      <facet-button [(field)]=\"searchFields.statPref\" value=\"str\" label=\"Strength\" (change)=\"change()\"></facet-button>\n      <facet-button [(field)]=\"searchFields.statPref\" value=\"dex\" label=\"Dexterity\" (change)=\"change()\"></facet-button>\n      <facet-button [(field)]=\"searchFields.statPref\" value=\"\" label=\"None\" (change)=\"change()\"></facet-button>\n    </label>\n  </div>\n</div>\n";
var FacetedSearch = (function () {
    function FacetedSearch() {
        this.changed = new core_1.EventEmitter();
    }
    FacetedSearch.prototype.change = function () {
        this.changed.next(this.searchFields);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FacetedSearch.prototype, "searchFields");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FacetedSearch.prototype, "changed");
    FacetedSearch = __decorate([
        core_1.Component({
            selector: 'faceted-search',
            template: template,
            directives: [FacetButton]
        }), 
        __metadata('design:paramtypes', [])
    ], FacetedSearch);
    return FacetedSearch;
})();
exports.FacetedSearch = FacetedSearch;
//# sourceMappingURL=facetedSearch.js.map