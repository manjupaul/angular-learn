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
var angular2_firebase_1 = require('angular2-firebase');
require('rxjs/add/operator/debounceTime');
var firebase_1 = require('firebase');
var fbConfig_1 = require('./fbConfig');
var PersonList = (function () {
    function PersonList() {
        this.people = angular2_firebase_1.observableFirebaseArray(new firebase_1.default(fbConfig_1.fbName)
            .child('stuff')
            .child('cat1')
            .orderByChild('name')
            .limitToFirst(6)).debounceTime(100);
    }
    PersonList = __decorate([
        core_1.Component({
            selector: 'person-list',
            template: "\n  <h1>Person List</h1>\n  <ul>\n    <li *ngFor=\"let p of people | async\">\n    {{p[\"$$fbKey\"]}} / {{p.name}} / {{p.score}}\n    </li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PersonList);
    return PersonList;
})();
exports.PersonList = PersonList;
//# sourceMappingURL=personList.js.map