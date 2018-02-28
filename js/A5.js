
// ***** Global variables ***** //
var score = [10.37,11.11,13.237,14.626,14.88,14.94,15.301,15.35,15.394,18.486,21.26,23.44,23.81,
  24.05,24.4518,25.06,26.32,27.8,29.81,31.23,31.724,32.003,33.92,44.,47.08,49.12];
var movie = ['SoHo-TriBeCa-Civic', 'Center-Little Italy',
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
'Battery Park City-Lower Manhattan'];

// ***** Setup function ***** //
function setup(){
  createCanvas(1000, 1000);
  textAlign(LEFT, TOP);
  textSize(14);
  textFont('Roboto');
  console.log('Setup complete...');
}

// ***** Draw function ***** //
function draw(){
  background(213, 245, 227);
  fill(80);
  noStroke();
  // Drawing the bar chart
  for (var i = 0; i < score.length; i++) {

    line(200 + 20 * [i],500, 212 + 20 * [i], 500, 224 + 20 * [i],
  )
  }
  // Drawing the labels
  fill(20);
  for (var i = 0; i < movie.length; i ++) {
    textAlign(top);
    text(movie[i],20*i,500);
  }
}
