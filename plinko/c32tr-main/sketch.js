const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];



var divisionHeight = 300;

function setup() {
  createCanvas(550,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,790,800,20);

  division = new Division(5, height-divisionHeight/2, 10, divisionHeight);
  division2 = new Division(95, height-divisionHeight/2, 10, divisionHeight);
  division3 = new Division(185, height-divisionHeight/2, 10, divisionHeight);
  division4 = new Division(275, height-divisionHeight/2, 10, divisionHeight);
  division5 = new Division(365, height-divisionHeight/2, 10, divisionHeight);
  division6 = new Division(455, height-divisionHeight/2, 10, divisionHeight);
  division7 = new Division(545, height-divisionHeight/2, 10, divisionHeight);


}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  for(j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }
  

}
