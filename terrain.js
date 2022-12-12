function genTerrain(){
  
  //background(0,132,232);
  background(0,0,0);
  
  push();
  
  // Lighting.
  let locX = mouseX - width * 0.5;
  pointLight(177, 177, 177,
             locX, mouseY-
             height*0.5,
             Math.sin(frameCount*
                      0.01)*2000);
  
  // Positioning of camera.
  // We correlate this to max
  // amp of terrain; so, mult this
  // by half the voxel height.
  // NB here we can move the
  // camera away from terrain
  // by -n.
  translate(0,amp*bh*0.6,-940);
  //rotateX(-5);
  // Pitch control.
  steerX+=(mouseY-
        pMouseY)*mouseSensitivity;
  pMouseY=mouseY;
  if (steerX<-5) steerX = -5;
  else if (steerX>45) steerX = 45;
  steerY+=(mouseX-pMouseX)*mouseSensitivity;
   // *0.5 above Dampen yaw.
  pMouseX=mouseX;
  //rotateX(-steerX);
  rotateY(steerY);
  
  // Mousetrap.
  // Prevents mouse getting stuck steering.
//   if (mouseX < 5) {pMouseX=
// pMouseX=mouseX=width*0.5;
//   pMouseY=mouseY=height*0.5;}
//   // if (mouseX > width-5) {pMouseX=mouseX=5;}
  
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
    if (!tVanish){
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
    }
    pop();
    }
    
  } 
  push();
    
	// Oh, to optimize a little I could record this
	// value from above terrain generation.
  let y = noise((adjust-
                 posX)/freq,
          (adjust-posZ)/freq)*amp;
  let target=bh*y*0.5;
	
	// Go up or down?
  let guod=target-subY;
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
  
  pop();
}