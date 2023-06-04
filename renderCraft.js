function renderCraft(){
push();
    
	let y = generalPerlin(0,320)*hoverFactor;
	y=lerp(prevGoblinH,y,0.1);
	prevGoblinH=y;
  //let target=y*(amp+camp)*2+height*0.5;
	let target=y;
	
	// default scale is 42.
	let buggyScale=42;
  subY=lerp(subY,target,0.2);
   
	let lunarBob=Math.sin(frameCount*0.1)*
			buggyScale*0.7;
  translate(0,
						-y-buggyScale*1.5-lunarBob,
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
		// Go up or down?
  	let guod=(target-subY)*-0.25;
    //rotateZ(-guod*0.1);
		// Default lerp rate is 0.04.
		goblinZ=lerp(goblinZ,guod,0.2);
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