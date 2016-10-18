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
var Drag = (function () {
    function Drag() {
        this.x = 0;
        this.y = 0;
        this.mm = this.mousemove.bind(this);
        this.mu = this.mouseup.bind(this);
    }
    Drag.prototype.mousedown = function (event) {
        event.preventDefault();
        this.startX = event.pageX - this.x;
        this.startY = event.pageY - this.y;
        document.addEventListener('mousemove', this.mm);
        document.addEventListener('mouseup', this.mu);
    };
    Drag.prototype.mousemove = function (event) {
        this.x = event.pageX - this.startX;
        this.y = event.pageY - this.startY;
    };
    Drag.prototype.mouseup = function () {
        document.removeEventListener('mousemove', this.mm);
        document.removeEventListener('mouseup', this.mu);
    };
    Drag = __decorate([
        core_1.Directive({
            selector: '[makeDraggable]',
            host: {
                '[style.position]': "'relative'",
                '[style.border]': "'1px solid green'",
                '[style.padding]': "'3px'",
                '[style.backgroundColor]': "'#EEE'",
                '[style.cursor]': "'pointer'",
                '[style.left.px]': 'x',
                '[style.top.px]': 'y',
                '(mousedown)': 'mousedown($event)'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Drag);
    return Drag;
})();
exports.Drag = Drag;
//# sourceMappingURL=drag.js.map