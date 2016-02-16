var rides;
var permonth;
var answer;


function metroCalc(){
	rides = document.getElementById("rides").value;
	permonth = 30;
	answer  = rides * 3.00 * permonth;
	alert (answer + " Your amount ");
	correctnum();
}

function correctnum (){
	if (answer > 100 ) {
		alert("You are paying too much!");
	} else {
		alert("Your Amount is Good!")
	}
}
