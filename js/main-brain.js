function printTime(){
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	(hour).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
	(minute).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
	(second).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
	
	document.getElementById('time').innerHTML = hour+":"+minute+":"+second;
}
setInterval(printTime, 1000);

function bd() {
	var p = document.getElementById("foot");
	var c = document.getElementById("prog");
	p.removeChild(c);
	alert('Function finished.');
}

function enterPress(e, buttonId)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById(buttonId).click();
        return false;
    }
    return true;
}
