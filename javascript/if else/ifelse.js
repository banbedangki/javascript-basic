var age = prompt("Please enter your age?");
var ageNumber = parseInt(age);
if(ageNumber < 16){
    alert("You don't have permission to access");
}
else if(ageNumber < 18){
    alert("You have access censored");
}else{
    alert("Wellcome to cambay.info!");
}