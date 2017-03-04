function greeter(person,isDone) {
    let color:string='blue';
    let returnString:string;

    let pyramid:Array<number>=[1,2,3,4,5];
    let names:Array<string>=['raju','kahu','steve','man','my man'];
    let pyramidStr:string='';
    for(let i:number=0,len:number=pyramid.length;i<len;i++){
        pyramidStr+=`
        
            ${pyramid[i]}- ${names[i]}
        `;

    }
    returnString=`

    ${color} 
    Hello ${person} are you for real ${isDone}
    `+pyramidStr;
    return returnString;
}

var user = "Jane User";

let isDone:boolean=false;

document.body.innerHTML = greeter(user,isDone);