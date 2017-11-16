var obj1 = {
    num: 5
};
var addToThis = function(a, b, c){
    return this.num + a + b + c;
};

var bl = addToThis.bind(obj1);
console.dir(bl);
console.log(bl(1, 2, 3));
