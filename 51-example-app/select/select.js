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
var _ = require('lodash');
var nameForm_ts_1 = require('./nameForm.ts');
var facetedSearch_ts_1 = require('./facetedSearch.ts');
var cardList_ts_1 = require('./cardList.ts');
var swapi_ts_1 = require('../swapi.ts');
var template = "\n<div class=\"row\">\n  <div class=\"col-md-8 col-md-push-2\">\n    <character-name-form (valid)=\"setFormValidity($event)\" [(name)]=\"characterName\"></character-name-form>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8 col-md-push-2\">\n    <div class=\"character-select\">\n      <h2>Choose your Archetype</h2>\n      <input type=\"text\" placeholder=\"Search Archetypes\" [(ngModel)]=\"nameFilter\">\n      <select [(ngModel)]=\"sortBy\">\n        <option value=\"birth_year\">Birth Year</option>\n        <option value=\"name\">Name</option>\n        <option value=\"height\">Height</option>\n      </select>\n      <faceted-search [(searchFields)]=\"facets\"></faceted-search>\n      <character-card-list\n          [formValid]=\"formValid\"\n          [list]=\"filteredList(nameFilter, facets, sortBy)\"\n          (select)=\"selectArchetype($event)\"></character-card-list>\n    </div>\n  </div>\n</div>\n";
var SelectScreen = (function () {
    function SelectScreen(swapi, router) {
        var _this = this;
        this.router = router;
        this.facets = {
            'gender': '',
            'race': '',
            'statPref': ''
        };
        this.nameFilter = '';
        this.sortBy = 'name';
        this.characterName = '';
        this.prevFilteredList = [];
        this.formValid = false;
        swapi.getPeople().then(function (people) {
            _this.fullList = people;
        });
    }
    SelectScreen.prototype.filteredList = function (nameFilter, facets, sortBy) {
        var nonEmptyFacets = _.pickBy(facets, _.identity);
        var curList = _.chain(this.fullList)
            .sortBy(sortBy)
            .filter(function (x) { return nameFilter === '' ||
            x.name.toLowerCase().indexOf(nameFilter.toLowerCase()) > -1; })
            .filter(nonEmptyFacets)
            .value();
        if (!_.isEqual(this.prevFilteredList, curList)) {
            this.prevFilteredList = curList;
        }
        return this.prevFilteredList;
    };
    SelectScreen.prototype.setFormValidity = function (formState) {
        this.formValid = formState;
    };
    SelectScreen.prototype.selectArchetype = function (id) {
        this.router.navigateByUrl('/configure/' + id + '/' + this.characterName);
    };
    SelectScreen = __decorate([
        core_1.Component({
            template: template,
            directives: [nameForm_ts_1.NameForm, facetedSearch_ts_1.FacetedSearch, cardList_ts_1.CardList]
        }), 
        __metadata('design:paramtypes', [swapi_ts_1.Swapi, router_1.Router])
    ], SelectScreen);
    return SelectScreen;
})();
exports.SelectScreen = SelectScreen;
//# sourceMappingURL=select.js.map