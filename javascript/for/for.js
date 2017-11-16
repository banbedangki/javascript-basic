for(var i = 0; i < 10; i++){
    console.log(i);
}

var sum = 0;
for(var i = 0; i < 10; i++){
    sum += i;
}
document.write(sum);

var factotial = 1;
for(var i = 10; i>=1; i--){
    factotial *= i;
}
console.log(factotial);

var array = [1, "two", 3, "four", 5];
for(var i = 0; i < array.length; i++){
    console.log(array[i]);
}