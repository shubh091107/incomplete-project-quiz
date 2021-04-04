var canva;
var gameState
var contestantCount
var   database
var   quiz
var question1
var gameState = 0
function setup(){
  database = firebase.database()
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");
  question1 = new Question()
  question1.display()
  
}
