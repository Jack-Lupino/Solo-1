function solveProblem_1() {
	var limit = document.getElementById('p1-input').value;
	var sum=0;
	var lastIndex=0;
	var result = "If we list all the natural numbers below "
				+limit+" that are multiples of 3 or 5, we get ";

	if (limit=='') {
		document.getElementById('p1-results').innerHTML = "You did not enter a number.";
		return;
	}

	for(var i=1; i<limit; i++) {
		if(i%3==0 || i%5==0) {
			lastIndex = i;
		}
	}
	for(var i=1; i<limit; i++) {
		if(i==lastIndex && limit>5) {
			result = result.substr(0, result.length-2);
			result+=" and ";
		}
		if(i%3==0 || i%5==0) {
			result+=i+", ";
			sum+=i;
		}
	}

	if (limit<=3) {
		result+="no numbers.";
	}
	else {
		result = result.substr(0, result.length-2);
		result += ".\nThe sum of these multiples is "+sum+".";
	}
	document.getElementById('p1-results').innerHTML = result;	
}