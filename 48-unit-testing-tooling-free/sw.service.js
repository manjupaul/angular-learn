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
require('rxjs/add/operator/map');
var SwService = (function () {
    function SwService(http) {
        this.http = http;
    }
    SwService.prototype.getArchetypes = function () {
        return this.http.get('/assets/companies.json')
            .map(function (r) { return r.json(); });
    };
    SwService.prototype.getCompanyDetails = function (id) {
        return this.http.get('/assets/companies.json')
            .map(function (r) { return r.json(); })
            .map(function (l) { return l[id]; });
    };
    SwService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SwService);
    return SwService;
})();
exports.SwService = SwService;
//# sourceMappingURL=sw.service.js.map