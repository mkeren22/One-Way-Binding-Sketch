// One-way binding demonstrated by a shrinking/expanding ellipse
// Credit to Aatish Bhatia for source code

function sketch(parent) { // we pass the sketch data from the parent
  return function( p ) {

    p.setup = function() {
      let canvas = p.createCanvas(400, 200);
      canvas.parent(parent.$el); // links child to parent
      p.ellipseMode(p.CENTER);
    };

    p.draw = function() {
      p.background(255);
      p.ellipse(200, 100, parent.data.x, parent.data.y); // expands/contracts based on slider
    };
  };
}

console.log('p5 script 1 loaded');
