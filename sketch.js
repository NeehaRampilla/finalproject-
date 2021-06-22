var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup,rottenGroup,bomb;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var rotten1, rotten2, rotten3, rotten4, bomb_img;


function preload(){
  back_img = loadImage("images/field.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  rotten1= loadImage("images/rapple.png");
  rotten2= loadImage("images/rorange.png");
  rotten3= loadImage("images/rbanana.png");
  rotten4= loadImage("images/rmelon.png");
  bomb_img = loadImage("images/bomb.png");
  fruitGroup = new Group();
  rottenGroup = new Group();

}
function setup() {
  createCanvas(1000,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}