var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var gameState="play"
var divisions=[]
var particles = [];
var plinkos = [];
var particle
var divisionHeight=300;
var score =0;
var count=0
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  fill ("White")
  textSize(20)
 text("Score : "+score,20,30);
 text("500",15,520)
 text("500",100,520)
 text("500",185,520)
 text("500",270,520)
 text("100",355,520)
 text("100",435,520)
 text("100",515,520)
 text("200",595,520)
 text("200",675,520)
 text("200",740,520)
  Engine.update(engine);
 

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
        }
 


   if(gameState=="END"){
     background("black")
    textSize(100)
    fill("White")
    text("Game Over",400,400)
         }
    if(count>=5){
      gameState="END"
      textSize(100)
      text("Game Over",400,400)
    }          
   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
     if(particle!=null)
     {
       particle.display();

       if(particle.body.position.y>760)
       {
if(particle.body.position.x<300)

{
  score=score+500
  particle=null
  if(count>=5) gameState="END"

}
else if(particle.body.position.x < 600 && particle.body.position.x > 301)

{
score=score+100
particle=null
if(count>=5) gameState="END"

}
else if(particle.body.position.x < 900 && particle.body.position.x > 601)

{
 score=score+200
 particle=null
 if(count>=5) gameState="END"

}


       }
   
     }
     for (var k = 0; k < divisions.length; k++) {
     
      divisions[k].display();
    }
     function mousePressed()
     {
      if(gameState!=="END")

      {
        count++
        particle=new Particle(mouseX,10,10,10)

      }
   }
 
   }