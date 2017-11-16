//String Object
var str = new String("String Object"); //create new Object String
console.log(str);
var str1 = new String("hello");
var str2 = "hello";
var str3 = "world";
console.log(str1 == str2); //true
console.log(str1 === str2); //false
console.log(str2 + " " + str3);
for(var i = 0; i < str3.length; i++){
    console.log(str3[i]);
}

var str4 = "He said: \"Hello guys\" in my class";
console.log(str4);
console.log(str4.indexOf("Hello"));
console.log(str4.lastIndexOf("s"));
console.log(str4.replace("He", "She"));
