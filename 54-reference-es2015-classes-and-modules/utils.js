// This file is named utils.ts for compatibility with our TypeScript
// based class kit; in a real application using only JavaScript ES2015
// features but not TypeScript, it would be named utils.js.
var Helper = (function () {
    function Helper() {
    }
    Helper.prototype.helpMe = function () {
        return 42;
    };
    return Helper;
})();
exports.Helper = Helper;
//# sourceMappingURL=utils.js.map