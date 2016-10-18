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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var PageComponent = (function () {
    function PageComponent(router, title) {
    }
    PageComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n    <footer>\n      <hr>\n      <p>footer goes here.</p>\n    </footer>\n  ",
            providers: [platform_browser_1.Title]
        }), 
        __metadata('design:paramtypes', [router_1.Router, platform_browser_1.Title])
    ], PageComponent);
    return PageComponent;
})();
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.js.map