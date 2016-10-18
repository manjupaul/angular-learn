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
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/share');
var PhoneLoader = (function () {
    function PhoneLoader(http) {
        this.http = http;
        this.getAndSubscribe();
    }
    PhoneLoader.prototype.getAndSubscribe = function () {
        var _this = this;
        this.http.get('../demo-data/phones.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.phones = data;
            console.log(data);
        });
    };
    PhoneLoader.prototype.exampleOfDo = function () {
        var _this = this;
        this.http.get('../demo-data/phones.json')
            .do(function (d) { return console.log('raw data', d); })
            .map(function (res) { return res.json(); })
            .do(function (d) { return console.log('processed data', d); })
            .subscribe(function (data) { return _this.phones = data; });
    };
    PhoneLoader.prototype.subscribeTwice = function () {
        var _this = this;
        var ob1$ = this.http.get('../demo-data/phones.json')
            .do(function (d) { return console.log('do', d); })
            .map(function (res) { return res.json(); });
        ob1$.subscribe(function (data) {
            console.log('1');
            _this.phones = data;
        });
        ob1$.subscribe(function (data) {
            console.log('2');
            _this.phones = data;
        });
    };
    PhoneLoader.prototype.share = function () {
        var _this = this;
        var ob2$ = this.http.get('../demo-data/phones.json')
            .do(function (d) { return console.log('do', d); })
            .map(function (res) { return res.json(); })
            .share();
        ob2$.subscribe(function (data) {
            console.log('1');
            _this.phones = data;
        });
        ob2$.subscribe(function (data) {
            console.log('2');
            _this.phones = data;
        });
    };
    PhoneLoader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PhoneLoader);
    return PhoneLoader;
})();
exports.PhoneLoader = PhoneLoader;
//# sourceMappingURL=phoneLoader.js.map