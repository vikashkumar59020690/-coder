const button = document.querySelector(".button");
let flag = false;

button.addEventListener("click", function(){
    if(flag==true){
        this.style.backgroundColor="White";
        flag = false;
        button.innerHTML="Now Color is White"
        
    }
    else{
        this.style.backgroundColor = "red";
        button.innerHTML="Now Color is red"
        flag = true;

    }
   
})



//Alert Box that display greeting message based on current time

var today  = new Date();
var currHour = today.getHours();    
if(currHour<12){
    alert("Good Morning")
}

else if(currHour<18){
    alert("Good Afternoon")
}

else{
    alert("Good Evening")
}





const fnum = document.querySelector("#fnum");
const snum = document.querySelector("#snum");
const res = document.querySelector(".res");

const add = document.querySelector(".add");
var  val1 =parseFloat((fnum).value);
var  val2 =parseFloat((snum).value);
var ans = val1+val2;


console.log(ans);
add.addEventListener("click", function(){
  
    res.innerHTML = ans;

})




function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerText = "Result: " + result;
}

