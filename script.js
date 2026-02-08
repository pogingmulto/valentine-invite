// FLOATING HEARTS BACKGROUND
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);

// MINI GAME LOGIC
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("scoreText");
const gameSection = document.getElementById("gameSection");
const questionSection = document.getElementById("questionSection");

let score = 0;

function spawnGameHeart() {
  const heart = document.createElement("div");
  heart.classList.add("gameHeart");
  heart.innerHTML = "💘";

  heart.style.top = Math.random() * 160 + "px";
  heart.style.left = Math.random() * 85 + "%";

  heart.onclick = () => {
    score++;
    scoreText.innerText = `Hearts Collected: ${score} / 5`;
    heart.remove();

    if (score >= 5) {
      gameSection.classList.add("hidden");
      questionSection.classList.remove("hidden");
    }
  };

  gameArea.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

setInterval(spawnGameHeart, 1000);

// BUTTON LOGIC
let yesScale = 1;
let noScale = 1;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const resultSection = document.getElementById("resultSection");

noBtn.addEventListener("click", () => {
  noScale = Math.max(noScale - 0.15, 0.3);
  yesScale = Math.min(yesScale + 0.2, 3);

  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
  questionSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
});