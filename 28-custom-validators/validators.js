function trivialValidator(control) {
    if (control.value === '12345') {
        return undefined;
    }
    else {
        return {
            trivial: true
        };
    }
}
exports.trivialValidator = trivialValidator;
function fiveValidator(control) {
    if (control.value !== '5') {
        return {
            verifyFive: true
        };
    }
}
exports.fiveValidator = fiveValidator;
function matchingPasswordValidator(group) {
    var first = group.controls['password'];
    var second = group.controls['confirmPassword'];
    if (first.value !== second.value) {
        return {
            mismatched: true
        };
    }
}
exports.matchingPasswordValidator = matchingPasswordValidator;
;
function matchingFieldValidator(firstKey, secondKey, errorName) {
    return function (group) {
        var first = group.controls[firstKey];
        var second = group.controls[secondKey];
        if (first.value !== second.value) {
            return (_a = {},
                _a[errorName] = true,
                _a
            );
        }
        var _a;
    };
}
exports.matchingFieldValidator = matchingFieldValidator;
//# sourceMappingURL=validators.js.map