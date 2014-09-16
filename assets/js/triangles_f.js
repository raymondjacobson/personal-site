var STROKE_COLOR = "#aaa";
var STROKE_WIDTH = "2";
var FILL = "none";
var MAX_TRIANGLE_SIDE = 200;
var MIN_VERTEX_DIST = 20;

var getRandomVertexCoordinate = function(base, past_vertices) {
  // returns a random vertex coordinate with relation to base
  // ensures given point is far enough way
  var clear = false;
  var point = 0;
  //while (!clear) {
    point = Math.floor(Math.random()*MAX_TRIANGLE_SIDE)+base;
    // clear = true;
    // for (var i=0; i<past_vertices.length; ++i) {
    //   if (Math.abs(point - past_vertices[i]) < MIN_VERTEX_DIST) {
    //     clear = false;
    //     console.log('fail');
    //   }
    // }
  // }
  return point;
}

var makeRandomTriangle = function(svg) {
  // generates a random triangle
  var svg_width = $('#bg-svg').width()
    , svg_height = $('#bg-svg').height();
  // create a base x and y that will assure triangle shows up on svg
  var base_x = Math.floor(Math.random()*svg_width-100)
    , base_y = Math.floor(Math.random()*svg_height-100);
  var points_array = [];
  for(var i=0; i<3; ++i) {
    // pass in odd values (x-coords)
    points_array.push(getRandomVertexCoordinate(base_x, points_array.filter(function(l) {
      return (l & 1) !== 0;
    })));
    // pass in even values (y-coords)
    points_array.push(getRandomVertexCoordinate(base_y, points_array.filter(function(l) {
      return (l & 1) === 0;
    })));
  }
  var points_string = points_array.join(",");
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
for(var i=0; i<20; ++i) {
  makeRandomTriangle(svg);
}