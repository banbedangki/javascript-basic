var person = {
    firstname: String,
    lastname: String,
    getFullname(){
        return this.firstname + " " + this.lastname;
    }
}

person.firstname = "Binh";
person.lastname = "Phan";
console.log(person.getFullname());

function Person(){
    this.firstname = "",
    this.lastname = "",
    this.age = 0
}; var ps = new Person();
console.log(ps);