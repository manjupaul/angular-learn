// This file is named main.ts for compatibility with our TypeScript
// based class kit; in a real application using only JavaScript ES2015
// features but not TypeScript, it would be named main.js.
var utils_1 = require('./utils');
var Main = (function () {
    function Main() {
        this.h = new utils_1.Helper();
    }
    Main.prototype.run = function () {
        console.log(this.h.helpMe());
        var someString = "This is a\n    multi line\n    string";
        if (true) {
            var isDone = false;
            var notAvailableOutside = true;
        }
        console.log(isDone);
    };
    return Main;
})();
new Main().run();
//# sourceMappingURL=main.js.map