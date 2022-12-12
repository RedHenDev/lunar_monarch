let ground;
let grounded=false;

function genTerrain(){
	if (!grounded) setupGroundPlane();
	
	push();
	
	//background(0,132,232);
  background(0,0,0);
	
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
    
	// Oh, to optimize a little I could record this
	// value from above terrain generation.
  let y = noise((adjust-
                 posX)/freq,
          (adjust-posZ)/freq)*amp;
  let target=bh*y*0.5;
	
	// Go up or down?
  let guod=target-subY;
	// default scale is 42.
	let buggyScale=6;
  subY=lerp(subY,target,0.2);
   // if (frameCount % 200===0)
   //   print(y);
	let lunarBob=Math.sin(frameCount*0.1)*
			buggyScale*0.5;
  translate(0,
						-subY-bh-buggyScale*2+lunarBob,
						0);
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
    rotateZ(-guod*0.04);
    // Shakey.
    //rotateX(random()*5-2.5);
    scale(buggyScale);
    normalMaterial();
    //specularMaterial(75);
    //emissiveMaterial(0,255,32);
    shininess(0.1);
    
    //sphere(64);
    model(goblin);
  pop();	
}

function lightingSteering(){
// Lighting.
  let locX = mouseX - width * 0.5;
  
	pointLight(177, 177, 277,
             locX, -2048,
             Math.sin(frameCount*
                      0.01)*2000);
  
  // Positioning of camera.
  // We correlate this to max
  // amp of terrain; so, mult this
  // by half the voxel height.
  // NB here we can move the
  // camera away from terrain
  // by -n.
  //translate(0,amp*bh*0.6,-940);
	translate(0,amp*bh*0.42,bs);
  rotateX(-15);
  // Pitch control.
  steerX+=(mouseY-
        pMouseY)*mouseSensitivity;
  pMouseY=mouseY;
  if (steerX<-5) steerX = -5;
  else if (steerX>45) steerX = 45;
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
	
	//translate(-cols*0.5*bs,amp*bh*0.4,-rows*0.5*bs);
	translate(0,amp*bh*0.3,0);
	rotateX(90);
	
	fill(200);
	//stroke(0);
	//strokeWeight(1);
	specularMaterial(128);
	const vh=bh
	
	for (let z = -rows*0.5; z < rows*0.5; z+=1){
		beginShape(TRIANGLE_STRIP)
		for (let x = -cols*0.5; x < cols*0.5; x+=1){
		let y = noise((adjust+x*bs-posX)/freq,
                  (adjust+z*bs-posZ)/freq)*amp;
		let y2 = noise((adjust+x*bs-posX)/freq,
                  (adjust+(z+1)*bs-posZ)/freq)*amp;
			vertex(x*bs,z*bs,y*vh);
			vertex(x*bs,(z+1)*bs,y2*vh);
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
    let y = noise((adjust+x*bs-posX)/freq,
                  (adjust+z*bs-posZ)/freq)*amp;
      
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
    translate(floor(x*bs),
              floor(-y*bs),
              floor(z*bs));
    //texture(soilTex);
    //specularMaterial(128);
    shininess(0.1);
    
    box(bs,bh,bs);
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

