let ground;
let grounded=false;

function genTerrain(){
	//if (!grounded) setupGroundPlane();
	
	//push();
	
	// Legacy backgrounds.
	//background(0,132,232);
//  background(	0,
//						 	Math.sin(frameCount*0.01)*122+122,
//							Math.sin(frameCount*0.01)*122+122);
	
	// Commented out for VR test.
	background(0);
	
	// sky sphere.
	push();
	translate(0,0,-7777);
	rotateY(steerY);
	texture(matrixTex);
	sphere(10000,22);
	fill(0,240);
	sphere(9900,22);
	pop();
	//setVRBackgroundColor(0, 0, 0);
	
	lighting();
	tim_burton();
	
	triTerrain();
	
	if (!tVanish){
  	voxelTerrain();
	}

	push();
	
	// To allow jojo's monster truck to move along
	// and on landscape.
	let mty = generalPerlin(-(posX/bs-carPos.x)*bs+jojo,
								-(posZ/bs+carPos.z)*bs)*0.8;
	// Eureka!
	// 0.7 is the height adjustment.
	translate(-(posX/bs-carPos.x)*bs+jojo,
						-height*0.7-carPos.y-mty,-(posZ/bs+carPos.z)*bs);
	
	// Adjust down...1/12/23
	//translate(0,700,0);
	
	rotateZ(180);
	// Forward movement...
	jojo += 10;
	//translate(0,-height*1.5,0);
	//scale(400); // car scale 400.
	scale(3); // Monster truck scale 3.
	//emissiveMaterial(200,180,170);
	
	//specularMaterial(255,0,255);
	specularMaterial(0,0,0);
	
	//texture(soilTex);
	
	model(car);
	
	
	pop();
	
	
	// Antbots.
	push();
	//translate(0,-height*2-400,-100);
	
	// for y -> (-height*2-height*2)-mty,
	let antsY = generalPerlin(
							-(posX/bs-carPos.x)*bs,
							-(posZ/bs+carPos.z)*bs);
	
	translate(-(posX/bs-carPos.x)*bs,
						-antsY*1.5,
						-(posZ/bs+carPos.z)*bs);
	//rotateY(-steerY-180);
	
	// Attempt to target and then chase
	// subject's ship.
	// Let's try instead of posZ, 0.
	//subV=createVector(posX,subY+1000,0);
	
	for (let a = 0; a < antMan.ants.length;a++){
		//let hopF=p5.Vector.random3D().mult(10);
		//hunt=p5.Vector.sub(subV,antMan.ants[a].pos);
		//hunt.normalize();
		//hunt.mult(-10);
		//let hopF=hunt;
		//antMan.ants[a].acc.add(hopF);
		//print(antMan.ants[a].acc)
		//antMan.ants[a].EulerUpdate();
		antMan.ants[a].render();
	}
	pop();
	
	renderCraft();
  
  //pop();
}

function setupGroundPlane(){
	//ground=plane(1024,1024,512,512);
}



function triTerrain(){

push();
	
	rotateX(90);
	
	//fill(255);
	//stroke(0);
	//strokeWeight(1);
	
	//ambientMaterial(176);
	
	specularMaterial(196);
  shininess(3);
	
	//textureMode(NORMAL);
	//texture(moonTex);
	
	for (let z = -trows*0.5; z < trows*0.5; z+=1){
		beginShape(TRIANGLE_STRIP);
		
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
	specularMaterial(0,255,255);
  shininess(1.4);
	stroke(0);
	strokeWeight(3);
	//fill(0,255,0,64);
  for (let z = -rows*0.5; z < rows*0.5; z++){
    for (let x = -cols*0.5; x < cols*0.5; x++){
    push();
      
    // Perlin noise to derive y-posZ
    // of each block.
		// Floor out values.
		let wx = Math.floor(x*bs);
		let wz = Math.floor(z*bs);
		// *1.02 to lift just above terrain.
		// NB should relate to camera height multiplier.
    let y = generalPerlin(wx,wz)*1.02;
			
    // If 'minecraft' mode of appearance,
    // round down y posZ to a whole number,
    // and draw black block outlines.
    if (mc) {
      y = Math.floor(y);
      //stroke(0);
    } else {
      //noStroke();
    }
      
    // Translate to block posZ.
		// Magic 22 :)
    translate(wx,
              -y-22,
              wz);
    
		//texture(moonTex);
			
//    specularMaterial(0,255,0);
//		shininess(60);
			
		
		//fill(0,222,0);
		//stroke(0,0,0);
		//strokeWeight(1);
    
		//rotateX(90);
    //plane(bs,bs);
			
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
	noStroke();
}