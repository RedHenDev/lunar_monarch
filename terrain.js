let ground;
let grounded=false;

function generalPerlin(_x,_z){
	// Oh, to optimize a little I could record this
	// value from above terrain generation.
	/*
	let y = noise((posX+_x)/cfreq,
                  (posZ+_z)/cfreq)*camp;
	
	// Adjustment to offset the octaves.
  y += noise((posX+_x+876)/freq,
          (posZ+_z)/freq)*amp;
	*/
	
	let y=0;
	let offset=999; // To offset the octaves.
	
	for (let i=0; i < freqs.length; i++){
		y += noise((posX+_x)/freqs[i],
										(posZ+_z)/freqs[i])*amps[i];
	}
	
	return y;
}

function genTerrain(){
	//if (!grounded) setupGroundPlane();
	
	push();
	
	//background(0,132,232);
  //background(0,Math.sin(frameCount*0.01)*122+122,0);
	background(0);
	
	lightingSteering();
	
	triTerrain();
	
  //voxelTerrain();

	renderCraft();
  
  pop();
}

function setupGroundPlane(){
	//ground=plane(1024,1024,512,512);
}

function renderCraft(){
push();
    
	let y = generalPerlin(0,-320);
  //let target=y*(amp+camp)*2+height*0.5;
	let target=y;
	
	// default scale is 42.
	let buggyScale=150;
  subY=lerp(subY,target,0.2);
   
	let lunarBob=Math.sin(frameCount*0.1)*
			buggyScale*0.5;
  translate(0,
						-y,
						-700-320);
    goblinY=
      lerp(goblinY,steerY,0.1);
	
    //rotateX(180);
    // These rotations for
    //shuttle.
    // Car needed 180 on X, and
    // - on Y, and 180 on Y.
    rotateZ(180);
    rotateY(goblinY+90);
    rotateY(180);
    // Nodding pitch animation.
		// Go up or down?
  	let guod=(target-subY)*-0.33;
    //rotateZ(-guod*0.1);
		goblinZ=lerp(goblinZ,guod,0.04);
		rotateZ(goblinZ);
		
	// Roll animation.
//	goblinX=
//      lerp(goblinX,steerY,0.1);
//	rotateX(goblinX+45);
	
    // Shakey.
    //rotateX(random()*5-2.5);
    scale(buggyScale);
    normalMaterial();
    //specularMaterial(75);
    //emissiveMaterial(0,255,32);
    shininess(10);
    
    //sphere(64);
    model(goblin);
  pop();	
}

function lightingSteering(){
// Lighting.
	
	// To map a light source to mouse position.
  //let locX = mouseX - width * 0.5;
  
	// ***********
	// ***********
	// Main overhead light...moving.
//	pointLight(255, 255, 255,
//             - width * 0.5, -height,
//             Math.sin(frameCount*
//                      0.01)*4000);
	// ***********
	// ***********
	
	// Built in basic lights 
	// (ambient and directional...I think).
	//lights();
	
	// Basic light. Allows shadows & detail across terrain.
	pointLight(220, 220, 200,
             0, 0,-1400);
	
	// ***********
	// ***********
	// Pink green headlights.
	pointLight(177, 0, 255,
             -width*0.5+100, 0,
             -600);
	pointLight(0, 255, 0,
             width*0.5-100, 0,
             -600);
	// ***********
	// ***********
	
//  directionalLight(250, 250, 250,
//									 -width * 0.5, 
//									 -height * 0.5, 
//									 -10000);
	
	
  // Positioning of camera.
  // We correlate this to max
  // amp of terrain; so, mult this
  // by half the voxel height.
  // NB here we can move the
  // camera away from terrain
  // by -n.
  //translate(0,amp*bh*0.6,-940);
	
	// Sync with triterrain.
	//translate(0,amp*bh*0.42,bs*2);
	
	let y = generalPerlin(0,0);
	
	camTarget = lerp(camTarget,y*1.5,0.1);
	//translate(0,camTarget,-340);
	translate(0,camTarget,-700);
  
	// Default -25.
	rotateX(-40);
	
  // Pitch control.
//  steerX+=(mouseY-
//        pMouseY)*mouseSensitivity;
  //pMouseY=mouseY;
//  if (steerX<-5) steerX = -5;
//  else if (steerX>45) steerX = 45;
	
  steerY+=(mouseX-pMouseX)*mouseSensitivity;
   // *0.5 above Dampen yaw.
	// NB p5 now features a movedX and movedY for mouse!
  pMouseX=mouseX;
  //rotateX(-steerX);
  rotateY(steerY);
  
  // Mousetrap.
  // Prevents mouse getting stuck steering.
//   if (mouseX < 5) {pMouseX=
// pMouseX=mouseX=width*0.5;
//   pMouseY=mouseY=height*0.5;}
//   // if (mouseX > width-5) {pMouseX=mouseX=5;}	
}

function triTerrain(){
push();
	
	rotateX(90);
	
	//fill(255);
	//stroke(0);
	//strokeWeight(1);
	
	//ambientMaterial(176);
	
	specularMaterial(176);
  shininess(25);
	
	//textureMode(NORMAL);
	//textureWrap(REPEAT,REPEAT);
	//texture(moonTex);
	
	for (let z = -trows*0.5; z < trows*0.5; z+=1){
		beginShape(TRIANGLE_STRIP)
		for (let x = -tcols*0.5; x < tcols*0.5; x+=1){
			
		let y = generalPerlin(x*tbs,z*tbs);
		let y2 = generalPerlin(x*tbs,(z+1)*tbs);
			
			vertex(x*tbs,z*tbs,y);
			vertex(x*tbs,(z+1)*tbs,y2);
			
		}
		endShape();
	}
	
	pop();	
}

function voxelTerrain(){
// Our grid of blocks.
  for (let z = -rows*0.5; z < rows*0.5; z++){
    for (let x = -cols*0.5; x < cols*0.5; x++){
    push();
      
    // Perlin noise to derive y-posZ
    // of each block.
      //posX = posX + 0.1;
    let y = generalPerlin(x*bs,z*bs);
			
    // If 'minecraft' mode of appearance,
    // round down y posZ to a whole number,
    // and draw black block outlines.
    if (mc) {
      y = floor(y);
      //stroke(0);
    } else {
      //noStroke();
    }
      
    // Translate to block posZ.
		// Note we are using tbs, and (1.5 or 3) is magic...
    translate(floor(x*bs),
              floor(-y*tbs*1.5),
              floor(z*bs));
    
		//texture(moonTex);
			
    //specularMaterial(0,200,0);
		//shininess(0.6);
			
		//fill(0,255,0,32);
		//fill(0,222,0);
		//stroke(0,0,0);
		//strokeWeight(1);
    
		rotateX(90);
    plane(bs,bs);
			
    //box(bs,bh,bs);
      /*
    // Now translate to just above block
    // to draw another, flat block to
    // serve as grass.
    translate(0,-bh*0.51,0);
    //texture(grass);
    specularMaterial(0,255,0);
    // White 'snow' if at particular height.
    if (y > 8)emissiveMaterial(255);
    shininess(100);
    box(bs,bs*0.1,bs);
    */
    
    pop();
    }
    
  } 	
}

