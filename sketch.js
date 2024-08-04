let pointx; 
let pointy; 
let cor;

  
function setup () {
  createCanvas(600, 400);
  background( "purple");
  cor=color( random(0, 255), random(0, 255), random(0, 255) )
  pointx=300
  pointy=200
}

function draw() {
  fill(cor)
  circle(pointx, pointy, 50);
  if( mouseX >pointx) {
   pointx=pointx + 1 ;
  }
  
  if( mouseX <pointx) {
    pointx = pointx - 1 ;
    
  }
    if( mouseY >pointy) {
    pointy=pointy + 1 ;
  }
  
  if( mouseY <pointy) {
    pointy = pointy - 1; 
  }
}