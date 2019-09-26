var avatarX;
var avatarY;



function setup() {
  // Put things you want to run once in here. 
  createCanvas(windowWidth,windowHeight);


  avatarX = width / 2;
  avatarY = height / 2;  

}


function draw() {
   // directionsForPlayer
   print(mouseX, mouseY);
   background("red");

   //Level 1
   fill(255);
   stroke(0);
   strokeWeight(5);
  textSize(80);
  textFont('impact');
  text('PORTAL: Level 1',10,100);
  //gameInstructions
  textSize(10);
  textFont('courier');
  strokeWeight(2);
  text('Press W =  move up', 20,540);
  text('Press A =  move left', 20,560);
  text('Press S =  move down', 20,580);
  text('Press D =  move right', 20,600);
  textSize(20);
  text('GAME DIRECTIONS: Move little blue man into the portal by using the keys.', 10,640);
 
 
  strokeWeight(3);
  fill(0);
  var man;
//man
/*ellipse(150,250,50,50);
line(150,275,150,350);
line(115,320,190,290);
line(150,350,120,400);
line(150,350,180,400);*/
  
//portal
 var portal;
fill(0);
portal == (ellipse(870,60,400,100));
 
   
//keyDirections
if (keyIsPressed) {
  if (key == "w") {
    avatarY--;
  }
  if (key == "s") {
    avatarY++;
  }
  if (key == "a") {
    avatarX--;
  }
  if (key == "d") {
    avatarX++;
  }


  if (avatarX >= 860|| avatarY <= 60){
    background(255,255,0);
    var score = 0; 
    score= score+100;
    textSize(80);
    text("Score: "+ score,500,400);
    text("NEXT LEVEL",500,600);
  }

}
//man
fill("blue");
circle(avatarX, avatarY, 100);


}