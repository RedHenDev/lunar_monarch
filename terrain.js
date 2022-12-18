let ground;
let grounded=false;

function genTerrain(){
	//if (!grounded) setupGroundPlane();
	
	//push();
	
	//background(0,132,232);
  //background(0,Math.sin(frameCount*0.01)*122+122,0);
	background(0);
	
	lighting();
	tim_burton();
	
	triTerrain();
	
  voxelTerrain();

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
  shininess(2);
	
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
		// Floor out values.
		let wx = floor(x*bs);
		let wz = floor(z*bs);
    let y = generalPerlin(wx,wz);
			
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
		// Magic 22 :)
    translate(wx,
              -y-22,
              wz);
    
		//texture(moonTex);
			
    //specularMaterial(0,200,0);
		//shininess(0.6);
			
		fill(0,255,0,164);
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