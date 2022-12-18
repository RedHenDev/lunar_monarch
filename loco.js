let acc;
let vel;
let pos;
const thrust=0.2;

let lift=0;

// Precision of trig movement.
//const prec = bs*0.86;
const prec = bs;//Math.sqrt(bs*bs+bs*bs)*bs;
 
function setupLoco(){
  acc=createVector();
  vel=createVector();
  pos=createVector();
}

function engine(){
	// Plane engine version.
	let traj=createVector();
  traj.x=(sin(steerY))*acc.x;
  traj.y=(cos(steerY))*acc.y;
  
  vel.add(traj);
  landPos.add(vel);
	posZ = -landPos.y*bs;//*bs
	posX = landPos.x*bs;//*bs
	
	vel.mult(0.92);
	acc.mult(0);
	return;
	
	// Voxel engine version.
  traj=createVector();
  traj.x=bs*(sin(steerY))*acc.x;
  traj.y=bs*(cos(steerY))*acc.y;
  
  vel.add(traj);
  landPos.add(vel);
  
  // landPos.x-=pos.x;
  // landPos.y+=pos.y;
  
  vel.mult(0.92);
  if (vel.magnitude<=
      bs*4)vel.mult(0);
  acc.mult(0);
  
  if (abs(landPos.x-landPrev.x)>=bs*prec){
     if (landPos.x < landPrev.x)
       dir=-1;
     else
       dir=1;
     
     posX -= bs * dir * prec;
     landPrev.x=landPos.x;
   }
   if (abs(landPos.y-
           landPrev.y)>=bs*prec){
     if (landPos.y < landPrev.y)
       dir=-1;
     else
       dir=1;
     posZ += bs * dir * prec;
     landPrev.y=landPos.y;
   }
}

function mousePressed(){
  
  // On mousePress() or touch,
  // permit sounds.
  getAudioContext();
  
  startRadio();
  
//   if (!getAudioContext()){
//     print(getAudioContext());
//     var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
//   }
  
  // Toggle 'minecraft' look.
  //mc = !mc;
  // tVanish=!tVanish;
  //mouseX=width*0.5;
  //mouseY=height*0.5;
  //genTerrain();
}


function doInput(){
  // OK buddy Eureka!
  let dir = 1;
  
 if (keyIsDown(UP_ARROW)||
     keyIsDown(87)){
   
   //***
   // New attempt...
   acc.x+=thrust;
   acc.y+=thrust;
   //***
 
 }
  if (keyIsDown(DOWN_ARROW) ||
              keyIsDown(83)){
     acc.x-=thrust;
     acc.y-=thrust;
   
  }
   if (keyIsDown(LEFT_ARROW)){
     steerY-=3;
 }if 
   (keyIsDown(RIGHT_ARROW)){
     
     steerY+=3;
   }
}