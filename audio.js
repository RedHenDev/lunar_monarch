let currentTrack;

function loadSounds(){
  // Called from preload().
  currentTrack=loadSound('assets/moon_chime.mp3');
  currentTrack.setVolume(0.2);
  currentTrack.loop();
}

function startRadio(){
  
	if (!currentTrack.isPlaying){
  	currentTrack.play();
	}
  
}