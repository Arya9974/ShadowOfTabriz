let searchQuery = "";
let currentCategory = "main";
let currentIndex = 0;
let currentStatusFilter = "all";

let filteredCharacters = [];

const storyProgress = Number(localStorage.getItem("season1Progress")) || 1;

const container = document.getElementById("characterContainer");
const themePlayer = document.getElementById("themePlayer");
document.querySelectorAll(".status-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // حذف active از همه دکمه‌ها
    document
      .querySelectorAll(".status-btn")
      .forEach((b) => b.classList.remove("active"));

    // اضافه کردن active به این دکمه
    btn.classList.add("active");

    currentStatusFilter = btn.dataset.status;
    currentIndex = 0;
    renderCharacter();
  });
});
document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    // حذف کلاس active از همه دکمه‌های بالایی
    document
      .querySelectorAll(".tab")
      .forEach((b) => b.classList.remove("active"));

    // اضافه کردن active به این دکمه
    btn.classList.add("active");

    // بروزرسانی فیلتر
    currentStatusFilter = btn.dataset.status;
    currentIndex = 0;
    renderCharacter();
  });
});
/* -----------------------------
   گرفتن لیست کاراکترها
----------------------------- */
function getCurrentCharacters() {
  let chars = characters[currentCategory] || [];

  function getCharacterStatusForUser(character) {
    if (!character.deathPart) return "alive";
    if (storyProgress >= character.deathPart) return "dead";
    return "alive"; // اگر هنوز به مرگش نرسیده
  }

  if (currentStatusFilter !== "all") {
    chars = chars.filter(
      (c) => getCharacterStatusForUser(c) === currentStatusFilter,
    );
  }
  return chars;
}

/* -----------------------------
   نمایش وضعیت کاراکتر
----------------------------- */
function isCharacterVisible(character) {
  return storyProgress >= (character.entry.part || 0);
}

/* -----------------------------
   رندر اصلی
----------------------------- */
function renderCharacter() {
  filteredCharacters = getCurrentCharacters();

  if (!filteredCharacters.length) {
    container.innerHTML = `
      <div class="character-card">
        <h2>شخصیتی پیدا نشد</h2>
      </div>
    `;
    return;
  }

  if (currentIndex >= filteredCharacters.length) {
    currentIndex = 0;
  }

  const character = filteredCharacters[currentIndex];

  if (!isCharacterVisible(character)) {
    container.innerHTML = `
      <div class="character-card locked">
        <img src="images/locked.jpg">
        <h2>شخصیت ناشناس</h2>
        <p>برای مشاهده باید به پارت ${character.entry.part} برسید</p>
      </div>
    `;
    return;
  }

  renderUnlockedCharacter(character);
}

/* -----------------------------
   نمایش کامل کاراکتر
----------------------------- */
function renderUnlockedCharacter(character) {
  const deathInfo =
    character.deathPart && storyProgress >= character.deathPart
      ? `مرگ: پارت ${character.deathPart}`
      : `مرگ: 🔒`;

  container.innerHTML = `
    <div class="character-card">
      <img src="${character.image}">
      <h2>${character.name}</h2>

      <div>${deathInfo}</div>

      <p>${character.description}</p>

      <div id="relations"></div>
      <div id="timeline"></div>

<button
  class="theme-btn"
  onclick="playTheme('${character.theme}')"
>
  🎵 تم شخصیت
</button>
  `;

  renderRelations(character);
  renderTimeline(character);
  updateProgress();
}

/* -----------------------------
   روابط
----------------------------- */
function renderRelations(character) {
  document.getElementById("relations").innerHTML = `
    <h3>روابط</h3>
    <p>🤝 دوستان: ${character.relations?.friends?.join(", ") || "ندارد"}</p>
    <p>⚔ دشمنان: ${character.relations?.enemies?.join(", ") || "ندارد"}</p>
  `;
}

/* -----------------------------
   تایم‌لاین
----------------------------- */
function renderTimeline(character) {
  const section = document.getElementById("timeline");

  let html = `<h3>تایم لاین</h3>`;

  character.timeline.forEach((item) => {
    if (storyProgress < item.part) {
      html += `<div>🔒 پارت ${item.part}</div>`;
      return;
    }

    if (item.spoiler) {
      html += `
        <div>
          <button class="show-spoiler">نمایش</button>
          <div class="spoiler-text" style="display:none;">
            ● ${item.event}
          </div>
        </div>
      `;
    } else {
      html += `<div>● ${item.event}</div>`;
    }
  });

  section.innerHTML = html;

  section.querySelectorAll(".show-spoiler").forEach((btn) => {
    btn.addEventListener("click", () => {
      const spoilerText = btn.nextElementSibling;

      spoilerText.classList.toggle("open");

      btn.textContent = spoilerText.classList.contains("open")
        ? "🙈 مخفی کردن رویداد"
        : "👁 نمایش رویداد مخفی";
      if (spoilerText) {
        spoilerText.style.display =
          spoilerText.style.display === "block" ? "none" : "block";
      }
    });
  });
}

/* -----------------------------
   صدا
----------------------------- */
function playTheme(src) {
  themePlayer.pause();
  themePlayer.src = src;
  themePlayer.play();
}

/* -----------------------------
   navigation
----------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backToLanding");
  backBtn.addEventListener("click", () => {
    // مسیر به index.html نسبت به محل character.html
    window.location.href = "../../index.html";
  });
});

document.getElementById("next").onclick = () => {
  filteredCharacters = getCurrentCharacters();
  currentIndex = (currentIndex + 1) % filteredCharacters.length;
  renderCharacter();
};

document.getElementById("prev").onclick = () => {
  filteredCharacters = getCurrentCharacters();
  currentIndex =
    (currentIndex - 1 + filteredCharacters.length) % filteredCharacters.length;
  renderCharacter();
};

/* -----------------------------
   tabs
----------------------------- */
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    currentCategory = tab.dataset.category;
    currentIndex = 0;
    renderCharacter();
  });
});

/* -----------------------------
   search
----------------------------- */
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase();
  currentIndex = 0;
  renderCharacter();
});

/* -----------------------------
   progress
----------------------------- */
function updateProgress() {
  const allChars = [
    ...(characters.main || []),
    ...(characters.important || []),
    ...(characters.secondary || []),
    ...(characters.government || []),
  ];

  const unlocked = allChars.filter((c) => storyProgress >= (c.unlockAt || 0));

  localStorage.setItem(
    "charactersUnlocked",
    JSON.stringify(unlocked.map((c) => c.id)),
  );

  const percent = Math.floor((unlocked.length / allChars.length) * 100);

  document.getElementById("progressFill").style.width = percent + "%";

  document.getElementById("progressText").textContent =
    `${unlocked.length} / ${allChars.length} شخصیت کشف شده`;
}

/* -----------------------------
   init
----------------------------- */
currentIndex = 0;
filteredCharacters = getCurrentCharacters();
renderCharacter();
updateProgress();
