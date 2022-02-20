const gatherHeader = `
<p id="time">00:00:00, 0000/00/00</p>
<header class="section">
    <h1>Project Solo-1</h1>
</header>
<hr>
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="Literature.html">Literature</a></li>
        <li><a href="Project-Euler.html">Project Euler</a></li>
        <li><a href="Features.html">Features</a></li>
        <li><a href="Cryptography.html">Cryptography</a></li>
        <li><a href="Reference.html">Reference</a></li>
    </ul>
</nav>
<hr>
`
const gatherFooter = `	   
<hr>
<footer>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="Literature.html">Literature</a></li>
        <li><a href="Project-Euler.html">Project Euler</a></li>
        <li><a href="Test-page.html">Features</a></li>
        <li><a href="Cryptography.html">Cryptography</a></li>
        <li><a href="Reference.html">Reference</a></li>
    </ul>
</footer> 
`

const gather = {
    head: gatherHeader, 
    foot: gatherFooter
}

export default gather