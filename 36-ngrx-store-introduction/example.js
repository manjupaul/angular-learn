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
var store_1 = require('@ngrx/store');
var state = require('./state');
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');
var ExampleComponent = (function () {
    function ExampleComponent(store) {
        this.store = store;
        this.berry$ = store.select(function (s) { return s.berryCounter; });
        this.apple$ = store.select(function (s) { return s.appleCounter; });
        this.total$ = store.map(function (s) { return s.berryCounter + s.appleCounter; });
    }
    ExampleComponent.prototype.pickBerry = function () {
        this.store.dispatch({ type: state.PICK_BERRY });
    };
    ExampleComponent.prototype.pickApple = function () {
        this.store.dispatch({ type: state.PICK_APPLE });
    };
    ExampleComponent.prototype.empty = function () {
        this.store.dispatch({ type: state.EMPTY_CART });
    };
    ExampleComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './example.html'
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], ExampleComponent);
    return ExampleComponent;
})();
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=example.js.map