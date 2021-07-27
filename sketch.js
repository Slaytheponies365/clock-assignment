var h
var m
var s
var hangle
var mangle
var sangle

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  translate(250,250)
  rotate(-90)
  h = hour()
  m = minute()
  s = second()
  hangle = map(h%12,0,12,0,360)
  mangle = map(m,0,60,0,360)
  sangle = map(s,0,60,0,360)
  push()
  stroke("brown")
  rotate(mangle)
  strokeWeight(5)
  line(0,0,180,0)
  pop()

  push()
  stroke("blue")
  strokeWeight(5)
  rotate(sangle)
  line(0,0,120,0)
  pop()

  push()
  stroke("green")
  rotate(hangle)
  strokeWeight(5)
  line(0,0,90,0)
  pop()

  noFill()
  stroke("brown")
  strokeWeight(5)
  arc(0,0,400,400,0,mangle)

  stroke("blue")
  strokeWeight(5)
  arc(0,0,280,280,0,sangle)

  stroke("green")
  strokeWeight(5)
  arc(0,0,220,220,0,hangle)
  drawSprites();
}