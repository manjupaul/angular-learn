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
var BlueWrapperComponent = (function () {
    function BlueWrapperComponent() {
    }
    BlueWrapperComponent = __decorate([
        core_1.Component({
            selector: 'blue-wrapper',
            styles: [
                '.outer { border: solid blue }',
                '.inner { border: dotted blue }'
            ],
            template: "\n  <div class=\"card outer\">\n    <h2>\n      <ng-content select=\"heading\"></ng-content>\n    </h2>\n    <div class=\"card inner\">\n      <ng-content select=\"content\"></ng-content>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BlueWrapperComponent);
    return BlueWrapperComponent;
})();
exports.BlueWrapperComponent = BlueWrapperComponent;
var BlueWrapperComponentTags = (function () {
    function BlueWrapperComponentTags() {
    }
    BlueWrapperComponentTags = __decorate([
        core_1.Directive({ selector: 'heading, content' }), 
        __metadata('design:paramtypes', [])
    ], BlueWrapperComponentTags);
    return BlueWrapperComponentTags;
})();
exports.BlueWrapperComponentTags = BlueWrapperComponentTags;
//# sourceMappingURL=blue-wrapper.component.js.map