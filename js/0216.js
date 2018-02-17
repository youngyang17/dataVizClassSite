var movieTable;
var startX = 50;
var endX =700
var startY =400;
var endY=100;
var startYear = 1900;
var endYear = 2020;
var startScore = 0;
var endScore =10;


function preload(){
  moveTable = loadTable('../data/tmdb_5000_movies.csv','csv','header');
  console.log ('Table has been logged..')
}



function setup (){
  createcanvas(800,800);
  textfont('Roborto');
  print(movieTable.getrowcount());
  print(movieTable.getColumnCount());

  noloop();
}




function draw(){
  for (var i = 0; i < movieTable.getrowcount(); i++) {
    var score = movieTable.getNum(i,'vote_average');
    var releaseData = movieTable.getstring(i, 'release_data');
    var dateArray = releaseDateDate.split ('-');
    var year = dateArray[0];
    var positionX = map(year,startYear, endYear, startX, endX);
    var positionY = map(score, startScore, endScore, startY, endY);
    ellipse(positionX,positionY,3,3);
  }


}
