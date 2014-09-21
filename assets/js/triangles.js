$.get("http://207.251.86.229/nyc-links-cams/LinkSpeedQuery.txt", function(data) {
  console.log(data);
});

var STROKE_COLOR = "#B8B8B8";
var STROKE_WIDTH = "2";
var FILL = "rgba(255,255,255,0.08)";
var MAX_TRIANGLE_SIDE = 150;
var TRIANGLE_QTY = 20;
var TRIANGLES_MADE = false; 

var updateSVGSize = function() {
  // updates values for SVG size
  svg_width = $('.bg-gray').width();
  svg_height = $('.bg-gray').height();
  for (var i=0; i<triangles.length; ++i) {
    old_points = triangles[i].attr("points");
    old_points_array = old_points.split(",");
    for (var j=0; j<old_points_array.length; ++j) {
      if (j % 2 == 0 && parseInt(old_points_array[j]) > svg_width
        || j % 2 != 0 && parseInt(old_points_array[j]) > svg_height
        || parseInt(old_points_array[j]) < -MAX_TRIANGLE_SIDE) {
        triangles[i].attr('visibility', 'hidden');
      }
    }
  }
}

var getRandomVertexCoordinate = function(base) {
  // returns a random vertex coordinate with relation to base
  point = Math.floor(Math.random()*MAX_TRIANGLE_SIDE)+base-MAX_TRIANGLE_SIDE;
  return point;
}

var positiveOrNegative = function() {
  var r = Math.random();
  if (r > 0.5) return 1;
  return -1;
}

var makeRandomTriangle = function(svg) {
  // generates a random triangle
  // create a base x and y that will assure triangle shows up on svg
  var base_x = Math.floor(Math.random()*svg_width)
    , base_y = Math.floor(Math.random()*svg_height);
  var points_array = [];
  for(var i=0; i<3; ++i) {
    // pass in odd values (x-coords)
    points_array.push(getRandomVertexCoordinate(base_x));
    // pass in even values (y-coords)
    points_array.push(getRandomVertexCoordinate(base_y));
  }
  var points_string = points_array.join(",");
  var triangle=svg.append("polygon")
    .attr("points", points_string)
    .attr("stroke", STROKE_COLOR)
    .attr("stroke-width", STROKE_WIDTH)
    .attr("fill", FILL);
  return triangle;
}

var moveTriangle = function(triangle, dist, speed) {
  // Moves a given triangle dist at speed
  old_points = triangle.attr("points");
  old_points_array = old_points.split(",");
  for (var i=0; i<old_points_array.length; ++i) {
    if (i % 2 == 0 && parseInt(old_points_array[i]) > svg_width
      || i % 2 != 0 && parseInt(old_points_array[i]) > svg_height
      || parseInt(old_points_array[i]) < -MAX_TRIANGLE_SIDE) {
      dist = dist * -1;
    }
    old_points_array[i] = parseInt(old_points_array[i])+dist
  }
  new_points = old_points_array.join(",");
  triangle
    .transition()
    .ease("linear")
    .attr("points", new_points)
    .duration(speed)
    .each("end", function() {
      moveTriangle(triangle, dist, speed);
    });
}

$('#bg-svg').height($('.bg-gray').height());

// code for making triangles
var svg = d3.select("#bg-svg");

svg_width = $('.bg-gray').width();
svg_height = $('.bg-gray').height();

if (!TRIANGLES_MADE) {
  var triangles = [];
  for(var i=0; i<TRIANGLE_QTY; ++i) {
    triangles.push(makeRandomTriangle(svg));
    TRIANGLES_MADE = true;
  }
}

// code for moving triangles
for (var i=0; i<triangles.length; ++i) {
  moveTriangle(triangles[i], 1*positiveOrNegative(), 100);
}

