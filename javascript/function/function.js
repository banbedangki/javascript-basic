function showMessage(){
    document.write("Hello World!");
};
showMessage();

//function parameters
function getFullname(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    document.write(this.firstname + " " + this.lastname);
    return this.firstname + " " + this.lastname;
};
console.log(getFullname("binh", "phan"));

function calculate(){
    function add(a, b){
        return a + b;
    };
    return add;
};

var c = calculate();
console.log(c(10, 20));

//function expression
var add = function sum(a, b){
    return a + b;
}
console.log(add(10, 20));

//anonymous function use callback()
var add = function (a, b){
    return a + b;
}
console.log(add(11, 21));