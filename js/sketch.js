// Setup function
function setup(){
  createCanvas(800,800);
  console.log('Setup complete...')
}

// Draw function
function draw() {
  background (255);
  strokeWeight(0);
  colorMode(HSB, 800);

  for (var x = 0; x <= width; x+= 25) {
    for (var y = 0; y <= height; y+= 25) {
      fill (x,y,800);
      rect(x,y,25,25);
    }
  }
}
