let myFont;

let steerY=0;
let steerX=0;
let landPos;
let landPrev;
let subY = 0;
let pMouseX;
let pMouseY;
let goblin;
let hoverFactor=1.2;
let prevGoblinH=0;	// For lerping height of ship.
let goblinY=0;
let goblinZ=0;
let goblinX=0;
let car;
let carPos;

let tVanish=false; // Voxel terrain vanish?
let bs = 1;      // Block size. Leave as 1.
let blockScaleFactor=10;
// NB legacy was adjusted in setup().
// 32 for performance.
let rows;  // How many blocks?
let cols;
let bh;    // Block height.

let freq = 222;  // Perlin frequency.1600
let amp = 88;    // Perlin amplitude.8
let cfreq = 2222;  // Perlin continental frequency.3600
let camp = 800;    // Perlin continental amplitude.32

/*
// Default. Smooth, some lunar lumps.
let freqs=[6000,3000,2200,1000,512,222];
let amps=[3270,630,310,200,64,9];
*/

let freqs=[6000,3000,2200,1000,512,222];
let amps=[4270,630,310,200,64,99];

// For tris.
// Actually set in main.js setup().
let trows;
let tcols;
let tbs;
let tbh;

//****
trows=63; // Default 80. Performant 64.
tcols=63;
tbs=400; // Default 42. 64 is OK. 420 best?
tbh=(amp+camp)/2; // Legacy amp*6;

rows=16; // 16 Performant.
cols=16;
// Uses floor, so must be set in main.js setup().
//bs = floor(((height+trows-rows)/
//						(trows))*blockScaleFactor);
bh = tbh*2;
//****
       
let camTarget=0; 	// lerping camera movement in terrain.
let mc = false;   // Minecraft look?
let posZ = 0;     // posZition in Perlin terrain.
let posX = 0;
let mouseSensitivity=0.4;

