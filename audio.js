let currentTrack;

function loadSounds(){
  // Called from preload().
  currentTrack=loadSound('moon_chime.mp3');
  currentTrack.setVolume(0.2);
  currentTrack.loop();
}

function startRadio(){
  
  currentTrack.play();
  
}