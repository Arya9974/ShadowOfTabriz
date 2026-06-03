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

const gate = document.getElementById("readingGate");
const seasons = document.querySelectorAll(".season");

seasons.forEach((season) => {
  season.addEventListener("click", (e) => {
    e.preventDefault();

    gate.classList.add("active");

    ambient.volume = 0.08;

    renderProgress();
    renderArchive();
    renderCharacters();
  });
});

const totalParts = 20;

const savedPart = Number(localStorage.getItem("season1Progress")) || 0;
const progress = (savedPart / totalParts) * 100;

document.querySelector(".progress-fill").style.width = progress + "%";
document.querySelector(".progress-text").textContent =
  `${Math.floor(progress)}% Completed`;
document.querySelector(".last-read").textContent =
  `Last Read: Part ${savedPart || 1}`;

document.querySelector(".progress-fill").style.width = progress + "%";

document.querySelector(".progress-text").textContent =
  `${Math.floor(progress)}% Completed`;

document.getElementById("backToSeasons").addEventListener("click", () => {
  gate.classList.remove("active");

  menu.classList.add("active");
});

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {
  window.location.href = "assets/season-1-htmls/part1.html";
});
const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {
  localStorage.removeItem("season1Progress"); // پاک کامل

  window.location.href = "assets/season-1-htmls/part1.html?part=1";
});

const ambient = document.getElementById("ambient");
const ambientBtn = document.getElementById("ambientBtn");

let ambientPlaying = false;

ambient.volume = 0.25;

ambientBtn.addEventListener("click", () => {
  if (!ambientPlaying) {
    ambient.play();

    ambientBtn.innerHTML = "🔊 Ambient";

    ambientPlaying = true;
  } else {
    ambient.pause();

    ambientBtn.innerHTML = "🔇 Ambient";

    ambientPlaying = false;
  }
});

if (localStorage.getItem("ambientEnabled") === "true") {
  ambient.volume = 0.25;

  ambient.play().catch(() => {});
}
const backToSeasons = document.getElementById("backToSeasons");

// Open modal

// کم کردن صدای ambient
ambient.volume = 0.08;

renderProgress();
renderArchive();
renderCharacters();
// Close modal
backToSeasons.addEventListener("click", () => {
  gate.classList.remove("active");
  menu.classList.add("active");

  // برگردوندن صدای ambient
  ambient.volume = 0.25;
});

continueBtn.addEventListener("click", () => {
  const lastPart = getSavedPart();

  const startPart = lastPart > 0 ? lastPart : 1;

  window.location.href = `assets/season-1-htmls/part1.html?part=${startPart}`;
});
// Restart
restartBtn.addEventListener("click", () => {
  localStorage.setItem("season1Progress", 0);

  window.location.href = `assets/season-1-htmls/part1.html?part=1`;
});

// نوار پیشرفت
function renderProgress() {
  const totalParts = 20;
  const saved = getSavedPart();

  const progress = (saved / totalParts) * 100;

  document.querySelector(".progress-fill").style.width = `${progress}%`;

  document.querySelector(".progress-text").textContent =
    `${Math.floor(progress)}% Completed`;

  document.querySelector(".last-read").textContent =
    `Last Read: Part ${saved || 1}`;
}
// آرشیو
function renderArchive() {
  const archiveContainer = document.querySelector(".archive-items");
  archiveContainer.innerHTML = "";
  // اینجا می‌تونیم آیتم‌های آرشیو اضافه کنیم
}

// کاراکترها
function renderCharacters() {
  const charContainer = document.querySelector(".character-items");
  charContainer.innerHTML = "";
  // اینجا کاراکترها رو اضافه می‌کنیم، حتی می‌تونیم قفل کنیم برای کاراکترهای بعدی
}
function checkMobileModal() {
  if (window.innerWidth <= 768) {
    document.body.style.overflowX = "hidden";
  }
}

window.addEventListener("resize", checkMobileModal);
checkMobileModal();
document.getElementById("archiveBtn").addEventListener("click", () => {
  window.location.href = "../archive/archive.html";
});
