/*
Lighting
*/

function lighting(){
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
	// Default y was 700.
	pointLight(220, 220, 200,
             0, height,-1400);
	
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
	
}