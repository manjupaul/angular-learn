var rawOrders_1 = require('./rawOrders');
var OrderService = (function () {
    function OrderService(flag) {
        this.data = rawOrders_1.default.slice();
        if (flag) {
            this.data[0].customer = 'TESTING 123';
            this.data[0].items = [];
            this.data[1].customer = 'TESTING 123';
            this.data[1].items = [];
        }
    }
    OrderService.prototype.getData = function () {
        return this.data;
    };
    return OrderService;
})();
exports.OrderService = OrderService;
//# sourceMappingURL=orderService.js.map