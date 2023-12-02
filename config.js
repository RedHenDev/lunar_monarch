// Main co-ordinates.
let mX = 999;
let mZ = 7777;

let myFont;

// Movement of test object.
let jojo=0;

let steerY=0;
let steerX=0;
let landPos;
let landPrev;
let subY = 0;
let pMouseX;
let pMouseY;
let goblin;
let hoverFactor=1.04;
let prevGoblinH=0;	// For lerping height of ship.
let goblinY=0;
let goblinZ=0;
let goblinX=0;
let car;
let carPos;

// Texture constants.
let moonTex;

let tVanish=true; // Voxel terrain vanish?
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
// Really?
let trows;
let tcols;
let tbs;
let tbh;

//****
// Main terrain (triangle terrain).
trows=68; // Default 72. Performant 64.
tcols=68;
// Size of each triangle.
// 156 OK for tbs.
tbs=255; // Default 222. 64 is OK. 420 best?

tbh=(amp+camp)/2; // Legacy amp*6;

// And these the voxel terrain?.
rows=12; // 16 Performant.
cols=12;
// Uses floor, so must be set in main.js setup().
//bs = floor(((height+trows-rows)/
//						(trows))*blockScaleFactor);
bh = tbh*0.5;
//****
       
let camTarget=0; 	// lerping camera movement in terrain.
let mc = false;   // Minecraft look?
let posZ = 0;     // posZition in Perlin terrain.
let posX = 0;
let mouseSensitivity=0.4;

