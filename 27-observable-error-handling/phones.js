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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/retry');
var PhonesComponent = (function () {
    function PhonesComponent(http) {
        this.getAndSubscribe(http);
    }
    PhonesComponent.prototype.getAndSubscribe = function (http) {
        var _this = this;
        http.get('../demo-data/ZZZphones.json')
            .map(function (res) { return res.json(); })
            .retry(3)
            .catch(function (err) {
            console.error('handling error', err);
            var fakeData = [{ name: 'no phone' }];
            return Observable_1.Observable.of(fakeData);
        })
            .subscribe(function (data) {
            console.log('Data arrived', data);
            _this.phones = data;
        }, function (err) { return console.log('handling additional errors'); });
    };
    PhonesComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h3>Phones</h3>\n    <ul>\n      <li *ngFor=\"let p of phones\">\n        {{p.name}}\n      </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PhonesComponent);
    return PhonesComponent;
})();
exports.PhonesComponent = PhonesComponent;
//# sourceMappingURL=phones.js.map