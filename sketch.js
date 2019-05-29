let font
let pts
function preload() {

  font = loadFont('Kosugi-Regular.ttf')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pts = font.textToPoints('コラボレーション', 0, 0, 128)
  bounds = font.textBounds('コラボレーション', 0, 0, 128);
  // pts = font.textToPoints('コラボレーション', width / 2, height / 2, 128)

}

function draw() {
  background(0);
  fill(255)
  // textAlign(CENTER, CENTER)
  // rectMode(CENTER, CENTER)
  // translate(width / 2, height / 2)
  // textSize(128)
  // textFont(font)
  // text('コラボレーション', width / 2, height / 2)
  translate((width - bounds.w) / 2, (height + bounds.h) / 2)
  stroke(255)
  noFill()
  strokeWeight(1)
  // console.log(pts)
  // rectMode(LEFT)
  pts = pts.map(pt => {
    return { x: pt.x, y: pt.y }
  })

  console.log(pts)
  noLoop()
}