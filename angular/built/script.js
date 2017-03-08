

(function () {
    'use strict'

    var _globalVar = {};
    _globalVar.r = Math.pow(1.8, 1508);
    // console.log(r);

    function name(str) {
        return "my name is" + str;
    }

    // console.log(name('siddharth'));

    var byte;
    byte = 4;
    // console.log(byte.length);

    // if('s'+' i'+'d'==="s id"){
    //     console.log('wow');
    // }
    // else{
    //     console.log('not so wow');
    // }

    _globalVar.person = {
        name: 'anshul',
        place: 'gurgaon',
        status: 'learning',
        value: undefined
    };

    // console.log(person.value);

    for (var i in _globalVar.person) {
        // console.log(person.hasOwnProperty(i));
        // console.log(i);
    }

    // console.log(person.hasOwnProperty('name1'));


    if (0 || NaN || undefined || null || '' || false) {
        console.log('everything is positive');

    }
    else {
        // console.log('we are negative');
    }


    try {
        _globalVar.name = 'siddharth';
        throw name;
    }
    catch (str) {
        // console.log('my first try catch wow ' + str)
    }


    _globalVar.stooge = {
        first: "Jerome",
        last: "Howard",
        add: function (a, b) {
            this.sum = a + b;
            console.log(this, "this");
            return a + b;
        }
    };

    _globalVar.stooge['avatar'] = '12323';

    _globalVar.stooge.first = 'sid';

    delete _globalVar.stooge.first;

    // console.log(_globalVar.stooge.first);

    for (var i in _globalVar.stooge) {
        // console.log(i);
    }

    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            var F = function () { };
            F.prototype = o;
            return new F();
        };
    }


    _globalVar.another_stooge = _globalVar.stooge;

    // console.info(typeof another_stooge.constructor);

    // console.log(stooge.city&&stooge.city.name);

    // console.log('_globalVar', _globalVar.stooge.add(2, 3));

    _globalVar.value = 3;
    _globalVar.double = function () {
        var that = this;
        var helper = function () {
            that.value = add(that.value, that.value);
        };
        helper();
    }

    _globalVar.double();



    add(3, 4);

    // console.log(_globalVar);



    var contr = function (string) {
        this.name = string;
        // return {name:'ab'};
    }

    contr.prototype.get_name = function () {
        return this.name;
    }

    contr.prototype.set_name = function (str) {
        this.name = str;
        return this;
    }

    contr.prototype.get_this = function () {
        return this;
    }

    var mycontro = new contr('sid');

    console.log(mycontro.get_name(), "mucontro");

    let mynewContr = new contr('anshul');

    // console.log(contr.prototype.set_name.apply({name:'imminent'},['john']));

    var arr = [4, 5];

    var sum = add.apply(null, arr);

    // console.log(sum);

    var fakeObj = {
        status: 'fake'
    }




    var status = contr.prototype.get_name.apply(fakeObj);

    // console.log(status);


    function add(a, b) {

        // console.log(arguments);
        for (var i in arguments) {
            // console.log(i);
        }
        return a + b;
    }

    // console.log(add(13, 4));

    var a = [1, 2, 3, 12, 4, 4];

    // for(var i in a){
    //     console.log(i);
    // }

    Function.prototype.makemethod = function (func,name) {
        this.prototype[name] = func;
        return this;
    };


    Number.makemethod(function () {
        return this < 0 ? 'ceiling' : 'floor';
    },'integer');

    String.makemethod(function () {
        return this.replace(/^\s+|\s+$/g, '');
    },'trim');

    console.log((-10 / 3).integer(),'integer');

    console.log('"' + " neat ".trim( ) + '"');


    



}());



