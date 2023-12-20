function renderCraft(){
push();
    // 320 arbitrary. Only x changes.
	let driveY = generalPerlin(0,320)*hoverFactor;
	let y = driveY;
	y=lerp(prevGoblinH,y,0.14);
	prevGoblinH=y;
  //let target=y*(amp+camp)*2+height*0.5;
	let target=y;
	
	// default scale is 42.
	// 64 is OK.
	let buggyScale=42;
	// speed default = 0.2
  subY=lerp(subY,target,0.4);
   
	// default 512.
	let bobAdjustUp=128;
	let lunarBob=Math.sin(frameCount*0.1)*
			buggyScale*0.7+bobAdjustUp;
	let finalY=-y-buggyScale*1.5-lunarBob;
	
	// To prevent penetrating surface.
//	if (-finalY < -driveY){
//		finalY = driveY;
//	}
	
  translate(0,
						finalY,
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
  	let guod=(target-subY)*-0.12;
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
    //normalMaterial();
    specularMaterial(0,175,175);
    //emissiveMaterial(0,255,32);
    shininess(25);
    
    //sphere(64);
    model(goblin);
		//model(car);
  pop();	
}