//global scope: biến toàn cục
//local scope: phải có từ khóa var trong hàm
var username = "binh";

function modifyUsername(){
    username = "phan";
    var lastname = "thanh"; //local scope
};
function getName(){
    console.log(username);
};
modifyUsername();
getName();

for(var i = 0; i < 10; i++){
   // console.log(i);
}
console.log(i); //không giới hạn phạm vi biến trong câu lệnh rẻ nhánh

