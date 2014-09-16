var STROKE_COLOR = "#aaa";
var STROKE_WIDTH = "2";
var FILL = "none";
var MAX_TRIANGLE_SIDE = 150;
var TRIANGLE_SIDE_BUFFER = 100;
var MIN_TRIANGLE_AREA = 200;
var svg_width = $('#bg-svg').width()
    , svg_height = $('#bg-svg').height();

// Helpers
function Point(x, y) {
  this.x = x;
  this.y = y;
}

var computeDistance = function(p1, p2) {
  // returns distance b/w two points
  return Math.sqrt(Math.pow((p1.x-p2.x), 2) + Math.pow((p1.y-p2.y), 2));
}

var computeArea = function(base, height) {
  return 0.5*base*height;
}

// Triangle construction functions
var makeStartPoint = function() {
  // Creates a random starting point based on SVG size
  var startx = Math.floor(Math.random()*svg_width-100)
    , starty = Math.floor(Math.random()*svg_width-100);
  return new Point(startx, starty);
}

var makeAdditionalPoint = function(prev_point) {
  // Creates an additional point buffer away from the prev point
  var thisx = Math.floor(Math.random()*MAX_TRIANGLE_SIDE) + TRIANGLE_SIDE_BUFFER + prev_point.x
    , thisy = Math.floor(Math.random()*MAX_TRIANGLE_SIDE) + TRIANGLE_SIDE_BUFFER + prev_point.y;
  return new Point(thisx, thisy);
}

var makeRandomTriangle = function(svg) {
  // Creates a random triangle and plots to svg
  var points_string = "";
  var points = [];
  var p1 = makeStartPoint();
  var p2 = makeAdditionalPoint(p1);
  var base = computeDistance(p1, p2);
  var p3 = makeAdditionalPoint(p2);
  while(computeArea(base, Math.abs(p2.y - p3.y)) < MIN_TRIANGLE_AREA) {
    p3 = makeAdditionalPoint(p2);
  }
  points.push(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  var points_string = points.join(",");
  console.log(points_string);
  var triangle=svg.append("polygon")
    .attr("points", points_string)
    .attr("stroke", STROKE_COLOR)
    .attr("stroke-width", STROKE_WIDTH)
    .attr("fill", FILL)
}


$('#bg-svg').height($('.bg-gray').height());

// code for triangles
var svg = d3.select("#bg-svg");
for(var i=0; i<1; ++i) {
  makeRandomTriangle(svg);
}