function printTime(){
	let date = new Date();
	let formatDate = date.toLocaleTimeString() + ", " + date.toLocaleDateString();
	document.getElementById('time').innerHTML = formatDate;
}
setInterval(printTime, 1000);

function bd() {
	let p = document.getElementById("foot");
	let c = document.getElementById("prog");
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
