const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

const grid = 20;

let snake = [{ x: 200, y: 200 }];
let dx = grid;
let dy = 0;

let food = randomFood();
let particles = [];

let score = 0;
let running = false;
let speed = 180;

let lastTime = 0;
let animationId = null;

const scoreEl = document.getElementById("score");
const highEl = document.getElementById("high");

let high = localStorage.getItem("snakeHigh") || 0;
highEl.textContent = high;

const seasons = [
  { name: "Spring", color: "#8bc34a" },
  { name: "Summer", color: "#f7dc6f" },
  { name: "Autumn", color: "#2298e6" },
  { name: "Winter", color: "#d6eaf8" },
];

let currentSeason = 0;

function changeSeason() {
  currentSeason = Math.floor(Math.random() * seasons.length);

  document.getElementById("seasonName").textContent = seasons[currentSeason].name;
}

setInterval(changeSeason, 25000);

function randomFood() {
  return {
   x: Math.floor(Math.random() * 20) * grid,
   y: Math.floor(Math.random() * 20) * grid,
  };
}

function startGame() {
  if (running) return;

  speed = document.getElementById("difficulty").value;

  running = true;
  requestAnimationFrame(gameLoop);
}

function pauseGame() {
  running = !running;

  if (running) {
   requestAnimationFrame(gameLoop);
  }
}

function gameLoop(time) {
  if (!running) return;

  if (time - lastTime > speed) {
   updateGame();
   lastTime = time;
  }

  animationId = requestAnimationFrame(gameLoop);
}

function updateGame() {
  const head = {
   x: snake[0].x + dx,
   y: snake[0].y + dy,
  };

  if (head.x < 0 || head.y < 0 || head.x >= 400 || head.y >= 400) {
   gameOver();
   return;
  }

  for (let s of snake) {
    if (s.x === head.x && s.y === head.y) {
      gameOver();
      return;
    }
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreEl.textContent = score;

    createParticles(food.x, food.y);

    food = randomFood();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  ctx.fillStyle = seasons[currentSeason].color;
  ctx.fillRect(0, 0, 400, 400);

  snake.forEach((s, i) => {
    ctx.beginPath();
    ctx.fillStyle = i === 0 ? "#1b5e20" : "#4caf50";
    ctx.arc(s.x + 10, s.y + 10, 9, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(food.x + 10, food.y + 10, 8, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.fillRect(food.x + 9, food.y - 2, 3, 6);

  particles.forEach((p, i) => {
    ctx.fillStyle = "orange";
    ctx.fillRect(p.x, p.y, 4, 4);

    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    if (p.life <= 0) particles.splice(i, 1);
  });
}

function createParticles(x, y) {
  for (let i = 0; i < 15; i++) {
    particles.push({
      x: x + 30,
      y: y + 30,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 10,
    });
  }
}

function gameOver() {
  cancelAnimationFrame(animationId);
  running = false;

  let newHigh = false;

  if (score > high) {
    localStorage.setItem("snakeHigh", score);
    highEl.textContent = score;
    newHigh = true;
  }

  const box = document.getElementById("gameOverBox");

  box.style.display = "block";

  document.getElementById("scoreMsg").innerHTML = newHigh
    ? `<span class="celebrate">🎉 New High Score: ${score}!</span>`
    : `Score: ${score}`;
}

function reset() {
  snake = [{ x: 200, y: 200 }];
  dx = grid;
  dy = 0;
  score = 0;
  scoreEl.textContent = 0;
  food = randomFood();

  document.getElementById("gameOverBox").style.display = "none";

  draw();
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (key === "enter") startGame();

  if (key === " ") pauseGame();

  if ((key === "arrowup" || key === "w") && dy === 0) {
    dx = 0;
    dy = -grid;
  } else if ((key === "arrowdown" || key === "s") && dy === 0) {
    dx = 0;
    dy = grid;
  } else if ((key === "arrowleft" || key === "a") && dx === 0) {
    dx = -grid;
    dy = 0;
  } else if ((key === "arrowright" || key === "d") && dx === 0) {
    dx = grid;
    dy = 0;
  }
});

draw();

