let myFont;

let steerY=0;
let steerX=0;
let landPos;
let landPrev;
let subY = 400;
let pMouseX;
let pMouseY;
let goblin;
let goblinY=0;
let goblinZ=0;
let goblinX=0;

let tVanish=false; // Terrain vanish?
let bs = 1;      // Block size. Leave as 1.
let blockScaleFactor=10;
// NB adjusted in setup().
// 32 for performance.
let rows=128;  // How many blocks?
let cols=128;
let bh;    // Block height.
//let freq = 8;  // Perlin frequency.
//let amp = 16;    // Perlin amplitude.
//let cfreq = 5;  // Perlin continental frequency.
//let camp = 100;    // Perlin continental amplitude.


let freq = 800;  // Perlin frequency.
let amp = 16;    // Perlin amplitude.
let cfreq = 16000;  // Perlin continental frequency.
let camp = 32;    // Perlin continental amplitude.


// For tris.
// Actually set in main.js setup().
let trows=128;
let tcols=128;
let tbs = 80;
let tbh = amp*6;
       
let camTarget=0; // lerping camera movement in terrain.
let mc = false;   // Minecraft look?
let posZ = 0;     // posZition in Perlin terrain.
let posX = 0;
let mouseSensitivity=0.4;

