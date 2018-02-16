var max_distance;

function setup() {
  createCanvas(500,800);
  strokeWeight(1);
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(255);

  for(var i = 0; i <= width; i += 20) {
    for(var j = 0; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 25;

      ellipse(i, j, size, size);
    }
  }
}
