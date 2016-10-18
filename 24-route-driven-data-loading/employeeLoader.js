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
var EmployeeLoader = (function () {
    function EmployeeLoader(http) {
        this.http = http;
    }
    EmployeeLoader.prototype.getList = function () {
        return this.http.get('../demo-data/employees.json')
            .map(unwrapData)
            .map(function (longList) { return longList.slice(0, 9); });
    };
    EmployeeLoader.prototype.getDetails = function (employeeId) {
        return this.http.get("../demo-data/employees/" + employeeId + ".json")
            .map(unwrapData);
    };
    EmployeeLoader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeLoader);
    return EmployeeLoader;
})();
exports.EmployeeLoader = EmployeeLoader;
function unwrapData(res) {
    return res.json();
}
//# sourceMappingURL=employeeLoader.js.map