function Person(firstname, lastname){
    this.firstname = firstname || "";
    this.lastname = lastname || "";
};
Person.prototype.getFullName = function(){
    return this.firstname + " " + this.lastname;
};

function Student(firstname, lastname, schoolName, grade){
    Person.call(this, firstname, lastname);
    this.schoolName = schoolName || "";
    this.grade = grade || "";
};
Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.getFullName = function(){
    return this.firstname + " " + this.lastname + " " + this.schoolName + " " + this.grade;
};

var std = new Student("Phan", "Bình", "TDT13050302", "University");
console.log(std.getFullName());
