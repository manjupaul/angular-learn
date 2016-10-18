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
var NameComponent = (function () {
    function NameComponent(route) {
        this.route = route;
        console.log("Constructing");
    }
    NameComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('initing');
        this.sub = this.route.params.subscribe(function (params) {
            console.log("Got new value for params", params);
            _this.message = params['who'];
        });
    };
    NameComponent.prototype.ngOnDestroy = function () {
        console.log("Destroying");
        this.sub.unsubscribe();
    };
    NameComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"card-title\">Hello {{message}}</div>\n        <p>This is a less simple example component.</p>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], NameComponent);
    return NameComponent;
})();
exports.NameComponent = NameComponent;
//# sourceMappingURL=name.js.map