// var inter = 100;
// function Whoisthis(){
//     var inter = 200;
//     alert("inter: " + inter);
//     alert("this.inter: "+ this.inter);
// };
// Whoisthis();

var myThis;
function valueofThis(){
    this.myThis = 200;
};

var myobj1 = new valueofThis();
console.log(myobj1.myThis);
var myobj2 = new valueofThis();
myobj2.myThis = 300;
console.log(myobj2.myThis);