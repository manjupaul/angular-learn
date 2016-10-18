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
var forms_1 = require('@angular/forms');
var redditImageSearch_1 = require('./redditImageSearch');
var RedditComponent = (function () {
    function RedditComponent(ris, fb) {
        this.ris = ris;
        this.fb = fb;
    }
    RedditComponent.prototype.ngOnInit = function () {
        this.searchForm = this.fb.group({ searchControl: [''] });
        var debouncedSearchTarget = this.searchForm.controls['searchControl'].valueChanges
            .do(function (x) { return console.log('change', x); })
            .debounceTime(500)
            .do(function (x) { return console.log('after debounce', x); });
        this.results = this.ris.search(debouncedSearchTarget);
    };
    RedditComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './reddit.html',
            providers: [redditImageSearch_1.RedditImageSearch]
        }), 
        __metadata('design:paramtypes', [redditImageSearch_1.RedditImageSearch, forms_1.FormBuilder])
    ], RedditComponent);
    return RedditComponent;
})();
exports.RedditComponent = RedditComponent;
//# sourceMappingURL=reddit.js.map