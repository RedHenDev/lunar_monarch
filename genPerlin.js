
function generalPerlin(_x,_z){
	// Oh, to optimize a little I could record this
	// value from above terrain generation.
	/*
	let y = noise((posX+_x)/cfreq,
                  (posZ+_z)/cfreq)*camp;
	
	// Adjustment to offset the octaves.
  y += noise((posX+_x+876)/freq,
          (posZ+_z)/freq)*amp;
	*/
	
	let y=0;
	let offset=999; // To offset the octaves.
	
	for (let i=0; i < freqs.length; i++){
		y += noise((posX+_x)/freqs[i],
										(posZ+_z)/freqs[i])*amps[i];
	}
	
	return y;
}