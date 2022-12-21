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
	//ambientLight(22);
	
	directionalLight(22, 22, 22, 0, 0, 1);
	
	// Basic light. Allows shadows & detail across terrain.
	// Default y was 700.
	// NB z value is relative to cam's Z.
	// Minus Y or close to zero for proximal intensity.
//	pointLight(220, 220, 220,
//             0, 700,
//						 -8500);
	//lightFalloff(1,0,0);
	pointLight(220, 220, 220,
             0, 700,
						 -8500);
	
	// ***********
	// ***********
	// Pink green headlights.
//	pointLight(177, 0, 255,
//             -width*0.5+100, -800,
//             -6000);
//	pointLight(0, 255, 0,
//             width*0.5-100, -800,
//             -6000);
	// ***********
	// ***********
	
//  directionalLight(250, 250, 250,
//									 -width * 0.5, 
//									 -height * 0.5, 
//									 -10000);
	
}