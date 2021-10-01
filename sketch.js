var hypnoticBall, database;
var position;


function setup() {
  createCanvas(400, 400);
  database = firebase.database();
  hypnoticBall = createSprite(250, 250, 10, 10);
  hypnoticBall.shapeColor = "red";
  database.ref('ball/position').on("value", readData, showError);

}

function draw() {
  background("white");

  if (keyDown(LEFT_ARROW)) {
    writePosition(-1, 0);
  }
  else if (keyDown(RIGHT_ARROW)) {
    writePosition(1, 0);
  }
  else if (keyDown(UP_ARROW)) {
    writePosition(0, -1);
  }
  else if (keyDown(DOWN_ARROW)) {
    writePosition(0, +1);
  }
  drawSprites();

}

function showError() {
  console.log("error")
}

function readData(data) {
  var pos = data.val()
  console.log(pos)
  hypnoticBall.x = pos.x;
  hypnoticBall.y = pos.y;
}

function writePosition(x,y) {
  database.ref('ball/position').set({
    x: hypnoticBall.x+x,
    y: hypnoticBall.y+y
  })
}


