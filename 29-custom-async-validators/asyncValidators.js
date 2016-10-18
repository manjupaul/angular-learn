var rxjs_1 = require('rxjs');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
function simpleAsyncValidator() {
    return Promise.resolve({ simpleAsyncValidator: 'blew up' });
}
exports.simpleAsyncValidator = simpleAsyncValidator;
;
function slowAsyncValidator() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(); }, 1000);
    });
}
exports.slowAsyncValidator = slowAsyncValidator;
;
var url = 'https://api.zippopotam.us/us/';
function westernZipValidatorFactory(http) {
    return function (control) {
        return http.get(url + control.value)
            .map(function (r) { return r.json(); })
            .do(function (r) { return console.log(r); })
            .map(function (data) { return data.places[0].longitude; })
            .map(function (l) { return l < -90; })
            .do(function (ok) { return ok ? console.log('It is west enough') : console.log('It is not west enough'); })
            .map(function (ok) { return ok ? undefined : { westerliness: 'not enough' }; })
            .catch(function (e) {
            return rxjs_1.Observable.of({ westerliness: 'Unable to verify' });
        })
            .toPromise();
    };
}
exports.westernZipValidatorFactory = westernZipValidatorFactory;
//# sourceMappingURL=asyncValidators.js.map