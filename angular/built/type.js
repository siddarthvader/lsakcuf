'use strict';
var bool = false;
console.log(bool);
function message() {
    var str = "returned from function, string";
    return function fn() {
        return "\n        from Inner function  " + str + "\n        ";
    };
}
var a = message();
console.log(a());
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        // console.log(i);
        setTimeout(function () { console.log(i); }, 100 * i);
    }(i));
}
