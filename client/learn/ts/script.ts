class Student{
    
    public name:string;
    public fullName:string;
    constructor(public firstName,public lastName,public name){
        this.fullName= "helllo " +(firstName+" " +lastName)+ " goodperson"; 
    };
    public doubleCount(number:number){
        console.info(number*2);
    }
    public tripleCount(str:string){
        console.log(str,'inside private');
    }
    public printArray(arr:Array<number>){
        for(var i=0;i<10;i++){
            
        }
    }
}
interface Person{
    firstName:string,
    lastName:string
};

function hello(person:Person){
    return `hello ${person.firstName}+${person.lastName} person,
    how are you?`;
}
var user=new Student("oskar","schindler");
user.doubleCount(10);
user.tripleCount('wow');
console.info(user.fullName);