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
var template = "\n<div class=\"jumbotron text-center\">\n  <h2 id=\"welcome-message\">Welcome to the Star Wars character creator!</h2>\n\n  <p class=\"instructions\">Click below to get started!</p>\n  <a class=\"btn btn-primary\" [routerLink]=\"['/select']\">GO!</a>\n</div>\n";
var WelcomeScreen = (function () {
    function WelcomeScreen() {
    }
    WelcomeScreen = __decorate([
        core_1.Component({
            template: template,
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeScreen);
    return WelcomeScreen;
})();
exports.WelcomeScreen = WelcomeScreen;
//# sourceMappingURL=welcome.js.map