

(function () {
    'use strict'

    var r;
    r=Math.pow(1.8,1508);
    // console.log(r);

    function name(str) {
        return "my name is" + str;
    }

    // console.log(name('siddharth'));

    var byte;
    byte = 4;
    console.log(byte.length);

    // if('s'+' i'+'d'==="s id"){
    //     console.log('wow');
    // }
    // else{
    //     console.log('not so wow');
    // }

    var person={
        name:'anshul',
        place:'gurgaon',
        status:'learning'
    };

    // console.log(person);

    for(var i in person){
        // console.log(person.hasOwnProperty(i));
        // console.log(i);
    }

    console.log(person.hasOwnProperty('name1'));


    if(0||NaN||undefined||null||''||false){
        console.log('everything is positive');
        
    }
    else{
        console.log('we are negative');        
    }


    try{
        var name='siddharth';
        throw name;
    }
    catch(str){
        console.log('my first try catch wow '+ Number(str))
    }

    console.log(true&&10);


}())

