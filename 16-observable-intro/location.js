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
require('rxjs/add/operator/map');
var LocationComponent = (function () {
    function LocationComponent(fb) {
        this.fb = fb;
    }
    LocationComponent.prototype.ngOnInit = function () {
        this.locationFormGroup = this.fb.group({
            city: ['', forms_1.Validators.required],
            state: ['']
        });
        var cityChanges = this.locationFormGroup.controls['city'].valueChanges;
        cityChanges.subscribe(function (val) {
            console.log('city: ', val);
        });
        var stateChanges = this.locationFormGroup.controls['state'].valueChanges;
        stateChanges.subscribe(function (val) {
            console.log('state: ', val);
        });
        var formChanges = this.locationFormGroup.valueChanges;
        formChanges
            .map(function (val) { return val.city + ' ' + val.city; })
            .subscribe(function (val) {
            console.log('form: ', val);
        });
    };
    LocationComponent.prototype.onLogin = function () {
        console.log('Form Submitted', this.locationFormGroup.value);
    };
    LocationComponent.prototype.logTheForm = function () {
        console.log('form: ', this.locationFormGroup);
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './location.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], LocationComponent);
    return LocationComponent;
})();
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=location.js.map