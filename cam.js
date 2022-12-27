/*
Tim Burton -- camera system.

NB. also 'steers' camera in terms of yaw.
*/

function tim_burton(){
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
	
	// VR.
	camTarget = lerp(camTarget,y-800,0.1);
	//setViewerPosition(0, camTarget, 400);
	translate(0,camTarget,-2000);
	
	// Non VR camTarget assignment. 1.6 is magic.
	//camTarget = lerp(camTarget,y*1.6,0.1);
	//translate(0,camTarget,-2000);
	
	// Legacy translate.
	//translate(0,camTarget,-340);
  
	// Default -25.
	rotateX(-15);
	
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