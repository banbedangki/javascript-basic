var obj = {
    num: 2
};
var obj1 = {
    num: 5
};

var addToThis = function(a, b, c){
    return this.num + a + b + c;
};
var arr = [3, 2, 1];

console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj1, arr));