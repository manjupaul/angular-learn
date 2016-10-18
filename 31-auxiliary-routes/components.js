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
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Welcome Home</h2>\n    <p>This is a simple example component.</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
var NameComponent = (function () {
    function NameComponent(route) {
        this.route = route;
    }
    NameComponent.prototype.ngOnInit = function () {
        this.name$ = this.route.params.map(function (params) { return params['name']; });
    };
    NameComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Hello {{name$ | async}}!</h2>\n    <p>I am a sample component.</p>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], NameComponent);
    return NameComponent;
})();
exports.NameComponent = NameComponent;
var BlueBox = (function () {
    function BlueBox() {
    }
    BlueBox = __decorate([
        core_1.Component({
            template: "\n    <div style=\"border: 3px solid blue; padding: 3px; margin: 3px\">\n      <h2>I am a blue box</h2>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], BlueBox);
    return BlueBox;
})();
exports.BlueBox = BlueBox;
var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent = __decorate([
        core_1.Component({
            template: "\n    <div style=\"border: 3px solid green; padding: 3px; margin: 3px\">\n      <h5>This is a chat component</h5>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
})();
exports.ChatComponent = ChatComponent;
var TaskComponent = (function () {
    function TaskComponent() {
    }
    TaskComponent = __decorate([
        core_1.Component({
            template: "\n    <div style=\"border: 3px solid green; padding: 3px; margin: 3px\">\n      <h5>Here are some tasks</h5>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskComponent);
    return TaskComponent;
})();
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=components.js.map