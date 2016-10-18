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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var ExampleComponent = (function () {
    function ExampleComponent(foos) {
        this.val1 = foos[0].val;
        this.val2 = foos[1].val;
    }
    ExampleComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"card-title\">From the first service: {{val1}}</div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"card-title\">From the second service: {{val2}}</div>\n      </div>\n    </div>\n  "
        }),
        __param(0, core_1.Inject('foo')), 
        __metadata('design:paramtypes', [Array])
    ], ExampleComponent);
    return ExampleComponent;
})();
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=example.js.map