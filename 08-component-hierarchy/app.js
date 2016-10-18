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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var page_1 = require('./page');
var colors_1 = require('./colors/colors');
var blue_1 = require('./colors/blue');
var green_1 = require('./colors/green');
var red_1 = require('./colors/red');
var email_1 = require('./email/email');
var folder_item_1 = require('./email/folder-item');
var folder_list_1 = require('./email/folder-list');
var message_body_1 = require('./email/message-body');
var message_display_1 = require('./email/message-display');
var message_header_1 = require('./email/message-header');
var appRoutes = [
    { path: '', redirectTo: 'colors', pathMatch: 'full' },
    { path: 'colors', component: colors_1.ColorsComponent },
    { path: 'hello', component: email_1.EmailComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                page_1.PageComponent,
                colors_1.ColorsComponent,
                blue_1.BlueCardComponent,
                green_1.GreenCardComponent,
                red_1.RedCardComponent,
                email_1.EmailComponent,
                folder_item_1.FolderItemComponent,
                folder_list_1.FolderListComponent,
                message_body_1.MessageBodyComponent,
                message_display_1.MessageDisplayComponent,
                message_header_1.MessageHeaderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes, { useHash: true })
            ],
            bootstrap: [page_1.PageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map