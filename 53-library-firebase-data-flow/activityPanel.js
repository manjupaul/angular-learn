// This component lets the user turn the activity stream on and off.
// It is off by default, so that the software does not generate a long
// stream of activity in Firebase merely from being reloaded.
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
var activityGenerator_1 = require('./activityGenerator');
var ActivityPanel = (function () {
    function ActivityPanel() {
        var _this = this;
        this.n = 0;
        var g = new activityGenerator_1.Generator();
        this.handle = setInterval(function () {
            if (_this.enabled) {
                g.next();
                _this.n++;
            }
        }, 100);
    }
    ActivityPanel.prototype.ngOnDestroy = function () {
        clearInterval(this.handle);
    };
    ActivityPanel = __decorate([
        core_1.Component({
            selector: 'activity-generator',
            templateUrl: './activityPanel.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ActivityPanel);
    return ActivityPanel;
})();
exports.ActivityPanel = ActivityPanel;
//# sourceMappingURL=activityPanel.js.map