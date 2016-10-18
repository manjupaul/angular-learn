var common_1 = require('@angular/common');
var testing_1 = require('@angular/testing');
var orderService_1 = require('./orderService');
var dateFormatter_1 = require('./dateFormatter');
exports.secondSuite = function () {
    testing_1.describe('OrderService', function () {
        testing_1.beforeEachProviders(function () { return [{ provide: orderService_1.OrderService, useFactory: function () { return new orderService_1.OrderService(false); } },
            dateFormatter_1.DateFormatter,
            common_1.DatePipe
        ]; });
        testing_1.it('should fetch our data', testing_1.inject([orderService_1.OrderService], function (orderService) {
            testing_1.expect(orderService.getData().length).toBe(2);
        }));
        testing_1.it('should fetch our data', testing_1.inject([dateFormatter_1.DateFormatter], function (dateFormatService) {
            testing_1.expect(dateFormatService.x).toBe(3);
        }));
    });
};
//# sourceMappingURL=test2.js.map