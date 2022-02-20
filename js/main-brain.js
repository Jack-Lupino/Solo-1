// const headElem = document.querySelector("head")
// const meta = document.createElement("script")
// meta.setAttribute("type", "module")
// meta.setAttribute("src", "js/modules/frame.mjs")
// headElem.append(meta)
$("head").append(
	$(`<script type="module" src="js/modules/frame.mjs"></script>`)
)
function printTime(){
	let date = new Date();
	$("#time").html(date.toLocaleTimeString() + ", " + date.toLocaleDateString());
}
setInterval(printTime, 1000);

function bd() {
	$("#foot #prog").remove();
	alert('Function finished.');
}

$("#p1-input").on('keypress',function(e) {
    if(e.which == 13) {
        $("#p1-button").click();
    }
});
