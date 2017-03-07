Function.prototype.method=function(name,func){
    this.prototype[name]=func;
    return this;
}

function name(str){
    return "my name is"+str;
}

console.log(name('siddharth'));