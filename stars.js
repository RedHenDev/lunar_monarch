let stars=[];
const starNum=128;

function setupStars(){
  for (let i = 0; i < starNum; i++){
    let sl = p5.Vector.random2D();
    sl.mult(Math.random()*800);
    stars.push(sl);
  }
}

function drawStars(){
	push();
	translate(0,0,0);
	rotateY(steerY);
  for (let i = 0; i < stars.length; i++){
    push();
    
    translate(stars[i].x,stars[i].y,-3000);
    //rotateY(-steerY*0.01);
    strokeWeight(Math.random()*9.3);
    //stroke(Math.random()*55+200);
    stroke(255);
    point(0,0);
    pop();
  }
	pop();
}