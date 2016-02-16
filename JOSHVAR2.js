var ten = 10;
var twenty = 20;
var thirty = 30;

var ADD = ten + twenty;
var MINUS = twenty - ten;
var MULTIPLY = twenty * ten;
var DIVIDE = twenty / ten;
var ADDALL = ten + twenty + thirty

function numberCalc(){
	var numberone = document.getElementById("number1").value;
	var numbertwo = document.getElementById("number2").value;
	var answer = numberone + numbertwo;
	alert (answer);

}


// document.getElementById("ADD").innerHTML = " I will add " + ten + " With " + twenty + " and it will be " + ADD + ".";
// document.getElementById("ADD").style.color="Pink";
// document.getElementById("ADD").style.fontFamily="Courier";

// document.getElementById("MINUS").innerHTML = "When I MINUS " + twenty + " from " + ten + " I get " + MINUS + ".";
// document.getElementById("MINUS").style.color= "Orange";
// document.getElementById("MINUS").style.fontFamily="Times New Roman";

// document.getElementById("MULTIPLY").innerHTML = "When I MULTIPLY " + twenty + " by " + ten + " I get " + MULTIPLY + ".";
// document.getElementById("MULTIPLY").style.color= "blue";
// document.getElementById("MULTIPLY").style.fontFamily="Arial"

// document.getElementById("DIVIDE").innerHTML = "When I DIVIDE " + twenty + " by " + ten + " it is " + DIVIDE + ".";
// document.getElementById("DIVIDE").style.color= "red"; 
// document.getElementById("DIVIDE").style.fontFamily= "Verdana";

