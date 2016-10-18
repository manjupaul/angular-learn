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
require('rxjs/Rx');
var RedditImageSearch = (function () {
    function RedditImageSearch(http) {
        this.http = http;
    }
    RedditImageSearch.prototype.search = function (target) {
        var _this = this;
        return target.switchMap(function (val) { return _this.searchRedditPics(val); });
    };
    RedditImageSearch.prototype.searchRedditPics = function (search) {
        var baseUrl = 'https://www.reddit.com/r/aww/search.json?restrict_sr=on&q=';
        return this.http.get(baseUrl + search)
            .map(function (res) { return res.json(); })
            .map(translateRedditResults);
    };
    RedditImageSearch = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RedditImageSearch);
    return RedditImageSearch;
})();
exports.RedditImageSearch = RedditImageSearch;
function translateRedditResults(items) {
    // This function is doesn't know anything about HTML or Observable; it just
    // manages the messy shape of this API's data return layout.
    var x = items.data.children;
    return x.map(function (item) {
        if (item && item.data && item.data.thumbnail) {
            var thumb = item.data.thumbnail;
            if (thumb.startsWith('http')) {
                return { url: thumb };
            }
        }
        return { title: item.data.title };
    });
}
//# sourceMappingURL=redditImageSearch.js.map