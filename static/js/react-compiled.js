'use strict';

function testing(_ref) {
    var a = _ref.address;
    var b = _ref.phone;
    var callback = _ref.callback;

    console.info(a);
    console.info(b);
    if (callback) {
        callback('gazab');
    }
}

var person = { address: 'bhawan colony', phone: 'nahi hai', callback: function callback(b) {
        console.log(b);
    } };
testing(person);

var name = 'johnson';
var nature = 'air';

var string = '\n\nthis\nittle ' + name + ' did\nnot come out for\n' + nature + ' baby';
console.log(string);

//# sourceMappingURL=react-compiled.js.map