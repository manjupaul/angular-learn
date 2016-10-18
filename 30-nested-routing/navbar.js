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
var common_1 = require('@angular/common');
var NavBar = (function () {
    function NavBar(location) {
        this.location = location;
    }
    NavBar.prototype.getLinkStyle = function (path) {
        return this.location.path() === path;
    };
    NavBar = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: './navbar.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], NavBar);
    return NavBar;
})();
exports.NavBar = NavBar;
//# sourceMappingURL=navbar.js.map