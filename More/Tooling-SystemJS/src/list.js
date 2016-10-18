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
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var template = "\n<h3>List of Workers</h3>\n<ul>\n  <li *ngFor=\"#w of workers\">\n    {{w.first_name}}\n  </li>\n</ul>\n";
require("rxjs/add/operator/toPromise");
var ListComponent = (function () {
    function ListComponent(http) {
        this.loadData(http);
    }
    ListComponent.prototype.loadData = function (http) {
        var _this = this;
        http.get("workers.json")
            .toPromise(Promise)
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.workers = data; })
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(console.error);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list-of-stuff",
            template: template
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], ListComponent);
    return ListComponent;
    var _a;
})();
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.js.map