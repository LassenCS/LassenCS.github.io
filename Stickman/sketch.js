function setup() {
  createCanvas(400, 400);
}


// Tændstik mand
function draw() {
  background(12,192,232,255);

  let CenterX;
  CenterX = 200;

  let head

// Hovede
  circle(CenterX, 90, 50);
// Øjne
  circle(190, 85, 5);
  circle(210, 85, 5);
// Mave
  line(CenterX, 115, 200, 200);
// Højre ben
  line(CenterX, 200, 220, 250);
// Venstre ben
  line(CenterX, 200, 180, 250);
// Venstre arm
  line(CenterX, 150, 250, 135);
// Venstre arm
  line(CenterX, 150, 150, 135);
// Mund
 arc(CenterX, 90, 27, 26,     QUARTER_PI,PI-QUARTER_PI);

  strokeWeight(4)

//Vejen
  rect(-25, 245, 450, 170);
  rect(25, 320, 50, 4);
  rect(125, 320, 50, 4);
  rect(225, 320, 50, 4);
  rect(325, 320, 50, 4);
  rect(425, 320, 50, 4);
  fill (82, 94, 97)
}