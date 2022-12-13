// For speed.
p5.disableFriendlyErrors=true;

function preload(){
  // goblin=
  //   loadModel('imp_storm.obj');
  // goblin=
  //   loadModel('car1.obj');
  goblin=
    loadModel('assets/shuttle.obj');
  moonTex=loadImage('assets/moon_tex.png');
	//moonTex=loadImage('assets/moon_tex.png');
  
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
  createCanvas(windowWidth,
               windowHeight,
               WEBGL);
  
	// places us upside down.
	//frustum(-width/2, width/2, -height/2, height/2, 1000, -1000);
//	frustum(-width/2, width/2, height/2, -height/2, 1000, -3000);
	
	
	// For text.
	pg = createGraphics(200, 200);
  pg.textSize(75);
	
  angleMode(DEGREES);
  //perspective(70, width / height, 0.1, -9400);
	// To display 3D cords on screen.
	//debugMode();
	
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

  //bs = floor((height/rows)*blockScaleFactor);
  //bh = bs * 2;
	
	//bs = 42;
	//bh = amp*6;
	
	trows=142; // Default 128. Performance.
	tcols=142;
	tbs = 64; // Default 42.
	tbh = amp*6;
	
	rows=32; // 32 Performant.
	cols=32;
	bs = floor(((height+trows-rows)/
							(trows))*blockScaleFactor);
  bh = bs * 2;
	
	//ambientLight(50);
	setupStars();
  startRadio();
  genTerrain();

}


function draw(){
	
  doInput();
  engine();
	
  genTerrain();
	//drawStars();
	// ui
//	pg.background(0,100,100);
//	pg.fill(255);
//  pg.text(frameRate(),0,100);
//  //pass image as texture
//  texture(pg);
//  //rotateX(frameCount);
//  //noStroke();
//  plane(200);
	
}