
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2

	}
	ball = Bodies.circle(250,  200, 50, 180, ball_options);
	World.add(World, ball)

	groundObj = new ground(width / 2, 670, width, 20);

	leftSide = new ground(1100, 600, 20, 120);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();

	groundObj.display();





}

function KeyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce
	}
}

