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
var common_1 = require('@angular/common');
var template = "\n<h2>Name your Character</h2>\n<form [ngFormModel]=\"characterForm\" novalidate>\n  <input type=\"text\" placeholder=\"Character Name\" ngControl=\"name\" (ngModelChange)=\"nameChange.emit($event)\">\n  <div *ngIf=\"(characterForm.controls.name.dirty || characterForm.controls.name.touched)\n        && characterForm.controls.name.errors?.required\">\n      A character name is required\n  </div>\n</form>\n";
var NameForm = (function () {
    function NameForm() {
        var _this = this;
        this.nameChange = new core_1.EventEmitter();
        this.valid = new core_1.EventEmitter();
        var nameControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)]));
        this.characterForm = new common_1.ControlGroup({
            name: nameControl
        });
        this.characterForm.statusChanges.subscribe(function (change) {
            if (change === 'VALID') {
                _this.valid.emit(true);
            }
            else {
                _this.valid.emit(false);
            }
        });
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NameForm.prototype, "name");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NameForm.prototype, "nameChange");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NameForm.prototype, "valid");
    NameForm = __decorate([
        core_1.Component({
            selector: 'character-name-form',
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], NameForm);
    return NameForm;
})();
exports.NameForm = NameForm;
//# sourceMappingURL=nameForm.js.map