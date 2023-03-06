console.log("JS online.")

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let interval;
const obstacles = [];

window.onload = () => {
  let startButton = document.getElementById("start-button")
  startButton.addEventListener("click", () => {
    startGame()
  });
  function startGame() {
    player.draw();
    drawObstacles();
  }
}

const player = new Car(225, 600);


function drawObstacles() {
  obstacles.forEach((obstacle) => {
    obstacle.y -= 1;
    obstacle.draw();
  });
  
  const newObstacle = new Obstacle(100, 100, "green", 250, 250);
  obstacles.push(newObstacle);
}


document.addEventListener("keydown", (event) => {
  console.log("I'm clicking a button!", event.key)
  switch (event.key) {
    case "ArrowLeft":
    case "A":
    case "a":
      player.moveLeft();
      break;
    case "ArrowRight":
    case "D":
    case "d":
      player.moveRight();
      break;
  }
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  player.draw();
});