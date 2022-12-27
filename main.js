// For speed.
p5.disableFriendlyErrors=true;

function preload(){
	createVRCanvas();
	
  // goblin=
  //   loadModel('imp_storm.obj');
   car=
     loadModel('assets/car1.obj');
  goblin=
    loadModel('assets/shuttle.obj');
  //moonTex=loadImage('assets/2k_moon.jpg');
  
  loadSounds();
  
  // Must load font for
  // WEBGL context.
//  myFont=loadFont('OpenSans-Regular.ttf');
//  textFont(myFont);
//	textSize(32);
//	textAlign(CENTER,CENTER);
}
let pg;
function setup() {
//  createCanvas(windowWidth,
//               windowHeight,
//               WEBGL);
  
	// places us upside down.
	//frustum(-width/2, width/2, -height/2, height/2, 1000, -1000);
//	frustum(-width/2, width/2, height/2, -height/2, 1000, -3000);
	
	// Object in terrain test.
	carPos=createVector(999,0,7600);
	
	// For text.
	pg = createGraphics(200, 200);
  pg.textSize(75);
	
  angleMode(DEGREES);
  
	perspective(69, width/height,1,40000);
	
	// To display 3D cords on screen.
	//debugMode();
	
  strokeWeight(8);
  noStroke();
  noiseSeed(2022);
  noCursor();
  
  setupLoco();
  
  // Land position.
  landPos = createVector(999,7777);
  landPrev = createVector(999,7777);
  
  // Offset in Perlin terrain, to avoid
  // mirroring of terrain features.
  //adjust = floor(bs*999);
  
  // Centre mouse.
  mouseX = width*0.5;
  mouseY = height*0.5;
  pMouseX=mouseX;
  pMouseY=mouseY;

  //bs = floor((height/rows)*blockScaleFactor);
  //bh = bs * 2;
	
	//bs = 42;
	//bh = amp*6;
	
	trows=80; // Default 128. Performance.
	tcols=80;
	tbs = 200; // Default 42. 64 is OK.
	tbh = (amp+camp)/2; // Legacy amp*6;
	
	rows=32; // 32 Performant.
	cols=32;
	bs = floor(((height+trows-rows)/
							(trows))*blockScaleFactor);
  bh = tbh*2;

	// Terrain objects, including antbots.
	setup_objects();
	
	//setupStars();
  //startRadio();
  genTerrain();

}


function draw(){
	
  doInput();
  engine();
	push();
  genTerrain();
//	pop();
//	//drawStars();
//	// ui
//	pg.background(0,100,100);
//	pg.fill(255);
//  pg.text(posZ/bs+7777,0,100);
//  //pass image as texture
//  texture(pg);
//  //rotateX(frameCount);
//  //noStroke();
//  plane(200);
//	push();
	
}