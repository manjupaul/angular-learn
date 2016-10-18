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
var pipes_1 = require('./pipes');
var AppComponent = (function () {
    function AppComponent() {
        this.someNumber = 12;
        this.items = ['abc', '123', 'xyzabcdef', 'abc123', '8756'];
        this.paragraph = "This is an example paragraph, here to provide some data on which to operate.\n    It is two sentences long, which isn't a lot, but is more than one.";
        this.cars = [
            { brand: 'Toyota', year: 2014, color: 'Red' },
            { brand: 'Toyota', year: 2011, color: 'Green' },
            { brand: 'Ford', year: 2005, color: 'Black' },
            { brand: 'Ford', year: 2009, color: 'White' },
            { brand: 'Ford', year: 2013, color: 'Yellow' }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'template.html',
            pipes: [pipes_1.ToCapsPipe, pipes_1.ContainsXPipe, pipes_1.CheckmarkPipe, pipes_1.FieldRangePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map