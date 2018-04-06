// **** Global Variables ***** //
var apiKey = 'c906d2d88fa5580fe0b0f74c6f42fdf2';
var baseURL = 'https://api.openweathermap.org/data/2.5/weather?q='
var weatherData;
var button;
var cityInput;
var description = '';
var temperature = 0;
var humidity = 0;
var pressure = 0;
var c;

// **** Setup Function ****** //
function setup(){
  createCanvas(500, 500);
  button = select('#submit');
  cityInput = select('#city');
  button.mousePressed(queryAPI);
  noLoop();
}

// **** Query API Function *** //
function queryAPI(){
  var request = baseURL + cityInput.value() + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  description = weatherData.weather[0].description;
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  pressure = weatherData.main.pressure;
  print(weatherData);
  redraw();
}

// **** Draw Function **** //
function draw(){
  background (555);
if (weatherData){
    text('The current weather for ' + cityInput.value() + ' is:', 80, 50);
    text(description, 80, 70);
    text(temperature-273 + ' c', 80, 90);

    if (temperature-273 >= 27) {
      c = color('red');
    }
    else if (temperature-273 > 15) {
       c = color('yellow');
    }
    else if (temperature-273 > 10) {
       c = color('green');
    }
    else if (temperature-273 < 9) {
        c = color('blue');}

    fill(c); // Use color variable 'c' as fill color
    noStroke(); // Don't draw a stroke around shapes
    rect(80,100, 55, 55);
      }
    }
