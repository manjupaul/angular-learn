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
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var asyncValidators_1 = require('./asyncValidators');
var LocationFormComponent = (function () {
    function LocationFormComponent(http) {
        this.http = http;
    }
    LocationFormComponent.prototype.ngOnInit = function () {
        this.inputFormGroup = new forms_1.FormBuilder().group({
            input: ['', forms_1.Validators.nullValidator, asyncValidators_1.simpleAsyncValidator],
            zip: [
                '',
                [
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(5),
                    forms_1.Validators.required
                ],
                [
                    asyncValidators_1.slowAsyncValidator,
                    asyncValidators_1.westernZipValidatorFactory(this.http)
                ]
            ]
        });
    };
    LocationFormComponent.prototype.logTheForm = function () {
        console.log('form: ', this.inputFormGroup);
    };
    LocationFormComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'locationForm.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LocationFormComponent);
    return LocationFormComponent;
})();
exports.LocationFormComponent = LocationFormComponent;
//# sourceMappingURL=locationForm.js.map