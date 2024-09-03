function get_result(){
    var get_value=document.getElementById("get").value;
    if(get_value>=33 && get_value<=39){
        document.getElementById("set").innerHTML="D";
    }
    if(get_value>=40 && get_value<=49){
        document.getElementById("set").innerHTML="C";
    }
    if(get_value>=50 && get_value<=59){
        document.getElementById("set").innerHTML="B";
    }
    if(get_value>=60 && get_value<=69){
        document.getElementById("set").innerHTML="A";
    }
    if(get_value>=70 && get_value<=79){
        document.getElementById("set").innerHTML="A";
    }
    if(get_value>=80 && get_value<=100){
        document.getElementById("set").innerHTML="A+";
    }
    
}

function set_color(){
    alert("You are come in right place,contact 01320704726");
}


function name(){
    document.getElementById("setss").innerHTML="you are mad";
}

function change_effect(){
    var get_effect_value=document.getElementById('effect').value;
    if(get_effect_value=="khulna"){
        document.getElementById("effect").style.color="red"; 
    }
    if(get_effect_value=="hasan"){
        document.getElementById("effect").style.color="green"; 
    }
    if(get_effect_value=="hamim"){
        document.getElementById("effect").style.color="blue"; 
    }
   
}

/*
onclick
ondbclick
onmouseout
onchange
*/
