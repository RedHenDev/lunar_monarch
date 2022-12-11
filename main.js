// For speed.
p5.disableFriendlyErrors=true;

function preload(){
  // goblin=
  //   loadModel('imp_storm.obj');
  // goblin=
  //   loadModel('car1.obj');
  goblin=
    loadModel('shuttle.obj');
  soilTex=loadImage('soil.jpg');
  
  loadSounds();
  
  // Must load font for
  // WEBGL context.
//  myFont=loadFont('OpenSans-Regular.ttf');
//  textFont(myFont);
//	textSize(32);
//	textAlign(CENTER,CENTER);
}

function setup() {
  createCanvas(windowWidth,
               windowHeight,
               WEBGL);
  
  angleMode(DEGREES);
  
  strokeWeight(8);
  noStroke();
  noiseSeed(99);
  noCursor();
  
  setupLoco();
  
  // Land position.
  landPos = createVector(0,0);
  landPrev = createVector(0,0);
  
  // Offset in Perlin terrain, to avoid
  // mirroring of terrain features.
  adjust = floor(bs*999);
  
  // Centre mouse.
  mouseX = width*0.5;
  mouseY = height*0.5;
  pMouseX=mouseX;
  pMouseY=mouseY;

  bs = floor((height/rows)*blockScaleFactor);
  bh = bs * 2;
	
  startRadio();
  genTerrain();

}


function draw(){
	
  doInput();
  engine();
  genTerrain();
	
	push();
	translate(0,0,0);
	//strokeWeight(1);
	//stroke(255);
	fill(255,0,0);
  text("Area: ",
         -width/2,
         -height/2);
	//textSize(42);
	//ui.circle(mouseX,mouseY,42);
	//ui.background(0,42,42);
	
	plane(64,64);
	//fill(255,0,0);
	//circle(0,0,64);
	pop();
	
}