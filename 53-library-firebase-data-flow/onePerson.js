// This component displays a single entry from Firebase on the screen.
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
var firebase_1 = require('firebase');
var fbConfig_1 = require('./fbConfig');
var angular2_firebase_1 = require('angular2-firebase');
var OnePerson = (function () {
    function OnePerson() {
    }
    OnePerson.prototype.ngOnInit = function () {
        this.person$ = angular2_firebase_1.observableFirebaseObject(new firebase_1.default(fbConfig_1.fbName)
            .child('stuff')
            .child('cat1')
            .child(this.id));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OnePerson.prototype, "id");
    OnePerson = __decorate([
        core_1.Component({
            selector: 'one-person',
            template: "\n  <div>\n    <b>Person {{id}}:</b>\n    <p>{{ person$ | async | json }}</p>\n    <p>{{ (person$ | async)?.name}}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], OnePerson);
    return OnePerson;
})();
exports.OnePerson = OnePerson;
//# sourceMappingURL=onePerson.js.map