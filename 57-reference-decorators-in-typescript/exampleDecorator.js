function sprayPaint(ClassConstructorFn) {
    ClassConstructorFn.prototype.pickColor = function () {
        return 'red';
    };
    return ClassConstructorFn;
}
exports.sprayPaint = sprayPaint;
//# sourceMappingURL=exampleDecorator.js.map