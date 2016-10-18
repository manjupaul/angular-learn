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
var SecondComponent = (function () {
    function SecondComponent() {
    }
    SecondComponent = __decorate([
        core_1.Component({
            selector: 'app-second',
            template: "\n    <div class=\"card\">Second Component</div>\n  ",
            styles: ["\n    .card {\n      border: green 2px solid;\n    }\n    :host {\n      display: block;\n      border: 2px solid #ccc;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], SecondComponent);
    return SecondComponent;
})();
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second.js.map