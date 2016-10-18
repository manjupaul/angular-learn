var PointsManager = (function () {
    function PointsManager() {
    }
    PointsManager.pointsLeft = function (stats) {
        return stats.totalPoints - this.pointsUsed(stats);
    };
    PointsManager.pointsUsed = function (stats) {
        return Math.pow(parseInt(stats.additionalStrength), 2) + Math.pow(parseInt(stats.additionalDexterity), 2);
    };
    return PointsManager;
})();
exports.PointsManager = PointsManager;
var Stats = (function () {
    function Stats(as, ad, tp) {
        this.additionalDexterity = ad;
        this.additionalStrength = as;
        this.totalPoints = tp;
    }
    return Stats;
})();
exports.Stats = Stats;
//# sourceMappingURL=points.js.map