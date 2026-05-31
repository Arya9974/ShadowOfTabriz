const enterBtn = document.getElementById("enterBtn");
const menu = document.getElementById("storyMenu");

enterBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menu.classList.remove("active");
  }
});

const particles = document.querySelector(".particles");

for (let i = 0; i < 40; i++) {
  const p = document.createElement("span");

  p.style.left = Math.random() * 100 + "%";

  const size = Math.random() * 3 + 1;

  p.style.width = size + "px";
  p.style.height = size + "px";

  p.style.animationDuration = 8 + Math.random() * 15 + "s";

  p.style.animationDelay = Math.random() * 0.4 + "s";

  particles.appendChild(p);
}
const season1 = document.querySelector(".season");

const gate = document.getElementById("readingGate");

season1.addEventListener("click", (e) => {
  e.preventDefault();

  gate.classList.add("active");
});

const totalParts = 20;

const savedPart = Number(localStorage.getItem("season1Progress")) || 0;

const readPart = savedPart + 1;

const progress = (readPart / totalParts) * 100;

document.querySelector(".progress-fill").style.width = progress + "%";

document.querySelector(".last-read").textContent =
  `Last Read: Part ${readPart}`;

document.querySelector(".progress-text").textContent =
  `${Math.floor(progress)}% Completed`;

document.querySelector(".progress-fill").style.width = progress + "%";

document.querySelector(".progress-text").textContent =
  `${Math.floor(progress)}% Completed`;

const lastRead = document.querySelector(".last-read");


lastRead.textContent = `Last Read: Part ${savedPart + 1}`;

document.getElementById("backToSeasons").addEventListener("click", () => {
  gate.classList.remove("active");

  menu.classList.add("active");
});

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {
  window.location.href = "assets/season 1 htmls/part1.html";
});
const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {
  localStorage.setItem("season1Progress", 0);

  window.location.href = "assets/season 1 htmls/part1.html";
});
