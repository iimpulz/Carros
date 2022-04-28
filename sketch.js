var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game;
var playerCount, gameState;
var allPlayers, car1, car1Img, car2, car2Img, track, obstacle1Img, obstacle2Img, fuelImg, coinImg, lifeImg, fuels, coins, obstacles, blast, blastImg;
var cars = []

function preload(){
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  obstacle1Img = loadImage("./assets/obstacle1.png");
  obstacle2Img = loadImage("./assets/obstacle2.png");
  fuelImg = loadImage("./assets/fuel.png");
  coinImg = loadImage("./assets/goldCoin.png");
  lifeImg = loadImage("./assets/life.png");
  blastImg = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
  if(gameState===2){
    game.showLeaderboard();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
