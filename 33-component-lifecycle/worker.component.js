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
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
require('rxjs/add/operator/delay');
var workers_1 = require('./workers');
var WorkerComponent = (function () {
    function WorkerComponent(workers) {
        var _this = this;
        this.intervalVal = 0;
        console.log('constructor', this.label);
        this.secondListSubscription = workers.workerList().subscribe(function (data) {
            _this.workerList = data;
        });
        this.intervalHandle = setInterval(function () {
            _this.intervalVal += 1;
            console.log('intervalVal:', _this.intervalVal);
        }, 1000);
    }
    WorkerComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit', this.label);
        if (!this.workerList) {
            this.workerList = [];
        }
    };
    WorkerComponent.prototype.ngOnChanges = function (change) {
        console.log('A change has occurred', change);
        if (change['label']) {
            console.log(change['label'].currentValue);
        }
    };
    WorkerComponent.prototype.ngOnDestroy = function () {
        console.log('onDestroy called, cleaning up');
        this.secondListSubscription.unsubscribe();
        clearInterval(this.intervalHandle);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WorkerComponent.prototype, "label");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WorkerComponent.prototype, "label2");
    WorkerComponent = __decorate([
        core_1.Component({
            selector: 'worker-cmp',
            templateUrl: './worker.component.html',
            viewProviders: [workers_1.Workers]
        }), 
        __metadata('design:paramtypes', [workers_1.Workers])
    ], WorkerComponent);
    return WorkerComponent;
})();
exports.WorkerComponent = WorkerComponent;
//# sourceMappingURL=worker.component.js.map