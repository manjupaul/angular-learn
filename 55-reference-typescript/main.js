var utils_1 = require('./utils');
var Main = (function () {
    function Main() {
        this.h = new utils_1.Helper();
    }
    Main.prototype.run = function () {
        console.log(this.h.helpMe());
        var someString = "This is a\n    multi line\n    string";
    };
    return Main;
})();
new Main().run();
//# sourceMappingURL=main.js.map