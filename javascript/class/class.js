function person(firstName, lastName, age){
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.age = age || 22;
    this.getFullname = function(){
        return this.firstName + " " + this.lastName + " " +this.age;
    }
}
var ps = new person("Phan", "Binh", 22);

console.log(ps.firstName + " " + ps.lastName + " " + ps.age);
var ps1 = new person();
ps1.firstName = "Binh1";
ps1.lastName = "Pha1n";
console.log(ps1.getFullname());