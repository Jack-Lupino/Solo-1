const headElem = document.querySelector("head")
const meta = document.createElement("script")
meta.setAttribute("type", "module")
meta.setAttribute("src", "js/modules/frame.mjs")
headElem.append(meta)

// class MetaHTML extends HTMLElement {
// 	connectedCallback() {
// 		this.innerHTML = `
// 		<meta charset="UTF-8">
// 		<link rel="stylesheet" href="css/main-style.css">
// 		<link href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC" rel="stylesheet"> 
// 		<link rel="shortcut icon" type="image/x-icon" href="media/favicon.ico">
// 		`;
// 	}
// }
// class Header extends HTMLElement {
// 	connectedCallback() {
// 	  this.innerHTML = `
// 	  <p id="time">00:00:00, 0000/00/00</p>
// 	  <header class="section">
// 		  <h1>Project Solo-1</h1>
// 	  </header>
// 	  <hr>
// 	  <nav>
// 		  <ul>
// 			  <li><a href="index.html">Home</a></li>
// 			  <li><a href="Literature.html">Literature</a></li>
// 			  <li><a href="Project-Euler.html">Project Euler</a></li>
// 			  <li><a href="Features.html">Features</a></li>
// 			  <li><a href="Cryptography.html">Cryptography</a></li>
// 			  <li><a href="Reference.html">Reference</a></li>
// 		  </ul>
// 	  </nav>
// 	  <hr>
// 	  `;
// 	}
//   }
// class Footer extends HTMLElement {
// 	connectedCallback() {
// 	  this.innerHTML = `	   
// 	  <hr>
// 	  <footer>
// 		  <a href="index.html">Home</a></li>
// 		  <a href="Literature.html">Literature</a>
// 		  <a href="Project-Euler.html">Project Euler</a>
// 		  <a href="Test-page.html">Features</a>
// 		  <a href="Cryptography.html">Cryptography</a>
// 		  <a href="Reference.html">Reference</a>
// 	  </footer> 
// 	  `;
// 	}
// }
// customElements.define('main-header', Header);
// customElements.define('main-footer', Footer); 
// customElements.define('main-meta', MetaHTML);

// $(function() {
// 	$("#inject").load('templates/header.html');
// });

// $(document).ready(function(){
   
// 	$("#inject").load("templates/header.html");
 
//  });

$(".section").html = "thi"

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
