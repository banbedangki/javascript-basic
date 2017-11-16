//Arithmetic: toán tử số học
var a = 10;
var b = 9;
var d = "10";
var c = a + b;
console.log(c);
var c = a - b;
console.log(c);
var c = a * b;
console.log(c);
var c = a / b;
console.log(c);
var c = a % b;
console.log(c);

//Comparison: toán tử so sánh
var a1 = a==b;
console.log(a1); //false
var a1 = a==d;
console.log(a1);
var a1 = a===d; //so sánh kiểu
console.log(a1);
var a1 = a != b;
console.log(a1);

//Logical: toán tử logic
if(a == b && a == d){
    console.log("Ok!");
}else{
    console.log("not Ok!");
}

if(a == b || a == d){
    console.log("Ok!");
}else{
    console.log("not Ok!");
}

if(a != b){
    console.log("Ok!");
}else{
    console.log("not Ok!");
}

//Assgment: toán tử gán
var f = a + b;
console.log(f += f);

var f = a * b;
console.log(f %= f);

//Ternary: toán tử 3 ngôi, điều kiện ? trả về 1 đúng vè 0 sai
var x = a==b ? 1 : 0;
console.log(x);

var x = a===d ? "right" : "wrong";
console.log(x);