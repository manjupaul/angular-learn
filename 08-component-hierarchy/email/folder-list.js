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
var FolderListComponent = (function () {
    function FolderListComponent() {
    }
    FolderListComponent = __decorate([
        core_1.Component({
            selector: 'folder-list',
            templateUrl: 'email/folder-list.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FolderListComponent);
    return FolderListComponent;
})();
exports.FolderListComponent = FolderListComponent;
//# sourceMappingURL=folder-list.js.map