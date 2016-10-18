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
var roomData = [
    { name: 'kitchen', contents: ['dishes', 'table', 'chairs'] },
    { name: 'bedroom', contents: ['bed', 'lamp'] }
];
var BuiltInComponent = (function () {
    function BuiltInComponent() {
        this.n = 0;
        this.todos = ['Eat Breakfast', 'Walk Dog', 'Breathe'];
        this.rooms = roomData;
    }
    BuiltInComponent.prototype.increment = function () {
        this.n++;
        this.todos.push("Item " + this.n);
    };
    BuiltInComponent.prototype.results = function () {
        if (this.n > 1 && this.n < 5) {
            return this.n;
        }
    };
    BuiltInComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './builtin.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BuiltInComponent);
    return BuiltInComponent;
})();
exports.BuiltInComponent = BuiltInComponent;
//# sourceMappingURL=builtin.js.map