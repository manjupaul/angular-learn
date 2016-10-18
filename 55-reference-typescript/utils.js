// Note that we don't specify the name of a module anywhere;
// its filename is its name.
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