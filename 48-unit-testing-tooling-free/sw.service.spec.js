/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
var sw_service_1 = require('./sw.service');
var testData = [
    {
        'name': 'Acme Inc',
        'phone': '555-555-5555',
        'address': '123 Main St',
        'partner': true,
        'bold': true,
        'classy': false,
        'id': 0,
        'netWorth': 10030,
        'numStocks': 100
    },
    {
        'name': 'USR',
        'phone': '101-010-0001',
        'address': '3 Laws St',
        'partner': true,
        'bold': false,
        'classy': true,
        'id': 1,
        'netWorth': 1023400,
        'numStocks': 15640
    },
    {
        'name': 'Umbrella Corp.',
        'phone': '999-999-9999',
        'address': '9 Street',
        'partner': false,
        'bold': true,
        'classy': true,
        'id': 2,
        'netWorth': 123332,
        'numStocks': 22331
    }
];
fdescribe('Service: Sw', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [{ provide: http_1.Http, useFactory: function (backend, options) {
                        backend.connections.subscribe(function (c) {
                            c.mockRespond(new http_1.Response({ body: testData, status: 200, headers: new http_1.Headers({}), url: '/whatever', merge: undefined }));
                        });
                        return new http_1.Http(backend, options);
                    }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] },
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                sw_service_1.SwService]
        });
    });
    it('should return correct data', testing_1.inject([sw_service_1.SwService], function (service) {
        expect(service).toBeTruthy();
        service.getArchetypes().subscribe(function (r) {
            console.log('We are checking the dataz');
            expect(r).toBe(testData);
        });
        service.getCompanyDetails(0).subscribe(function (r) {
            console.log('checking the other dataz');
            expect(r).toBe(testData[0]);
        });
    }));
});
//# sourceMappingURL=sw.service.spec.js.map