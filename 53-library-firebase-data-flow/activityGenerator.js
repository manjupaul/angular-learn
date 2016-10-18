// This generate some activity, changes in a Firebase database,
// so that things are changing making the point of an observable obvious.
var firebase_1 = require('firebase');
var fbConfig_1 = require('./fbConfig');
var Generator = (function () {
    function Generator() {
        this.ref = new firebase_1.default(fbConfig_1.fbName).child('stuff');
    }
    Generator.prototype.next = function () {
        var category = "cat" + Math.floor((Math.random() * 3) + 1);
        var id = "id" + Math.floor((Math.random() * 10) + 2001);
        var name = "Joe" + Math.floor((Math.random() * 900) + 1001);
        var score = Math.floor((Math.random() * 100) + 1);
        this.ref.child(category).child(id).set({
            name: name,
            score: score,
            present: score > 2
        });
    };
    return Generator;
})();
exports.Generator = Generator;
//# sourceMappingURL=activityGenerator.js.map