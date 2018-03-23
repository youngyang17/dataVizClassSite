// ***** Global variables ***** //
var deg;
var mul;
var score = [10.37,11.11,13.237,14.626,14.88,14.94,15.301,15.35,15.394,18.486,21.26,23.44,23.81,
24.05,24.4518,25.06,26.32,27.8,29.81,31.23,31.724,32.003,33.92,44.,47.08,49.12];
var movie = [
'SoHo-TriBeCa-Civic',
'Center-Little Italy',
'Central Harlem South',
'Hamilton Heights',
'West Village',
'Central Harlem North-Polo Grounds',
'Midtown-Midtown South',
'Upper East Side-Carnegie Hill',
'East Harlem North',
'East Village',
'Manhattanville',
'Hudson Yards-Chelsea-Flatiron-Union Square',
'Gramercy',
'Upper West Side',
'Washington Heights South',
'Marble Hill-Inwood',
'East Harlem South',
'Clinton',
'Murray Hill-Kips Bay',
'Washington Heights North',
'Lower East Side',
'Morningside Heights',
'Yorkville',
'Turtle Bay-East Midtown',
'Lenox Hill-Roosevelt Island',
'Lincoln Square',
'Battery Park City-Lower Manhattan'
];

// ***** Setup function ***** //
function setup(){
  
  createCanvas(1000, 900);
  textAlign(LEFT, TOP);
  textSize(14);
  textFont('Roboto');
  console.log('Setup complete...');
  
  mul = 8;
}

// ***** Draw function ***** //
function draw(){
  meg = map(mouseX,0,1000, 0, 80);
  deg = PI* meg/180;
  background(213, 245, 227);
  fill(80);
  noStroke();
  // ellipse(200,200,10);
  // Drawing the bar chart
  for (var i = 0; i < score.length; i++) {
  // quad(
  // 200 + 20 * i, 480,
  // 212 + 20 * i, 480, 
  // 224 + 20 * i, 480 - score[i] *5,
  // 212 + 20 * i, 480 - score[i] *5
  // )
  
  beginShape();
  vertex(160 + 25*i, 480);
  vertex(160 + 25*i + score[i]*cos(deg)*mul, 480 - score[i]*sin(deg)*mul);
  vertex(170 + 25*i + score[i]*cos(deg)*mul, 480 - score[i]*sin(deg)*mul);
  vertex(175 + 25*i + (score[i]-1.5)*cos(deg)*mul, 480 - (score[i]-1.5)*sin(deg)*mul);
  vertex(175 + 25*i, 480);
  endShape(CLOSE);
  }
  
// Drawing the labels
  fill(20);
  for (var i = 0; i < movie.length; i ++) {
    push();
    translate(160 + 25*i,500);
    rotate(PI/2);
    textAlign(LEFT,BASELINE);
    text(movie[i],0,0);
    pop();
    }
}