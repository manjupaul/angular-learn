var utils_1 = require('./utils');
var Main = (function () {
    function Main() {
        this.h = new utils_1.Helper();
    }
    Main.prototype.run = function () {
        console.log(this.h.helpMe());
        console.log(this.h.pickColor());
        return 3;
    };
    return Main;
})();
new Main().run();
function OldSchoolClass() {
    this.customValue = 5;
}
var instance = new OldSchoolClass();
console.log(instance.customValue);
//# sourceMappingURL=main.js.map