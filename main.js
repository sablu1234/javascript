/*
const name="hadi jaman";
const cell="01320704726";
const email="mdsablu@gamil.com";
const website="mamurjor.com";

console.log("Person Name "+name+" Person Cell "+cell+website);
*/
// Number string Object,Boolean,Array
// let product_price=50000;
// let product_qty=2;
// let product_name="friz";
// let total_price=product_price*product_qty;

// let per_payment=5;

// let per_payment_amount=total_price/per_payment;

// alert(product_name+"ar per payment:"+per_payment_amount );


// var course_fee=3000;
// if(course_fee!=3000){
// document.getElementById('place').innerHTML="sorrry course fee must be 3000 for webdesign";
// }
// else{
//     document.getElementById('place').innerHTML="welcome to mamaurjor";
// }



// var module_one="webdesign";
// var module_two="custommization";
// var module_three="oop using php";
// var module_four="Theme development and woocommerce theme development";
// if(module_one=="webdesign" && module_two=="custommization" && module_three=="oop using php" && module_four=="Theme development and woocommerce theme development"){
//     document.getElementById("place").innerHTML="You are Full stack";
// }
// else{
//     document.getElementById("place").innerHTML="you are not fullstack";
// }


// var full_stack="mamurjor_team";
// if(full_stack=="mamurjor_online" || full_stack=="mamurjor_offline" || full_stack=='mamurjor_team'){
//     document.getElementById('place').innerHTML="insallah apner dal vater bebosta hobe";
// }
// else{
//     document.getElementById('place').innerHTML='ami bolte partesi na ';
// }

//Data Type
// 1.string
// 2.Number
// 3.Boolean
// 4.Array
// 5.Object
// 6.Undefind
// 7.Null

// var course_fee= {
//     "webdesign" :3000,
//     "Theme_Customization" :2500,
//     "theme_development" :3200,
//     "laravel": 12000,
// }

// var name=null;
// document.getElementById("place").innerHTML="Mamurjot  course fee "+course_fee.laravel;



// Selectors
// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()
// getElementsByName()

var course_fee= {
    "webdesign" :3000,
    "Theme_Customization" :2500,
    "theme_development" :3200,
    "laravel": 12000,
}

// var classes= document.getElementsByTagName('h2');
document.querySelector('h1').style.backgroundColor="red";
// classes[0].innerHTML='Laravel course fee: '+course_fee.laravel;

