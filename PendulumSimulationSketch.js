var len =180;

var a=0;
var aVel=0;
var aAcc=0;


function setup() {
  createCanvas(600, 400);  
  

}

function draw() {
  background(220);
  
  let origin = createVector(width/2, 0);
  let mass = createVector(width/2, len);
  
  function pendulum() {
    mass.x = origin.x + len*sin(a);
    mass.y = origin.y + len*cos(a);
    
    line(origin.x, origin.y, mass.x, mass.y);
    ellipse(mass.x, mass.y, 50, 50);
  
    aAcc = -0.01*sin(a);
  
    a+=aVel;
    aVel+=aAcc;
  
    //Se eu quiser que o pendulo acelere, é só tirar a linha de cod. abaixo. 
    aVel*=0.99;
    a+=0.1;
    
    //Gostaria de fazer o mouse controlar a altura do pendulo.
    function mousePressed() {
    if(mouseIsPressed) {
      pendulum.origin(mouseX, mouseY);
    }
  }
  mousePressed();
  pendulum();
}
