var window = window;

(function () {
    // 'use strict'

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


    var stooge = function (str) {
        this.first = "Jerome";
        this.last = "Howard";
        this.name = str;
        this.add = function add(a, b) {

            // var arguments='p';
            // console.log(arguments.length,"arguments");

            this.sum = a + b;
            // console.log(this, "this");
            return a + b;
        }
    };

    var a = new stooge('sid');

    // console.log('<a>', a.add(2, 1, 24), "value of a");


    // _globalVar.stooge.add(2,35);

    a['avatar'] = '12323';

    a.first = 'sid';

    delete a.first;

    // console.log(_globalVar.stooge.first);

    for (var i in a) {
        // console.log(i);
    }

    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            var F = function () { };
            F.prototype = o;
            return new F();
        };
    }


    _globalVar.another_stooge = a;

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

    // console.log(mycontro.get_name(), "mucontro");

    var mynewContr = new contr('anshul');

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

    Function.prototype.makemethod = function (func, name) {
        this.prototype[name] = func;
        return this;
    };


    Number.makemethod(function () {
        return this < 0 ? 'ceiling' : 'floor';
    }, 'integer');

    String.makemethod(function () {
        return this.replace(/^\s+|\s+$/g, '');
    }, 'trim');

    // console.log((-10 / 3).integer(),'integer');

    // console.log('"' + " neat ".trim( ) + '"');

    // console.log(_globalVar);


    // tower of hanoi


    function moveDisc(from, to, using, n) {
        if (n > 0) {
            moveDisc(from, using, to, n - 1);
            console.log('Move disc ' + n + ' from ' + from + ' to ' + to);
            moveDisc(using, to, from, n - 1);
        }
    }

    // moveDisc("A", "C", "B", 50);


    // counting words using recursion
    function countHi(str, substr, count, number) {
        // console.log(number);
        number++;
        if (str.substr(0, substr.length) == substr) {
            count++;
            if (str.length <= substr.length) {
                console.log("matched " + count + " times ", number);
            }
            else {
                countHi(str.substr(substr.length), substr, count, number);
            }
        }
        else {
            if (str.length > substr.length) {
                countHi(str.substr(1), substr, count, number)
            }
            else {
                console.log("matched " + count + " times ", number);
            }
        }

        // console.log("matched " + count + " times");

    }

    var str = 'yes keep doing it dont ask me who am i is it you and oyu only you though yes it does not atter realaly is this you';

    // countHi(str, 'you', 0,0);

    // console.log(str.length,'length');


    var fibo = function (from, to, pre, prepre) {
        if (pre == undefined) {
            pre = 1;
        }
        if (prepre == undefined) {
            prepre = 1;
        }

        if (from == 1) {
            console.log(1);
            fibo(2, to, 1, 1);
        }
        else if (from == 2) {
            console.log(1);
            fibo(from + 1, to, pre, prepre);
        }
        else {
            console.log(pre + prepre);
            if (from < to) {
                fibo(from + 1, to, pre + prepre, pre);
            }
        }

    };

    // fibo(1, 152);


    var factorial = function (n, total) {
        total = total || 1;
        if (n < 2) {
            return total;
        }
        return factorial(n - 1, total * n)
    }

    // console.log(factorial(15));

    // scopes

    var outerScope = function () {
        var a = 2, b = 5;
        var innerFunc = function () {
            b = 7;
            var c = 11;
        }
        // console.log(a,b,"before");
        innerFunc();
        // console.log(a,b,"after");
    }
    outerScope();


    // closures

    var myobj = function (num) {
        var calue = num;
        return {
            increment: function () {
                console.log(this.calue);
                calue++;
                return calue;
            },
            getValue: function () {
                return calue;
            }
        }
    };

    var newMyObj = myobj(19);

    // console.log(newMyObj.increment());


    var bObj = myobj(2);

    // console.log(bObj.getValue());

    // console.log(newMyObj.getValue());


    function test() {
        console.log('print');
    }

    var funcName = [test];

    var atest = funcName[0];

    // console.log(atest);
    // atest();

    var add = new Function("a", "b", "return (a+b)");


    // console.log(add(2,3));    


    var hanoi = function (source, med, dest, n) {
        if (n == 1) {
            console.log("move disc from " + source + " to " + dest);
        }
        else {
            hanoi(source, dest, med, n - 1);
            console.log("move disc from " + med + " to " + dest);
            hanoi(med, source, dest, n - 1);
        }

    }

    // hanoi("A","B","C",3);

    var closure = function () {
        var preservedInt = 3;

    }

    var index = 1;
    var obj = {
        index,
        print(value) {
            console.log(typeof this);
            console.log(value);
        }
    }

    var name = 'siddharth';
    // obj.print.apply(name,[14, 10]);
    // console.log(obj.index);

    // back to closure


    var obj = {
        value: "obj",
        increment(number) {
            return number++;
        },
        getVal() {
            return this.value;
        }
    }

    // console.log(obj.getVal());

    var closure = function () {
        var value = "closure";
        return {
            increment: function (num) {
                return num++;
            },
            getVal: function () {
                return value;
            }
        }
    }();

    var closureNew = closure;

    var func = function () {
        this.value = "func";
        this.increment = function (num) {
            console.log(num++);
            return num;
        };
        this.getVal = function () {
            return this.value;
        }
    };

    var funcObj = new func();

    // console.log(obj);
    // console.log(funcObj);
    // console.log(closureNew instanceof closure);


    var closure1 = function () {
        var name = 'siddarth';
        function printName() {
            console.log("name is " + name);
        }
        printName();
    }

    var copyClosure1 = closure1;

    // copyClosure1();



    // console.log(myQuo instanceof Quo,'myQuo');
    // console.log(myNewQUo instanceof Quo,'myNewQUo');


    function contrik(str) {

        this.getName = function () {
            // console.log('name', name)
            return this.name;
        };

        this.getter = function () {
            get_name();
            // console.log(this,'getter');
        };

        function get_name() {
            console.log(name, "name");
            console.log(this.name, "this.name");
        };

        // get_name();

        this.name = str;
        var name = str + str;

    }

    var newContrik = new contrik('sid');
    newContrik.getter();


    function Container(param) {

        this.test = function () {
            dec();
        }

        function dec() {
            console.log(secret);
            if (secret > 0) {
                secret -= 1;
                return true;
            } else {
                return false;
            }
        }


        this.member = param;
        var secret = 3;
        var that = this;
    }

    var cont = new Container(12);
    // cont.test();


    var Quo = function (status) {
        return {
            get_status: function () {
                return status;
            }
        }
    };

    var myQuo = Quo('amazed');
    var myNewQUo = new Quo('new');


    // Define a function that sets a DOM node's color
    // to yellow and then fades it to white.
    var fade = function (node) {
        var level = 1;
        var step = function () {
            var hex = level.toString(16);
            node.style.backgroundColor = '#FFFF' + hex + hex;
            if (level < 15) {
                level += 1;
                setTimeout(step, 100);
            }
        };
        setTimeout(step, 100);
    };
    // fade(document.body);

    var attach_events = function (nodes) {
        for (var i = 0, len = nodes.length; i < len; i++) {
            nodes[i].onclick = function (i) {
                return function (bum) {
                    console.info(i);
                }
            }(i);

        }
    };
    attach_events(document.getElementsByClassName('clickable')[0].children);
    

}());



