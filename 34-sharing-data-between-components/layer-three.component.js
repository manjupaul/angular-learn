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
var forms_1 = require('@angular/forms');
var sharedData_1 = require('./sharedData');
var LayerThree = (function () {
    function LayerThree(shared, fb) {
        this.shared = shared;
        this.fb = fb;
        this.unsharedValue = 0;
    }
    LayerThree.prototype.ngOnInit = function () {
        var _this = this;
        this.myFormGroup = this.fb.group({ theData: [''] });
        this.myFormGroup.controls['theData'].valueChanges
            .subscribe(function (value) { return _this.shared.userInput = value; });
    };
    LayerThree.prototype.incUnshared = function () {
        this.unsharedValue++;
    };
    LayerThree = __decorate([
        core_1.Component({
            selector: 'layer-three',
            templateUrl: 'layer-three.component.html'
        }), 
        __metadata('design:paramtypes', [sharedData_1.SharedData, forms_1.FormBuilder])
    ], LayerThree);
    return LayerThree;
})();
exports.LayerThree = LayerThree;
//# sourceMappingURL=layer-three.component.js.map