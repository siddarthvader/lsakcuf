function testing({address:a,phone:b,callback}){
    console.info(a);
    console.info(b);
    if(callback){
        callback('gazab');
    }
}

var person={address:'bhawan colony',phone:'nahi hai',callback: function (b) {
    console.log(b);


}};
testing(person);

var name='johnson';
var nature='air';

var string =`

this
ittle ${name} did
not come out for
${nature} baby`;
console.log(string);