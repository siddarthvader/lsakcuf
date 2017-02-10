var firstName: string='sid';
// console.log(firstName);
var age:number=24;

var address:string=`my name is ${firstName} and age is ${age} 
${typeof age} is type of age;
`;

var strToNum:number=parseInt('5.5');

// console.log(typeof strToNum.toString());


// interfaces


// console.log(fartman);


// arrays

interface SuperHero {
    firstName: string;
    lastName:string;
}

var fartman:SuperHero={
    firstName:'fatty mojo',
    lastName:'yoyo'
};

var superHeroes:SuperHero[]=[];

superHeroes.push(fartman);

var places:string[]=['jpr','del','bom','chd'];

// console.log(superHeroes);


// console.log('4 '+2);

let randNumber:number=1;
// console.log("randNumber++"+   randNumber++);
// console.log(randNumber);
// console.log("++randNumber"+   ++randNumber);
// console.log("randNumber--"+   randNumber--);
// console.log("--randNumber"+   --randNumber);



let samplet:number=123;

if(true){
    let samplet='name';
    // console.log('innerScope',samplet);
}
// console.log('outerscope',samplet);


var numbers:number[]=[13,4.3,232.2,323];

for(let val of numbers){
    // console.log(val);
}

console.log('+++++++++');

for(let val in numbers){
    // console.log(val);
}



var sumTotal=function(num:number,str:string,arr:string[]):number{
    return 4;
}

var theSum



