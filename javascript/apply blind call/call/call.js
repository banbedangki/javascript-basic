var obj = {
    num: 2
};

var addToThis = function(a, b, c){
    return this.num + a + b + c;
};

console.log(addToThis.call(obj, 3, 2, 1)); //functionname.call(obj, functionargumentes)
