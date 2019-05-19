var currentScene = "beginning";

var initialPosX = 200;
var initialPosY = 200;

var player = {
	x: initialPosX,
	y: initialPosY,
	faceSize: 50,
	eyeSize: 2/15 * 50,
	mouthSize: 1/2 * 50
};

var projectile = {
	bugPos: [],
	bulPos: []
};

var locked = false;

//Initialisation.
function setup() {
	//set canvas.
	canvasWidth = document.getElementById('sketch-section').clientWidth;
	canvasHeight = document.getElementById('sketch-section').clientHeight;
	var canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.parent('sketch-section');

	//set framerate.
	frameRate(60);

	//begin drawing.
	resetGame();
}

var loadBeginning = function() {
	currentScene = "beginning";
	background(255, 255, 255);
	fill(0, 85, 255);
	textSize(25);
	textAlign(CENTER);
	text("The Beginning", width/2, height/2);
}

var loadMain = function() {
	/*
		Updating properties.
	*/
	currentScene = "main";
	player.mouthSize = 1/2 * player.faceSize;
	player.eyeSize = 2/15 * player.faceSize;
	textSize(12);
	textAlign(LEFT);

	/*
		Drawing background and ruler.
	*/
	background(255, 255, 255);
	stroke(173, 222, 237);
	for(var rulerX = 0; rulerX<=width; rulerX += 50) {
		text(rulerX, rulerX, 10);
		
		line(rulerX, 0, rulerX, height);
	}
	for(var rulerY = 0; rulerY<=height; rulerY += 50) {
		text(rulerY, 0, rulerY);
		line(0, rulerY, width, rulerY);
	}
	stroke(0, 0, 0);

	/*
		Drawing player: face, eyes, mouth.
	*/
	// face
	fill(255, 255, 0);
	ellipse(player.x, player.y, player.faceSize, player.faceSize);
	// eyes
	fill(46, 46, 41);
	ellipse(player.x - 1/6 * player.faceSize, player.y - 1/6 * player.faceSize, player.eyeSize, player.eyeSize);
	ellipse(player.x + 1/3 * player.faceSize, player.y - 1/5 * player.faceSize, player.eyeSize, player.eyeSize);
	// mouth
	fill(252, 65, 65);
	ellipse(player.x + 1/6 * player.faceSize, player.y + 2/15 * player.faceSize, player.mouthSize, player.mouthSize);

	/*
		Keyboard functionality.
	*/

	if(keyIsDown(65) && player.x>player.faceSize/2) {
		player.x -= 5;
	}

	if(keyIsDown(68) && player.x<width-player.faceSize/2) {
		player.x += 5;
	}

	if(keyIsDown(87) && player.y>player.faceSize/2) {
		player.y -= 5;
	}

	if(keyIsDown(83) && player.y<height-player.faceSize/2) {
		player.y += 5;
	}

	if(keyIsDown(32)) {
		projectile.bulPos.push({x: player.x, y: player.y});
	}

	/*
		Projectile motion.
	*/
	// Player bullets shoot to the right.
	for(var i=0; i<projectile.bulPos.length; i++) {
		ellipse(projectile.bulPos[i].x, projectile.bulPos[i].y, 25, 15);
		projectile.bulPos[i].x+=(2);
	}
	//Mouse counter-projectiles shoot to the left.
	for(var i=0; i<projectile.bugPos.length; i++) {
		fill(80, 120, 0);
		ellipse(projectile.bugPos[i].x, projectile.bugPos[i].y, 50, 25);
		projectile.bugPos[i].x-=(2);
	}

	/*
		Mouse attachment: coordinates (x, y).
	*/
	noStroke();
	var mouseLoc = floor(mouseX) + ", " + floor(mouseY);
	fill(0, 0, 0);
	text(mouseLoc, mouseX+20, mouseY+30);
}

//Updating behaviour.
function draw() {
	if(currentScene === "main") {
		loadMain();
	}
}

/*
	User event behaviour.
*/

function mousePressed() {
	if (currentScene === "beginning") {
		beginGame();
	} 
	else if (currentScene === "main") {
		// Check if mouse is inside the circle
	  	var d = dist(mouseX, mouseY, player.x, player.y);
		if (d < player.faceSize/2) {
			locked=true;
		} else {
			locked=false;
		}
		projectile.bugPos.push({x: mouseX, y: mouseY});
	}
}

function mouseDragged() {
  	if (locked && currentScene === "main") {
		player.faceSize += mouseX - pmouseX;
	}
  	// prevent default
  	return false;
}


/*
	HTML button behaviour.
*/

function beginGame() { 
	player.x = initialPosX;
	player.y = initialPosY;
	loadMain();
	wipeUs();
}

function resetGame() { 
	loadBeginning();
	wipeUs();
}

function wipeUs() { //"Wipe"
	projectile.bugPos.length = 0;
	projectile.bulPos.length = 0;
}

function sizePlus() { //"Increase Size"
	player.faceSize+=5;
}

function sizeMinus() { //"Decrease Size"
	if(player.faceSize<1) return false;
	player.faceSize-=5;
}