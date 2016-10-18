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
var validators_1 = require('./validators');
var LoginComponent = (function () {
    function LoginComponent(fb) {
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFormGroup = this.fb.group({
            login: ['user', forms_1.Validators.required],
            password: ['defaultPass', [forms_1.Validators.minLength(3), forms_1.Validators.required]],
            enterFive: ['5', validators_1.fiveValidator],
            confirmPassword: ['pass', forms_1.Validators.minLength(3)]
        }, {
            validator: validators_1.matchingPasswordValidator
        });
    };
    LoginComponent.prototype.onLogin = function () {
        console.log('Form Submitted', this.loginFormGroup.value);
    };
    LoginComponent.prototype.logTheForm = function () {
        console.log('form: ', this.loginFormGroup);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'login.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map