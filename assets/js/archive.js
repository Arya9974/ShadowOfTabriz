const archiveGrid = document.getElementById("archiveGrid");

const TOTAL_PARTS = 20;

const parts = [];

for (let i = 1; i <= TOTAL_PARTS; i++) {
  parts.push({
    title: `Part ${i}`,
    summary:
      i <= 2
        ? [
            "آشنایی سینا و رهی و شروع رابطه.",
            "مهمانی آشتی و فروپاشی رابطه ساغر و سایمان.",
          ][i - 1]
        : "Coming Soon...",
  });
}

const progress = Number(localStorage.getItem("season1Progress")) || 0;

/*
progress:

0 = هنوز چیزی نخونده
1 = پارت 1 تموم شده
2 = پارت 2 تموم شده
*/

const completedParts = progress;

const nextPart = Math.min(progress + 1, TOTAL_PARTS);

const percent = Math.round((completedParts / TOTAL_PARTS) * 100);

document.getElementById("completedParts").textContent = completedParts;

document.getElementById("lastRead").textContent =
  completedParts > 0 ? `Part ${completedParts}` : "None";

document.getElementById("lastPartTitle").textContent =
  progress >= TOTAL_PARTS ? "Season Completed" : `Part ${nextPart}`;

document.getElementById("progressPercent").textContent = `${percent}%`;

document.getElementById("progressFill").style.width = `${percent}%`;

parts.forEach((part, index) => {
  const partNumber = index + 1;

  let status = "locked";
  let statusText = "Locked";
  if (status !== "locked") {
    button.addEventListener("click", () => {
      const partNumber = index + 1;

      localStorage.setItem("selectedPart", partNumber);

      window.location.href = `part1.html?part=${partNumber}`;
    });
  }
  if (partNumber <= progress) {
    status = "completed";
    statusText = "Completed";
  } else if (partNumber === progress + 1) {
    status = "current";
    statusText = "Current";
  }

  const card = document.createElement("div");

  card.className = "archive-card";

  card.innerHTML = `
    <span class="card-status ${status}">
      ${statusText}
    </span>

    <h3>${part.title}</h3>

    <p>${part.summary}</p>

    <button
      class="enter-btn"
      ${status === "locked" ? "disabled" : ""}
    >
      ${status === "locked" ? "Locked" : "Open"}
    </button>
  `;

  const button = card.querySelector(".enter-btn");

  if (status !== "locked") {
    button.addEventListener("click", () => {
      localStorage.setItem("selectedPart", partNumber);

      window.location.href = `part1.html?part=${partNumber}`;
    });
  }

  archiveGrid.appendChild(card);
});

document.getElementById("continueBtn").addEventListener("click", () => {
  const nextPart = progress + 1;

  localStorage.setItem("selectedPart", nextPart);

  window.location.href = `part1.html?part=${nextPart}`;
});
