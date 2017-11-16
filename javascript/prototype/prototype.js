function Person(){
    this.name = "";
    this.gender = "";
};
Person.prototype.age = 15;
Person.prototype.Sayhi = function(){
    alert("Hi");
};
var ps = new Person();
console.log(ps.age);