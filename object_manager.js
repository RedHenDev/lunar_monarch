/*
Manager for objects to be distributed across terrain.

*/

const noi=32;

let antMan = new AntBot();

function setup_objects(){
	for (let i=0;i<noi;i++){
		antMan.newAnt();
	}
}
