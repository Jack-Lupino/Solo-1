function preload() {
  mario = loadImage('media/sprites/mario-stat.png');
  ground = loadImage('media/sprites/grass.png');
}

var currentState = "beginning";
var initialPosX = 80;
var initialPosY = 250;

var player = {
	x: initialPosX,
	y: initialPosY,
	sizeX: 64,
	sizeY: 128
};


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

var loadScene1 = function() {
	currentState = "beginning";
	background(255, 255, 255);
	fill(0, 85, 255);
	textSize(25);
	textAlign(CENTER);
	text("The Beginning", width/2, height/2);
}

var loadScene2 = function() {

	currentState = "main";
	background(25, 100, 255);
	fill(0, 120, 0);
	
	text("It has begun", width/2, height/2);
	image(ground, 0, height-100, width, 100);
	image(mario, player.x, player.y, player.sizeX, player.sizeY);

	if (keyIsDown(65)) {
		console.log('A is pressed');
		player.x -= 5;
	}
	if (keyIsDown(68)) {
		console.log('D is pressed');
		player.x += 5;
	}
};

var draw = function() {
	if (currentState === "main") {
		loadScene2();
	}
}

/*
	HTML button behaviour.
*/

function beginGame() { 
	player.x = initialPosX;
	player.y = initialPosY;
	loadScene2();
}

function resetGame() { 
	loadScene1();
}