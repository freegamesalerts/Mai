const factBtn = document.getElementById("factBtn");
const musicBtn = document.getElementById("musicBtn");
const factText = document.getElementById("factText");
const music = document.getElementById("bgMusic");
const typedLetter = document.getElementById("typedLetter");
const countdownEl = document.getElementById("countdown");

// LOVE FACTS
const facts = [
  "Mai’s smile is my favorite thing ever 😊",
  "I always have fun when I’m with Mai 🎉",
  "Being with Mai makes everything better 💖",
  "Every moment with Mai feels special ✨"
];

factBtn?.addEventListener("click", () => {
  const random = facts[Math.floor(Math.random() * facts.length)];
  factText.textContent = random;
});

// Set best video source based on URL
function setBestVideoSource() {
  if (!music) return;

  const pathParts = location.pathname.split("/").filter(Boolean);
  const repoName = pathParts[0] || "";
  const isUserSite = location.hostname.endsWith(".github.io") && pathParts.length === 0;

  const candidates = isUserSite
    ? ["music.mp4", "./music.mp4", "/music.mp4"]
    : ["./music.mp4", `/${repoName}/music.mp4`, "music.mp4"];

  let idx = 0;
  music.src = candidates[idx];
  music.load();

  music.addEventListener("error", () => {
    idx++;
    if (idx < candidates.length) {
      music.src = candidates[idx];
      music.load();
    }
  });
}

setBestVideoSource();

// PLAY/PAUSE VIDEO BUTTON
musicBtn?.addEventListener("click", async () => {
  try {
    if (!music) {
      alert("Video not found. Check id='bgMusic' in index.html");
      return;
    }

    if (music.paused) {
      await music.play();
      musicBtn.textContent = "Pause Video ⏸️";
    } else {
      music.pause();
      musicBtn.textContent = "Play Video ▶️";
    }
  } catch (e) {
    alert("Video failed. Ensure file name is exactly: music.mp4");
    console.error(e);
  }
});

// TYPED LOVE LETTER
const letterText =
  "Mai, being with you is my favorite part of every day. " +
  "Your smile makes everything brighter, and every moment with you is fun and special. " +
  "I’m so lucky to have you in my life. ❤️";

let i = 0;
function typeLetter() {
  if (!typedLetter) return;
  if (i < letterText.length) {
    typedLetter.textContent += letterText.charAt(i);
    i++;
    setTimeout(typeLetter, 38);
  }
}
typeLetter();

// DAYS TOGETHER COUNTER
const togetherDate = new Date("2026-07-13T00:00:00");

function updateCountdown() {
  if (!countdownEl) return;
  const now = new Date();
  const diff = now - togetherDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.textContent = `${days} days together 💞`;
}
updateCountdown();
setInterval(updateCountdown, 60000);

// HEARTS ANIMATION
const heartsContainer = document.querySelector(".hearts");
setInterval(() => {
  if (!heartsContainer) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["💖", "💕", "💗", "💓", "💘"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 5) + "s";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 9500);
}, 350);
