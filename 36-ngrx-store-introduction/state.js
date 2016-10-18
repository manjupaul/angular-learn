exports.PICK_BERRY = 'PICK_BERRY';
exports.PICK_APPLE = 'PICK_APPLE';
exports.EMPTY_CART = 'EMPTY_CART';
exports.berryCounter = function (value, action) {
    if (value === void 0) { value = 0; }
    switch (action.type) {
        case exports.PICK_BERRY:
            return value + 1;
        case exports.EMPTY_CART:
            return 0;
        default:
            return value;
    }
};
exports.appleCounter = function (value, action) {
    if (value === void 0) { value = 0; }
    switch (action.type) {
        case exports.PICK_APPLE:
            return value + value % 5 + 1;
        case exports.EMPTY_CART:
            return 0;
        default:
            return value;
    }
};
//# sourceMappingURL=state.js.map