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

factBtn.addEventListener("click", () => {
  const random = facts[Math.floor(Math.random() * facts.length)];
  factText.textContent = random;
});

// MUSIC TOGGLE
musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicBtn.textContent = "Pause Music ⏸️";
    } else {
      music.pause();
      musicBtn.textContent = "Play Music 🔊";
    }
  } catch (e) {
    alert("If music doesn't start, click the button again ❤️");
  }
});

// TYPED LOVE LETTER
const letterText =
  "Mai, being with you is my favorite part of every day. " +
  "Your smile makes everything brighter, and every moment with you is fun and special. " +
  "I’m so lucky to have you in my life. ❤️";

let i = 0;
function typeLetter() {
  if (i < letterText.length) {
    typedLetter.textContent += letterText.charAt(i);
    i++;
    setTimeout(typeLetter, 38);
  }
}
typeLetter();

// DAYS TOGETHER COUNTER
// CHANGE THIS DATE to your real start date:
const togetherDate = new Date("2025-01-01T00:00:00");

function updateCountdown() {
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
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["💖","💕","💗","💓","💘"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 5) + "s";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 9500);
}, 350);
