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
var BindingsComponent = (function () {
    function BindingsComponent() {
        this.x = 'Only available inside';
        this.version = 'Other';
        this.person = 'everyone';
        this.stringWithHtml = "\n      <button onClick='console.log('hello from old-school HTML/JS');'>\n        Press Me\n      </button>\n      <i>Hello from <b>HTML</b></i>\n    ";
        this.personObject = { mother: 'Jane' };
        this.x = 'Hello World';
    }
    BindingsComponent.prototype.calculate = function () {
        console.log('calculating');
        return 22 / 7;
    };
    BindingsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './bindings.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BindingsComponent);
    return BindingsComponent;
})();
exports.BindingsComponent = BindingsComponent;
//# sourceMappingURL=bindings.js.map