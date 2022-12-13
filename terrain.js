let ground;
let grounded=false;

function genTerrain(){
	//if (!grounded) setupGroundPlane();
	
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
	let y = noise((adjust-posX)/cfreq,
                  (adjust-posZ)/cfreq)*camp;
	
  y += noise((adjust-
                 posX)/freq,
          (adjust-posZ)/freq)*amp;
  //let target=bh*y*0.5;
	target=y*0.5*bh;
	
	// Go up or down?
  let guod=target-subY;
	// default scale is 42.
	let buggyScale=42;
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
    rotateZ(-guod*0.1);
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
  //let locX = mouseX - width * 0.5;
  
//	pointLight(255, 255, 255,
//             - width * 0.5, -4000,
//             Math.sin(frameCount*
//                      0.01)*2000);
	lights();
//	pointLight(255, 255, 255,
//             - width * 0.5, -1000,
//             -2000);
	
	pointLight(177, 0, 255,
             -width*0.5+100, 0,
             -2000);
	pointLight(0, 255, 0,
             width*0.5-100, 0,
             -2000);
//  directionalLight(250, 250, 250,
//									 -width * 0.5, 
//									 -height * 0.5, 
//									 -1);
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
	
	translate(0,amp*32,-1950);
  
	rotateX(-25);
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
	
	//translate(0,amp*tbh*0.3,0);
	translate(0,(amp+camp)*tbh*0.5,0);
	rotateX(90);
	
	fill(255);
	//stroke(0);
	//strokeWeight(1);
	specularMaterial(74);
  shininess(0.1);
	//textureMode(NORMAL);
	//textureWrap(REPEAT,REPEAT);
	//texture(moonTex);
	
	for (let z = -trows*0.5; z < trows*0.5; z+=1){
		beginShape(TRIANGLE_STRIP)
		for (let x = -tcols*0.5; x < tcols*0.5; x+=1){
			
		let y = noise((adjust+x*tbs-posX)/cfreq,
                  (adjust+z*tbs-posZ)/cfreq)*camp;
		let y2 = noise((adjust+x*tbs-posX)/cfreq,
                  (adjust+(z+1)*tbs-posZ)/cfreq)*camp;	
			
		y += noise((adjust+x*tbs-posX)/freq,
                  (adjust+z*tbs-posZ)/freq)*amp;
		y2 += noise((adjust+x*tbs-posX)/freq,
                  (adjust+(z+1)*tbs-posZ)/freq)*amp;
			
			
			
			vertex(x*tbs,z*tbs,y*tbh);
			vertex(x*tbs,(z+1)*tbs,y2*tbh);
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
			
    //specularMaterial(0,200,0);
		//shininess(0.6);
			
		fill(0,255,0,32);
		//stroke(0,0,0,32);
		//strokeWeight(3);
    
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

