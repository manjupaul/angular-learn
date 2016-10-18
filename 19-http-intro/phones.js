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
var phoneLoader_1 = require('./phoneLoader');
var PhonesComponent = (function () {
    function PhonesComponent(phoneLoader) {
        var _this = this;
        var phoneObs = phoneLoader.load();
        phoneObs.subscribe(function (res) {
            console.log(res);
            _this.phones = res.json();
            _this.phonesText = res.text();
        });
    }
    PhonesComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './phones.html',
            providers: [phoneLoader_1.PhoneLoader]
        }), 
        __metadata('design:paramtypes', [phoneLoader_1.PhoneLoader])
    ], PhonesComponent);
    return PhonesComponent;
})();
exports.PhonesComponent = PhonesComponent;
//# sourceMappingURL=phones.js.map