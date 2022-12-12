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
let pg;
function setup() {
  createCanvas(windowWidth,
               windowHeight,
               WEBGL);
  
	// For text.
	pg = createGraphics(200, 200);
  pg.textSize(75);
	
  angleMode(DEGREES);
  
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
	
	trows=128; // Default 128. Performance.
	tcols=128;
	tbs = 64; // Default 42.
	tbh = amp*6;
	
	rows=32; // 32 Performant.
	cols=32;
	bs = floor(((height+trows-rows)/
							(trows))*blockScaleFactor);
  bh = bs * 2;
	
	//ambientLight(50);
	
  startRadio();
  genTerrain();

}


function draw(){
	
  doInput();
  engine();
  genTerrain();
	
	pg.background(255);
  pg.text(random(0,9),0,100);
  //pass image as texture
  texture(pg);
  rotateX(45);
  //noStroke();
  plane(200);
	
}