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

let tVanish=false; // Terrain vanish?
let bs = 1;      // Block size. Leave as 1.
let blockScaleFactor=9;
// NB adjusted in setup().
// 32 for performance.
let rows=56;  // How many blocks?
let cols=56;
let bh;    // Block height.
let freq = 800;  // Perlin frequency.
let amp = 16;    // Perlin amplitude.
       
let mc = false;   // Minecraft look?
let posZ = 0;     // posZition in Perlin terrain.
let posX = 0;
let mouseSensitivity=0.4;

