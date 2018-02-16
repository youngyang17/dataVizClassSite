function setup(){
  createCanvas(800,800);
  console.log('Setup complete...')
}

// Draw function
function draw() {
  background (255);
  strokeWeight(0);


  for (var x = 0; x <= width; x+= 50) {
    for (var y = 0; y <= height; y+= 50) {
      fill (0,0,0);
      ellipse(x,y,25,25);
    }
  }
}
