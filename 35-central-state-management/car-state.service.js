// Here is the essential shape of the state of this example
// system, including the "business rules".
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var CarState = (function () {
    function CarState() {
    }
    return CarState;
})();
exports.CarState = CarState;
function calculateValidity(state) {
    state.ok = true;
    state.message = '';
    if (state.nAxles === 0) {
        state.ok = false;
        state.message = 'must have at least one axle';
        return;
    }
    var totalWheels = state.wheelQtys.reduce(function (prev, q) { return prev + q; }, 0);
    if (totalWheels === 0) {
        state.ok = false;
        state.message = 'must have at least one wheel';
        return;
    }
    if (state.nAxles * 2 !== totalWheels) {
        state.ok = false;
        state.message = 'total wheels must be 2x total axles';
        return;
    }
    var oddWheels = state.wheelQtys.reduce(function (prev, q) { return prev + (q % 2); }, 0);
    if (oddWheels !== 0) {
        state.ok = false;
        state.message = 'all wheels must be used in pairs';
        return;
    }
}
exports.WHEEL_TYPES = [
    'Wide Slicks',
    'Cheap Trailer',
    'Skinny',
    'Mars Rover',
    'Stone'
];
var CarStateService = (function () {
    function CarStateService() {
        var state = new CarState();
        state.nAxles = 0;
        state.wheelQtys = Array(exports.WHEEL_TYPES.length).fill(0);
        calculateValidity(state);
        this.state$ = new BehaviorSubject_1.BehaviorSubject(state);
    }
    CarStateService.prototype.changeAxles = function (delta) {
        this.updateState(function (s) { return s.nAxles = Math.max(s.nAxles + delta, 0); });
    };
    CarStateService.prototype.changeWheelQty = function (i, delta) {
        this.updateState(function (s) { return s.wheelQtys[i] = Math.max(s.wheelQtys[i] + delta, 0); });
    };
    CarStateService.prototype.updateState = function (f) {
        var newState = Object.assign({}, this.state$.getValue());
        f(newState);
        calculateValidity(newState);
        this.state$.next(newState);
    };
    return CarStateService;
})();
exports.CarStateService = CarStateService;
//# sourceMappingURL=car-state.service.js.map