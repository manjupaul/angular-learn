var testing_1 = require('@angular/testing');
var pipes_1 = require('./pipes');
var greetingCalculator_1 = require('./greetingCalculator');
var test2_1 = require('./test2');
testing_1.it('true is true', function () { testing_1.expect(true).toEqual(true); });
testing_1.describe('the containsXPipe', function () {
    var pipe;
    testing_1.beforeEach(function () {
        pipe = new pipes_1.ContainsXPipe();
    });
    var sampleInput = ['abcde', 'fghij'];
    testing_1.it("correctly finds the appropriate subset for ['abcde'] with an input of 'abcde'", function () {
        testing_1.expect(pipe.transform(sampleInput, 'abcde')).toEqual(['abcde']);
    });
    testing_1.it('correctly returns empty array when appropriate', function () {
        testing_1.expect(pipe.transform(sampleInput, 'cb')).toEqual([]);
    });
    testing_1.it('handles poor inputs gracefully', function () {
        testing_1.expect(pipe.transform(sampleInput, undefined)).toEqual([]);
        testing_1.expect(pipe.transform([], [])).toEqual([]);
        testing_1.expect(pipe.transform('test', [])).toEqual('test');
        testing_1.expect(pipe.transform('test', ['ABC'])).toEqual('test');
    });
});
testing_1.describe('the greeting calculator', function () {
    var gc;
    testing_1.beforeEach(function () {
        gc = new greetingCalculator_1.GreetingCalculator();
    });
    testing_1.it('should provide a greeting', function () {
        testing_1.expect(gc.greeting()).toBe('Hello, World');
    });
});
test2_1.secondSuite();
//# sourceMappingURL=test.js.map