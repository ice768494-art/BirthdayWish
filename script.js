const wishes = [
  {
    icon: "ðŸŒ¸",
    title: "A Beautiful Day",
    text: "Kaviya, today is your day. I hope every moment brings you a reason to smile and every little thing feels extra beautiful. Happy Birthday! ðŸ’—",
  },
  {
    icon: "âœ¨",
    title: "A Special Friend",
    text: "Some people make ordinary moments special just by being there. I am really happy to have a friend like you. Stay the same wonderful Kaviya. ðŸŒ·",
  },
  {
    icon: "ðŸ¦‹",
    title: "Keep Shining",
    text: "Never stop chasing your dreams. Keep your beautiful smile, keep your kind heart, and keep shining wherever life takes you. âœ¨",
  },
  {
    icon: "ðŸ’ž",
    title: "More Memories",
    text: "I wish we get many more funny moments, crazy conversations, unforgettable memories and beautiful days together. Cheers to another year! ðŸ’—",
  },
  {
    icon: "ðŸŽ‚",
    title: "My Birthday Wish",
    text: "May this new year of your life be filled with happiness, success, love, peace and everything you truly deserve. Once again, Happy Birthday Kaviya! ðŸŽ‰ðŸ’—",
  },
];

let current = 0;
function renderWish() {
  const w = wishes[current];
  document.getElementById("wishCount").textContent =
    String(current + 1).padStart(2, "0") + " / 05";
  document.getElementById("wishIcon").textContent = w.icon;
  document.getElementById("wishTitle").textContent = w.title;
  document.getElementById("wishText").textContent = w.text;
  document
    .querySelectorAll(".tab")
    .forEach((b, i) => b.classList.toggle("active", i === current));

  const next = document.getElementById("nextBtn");
  if (current === wishes.length - 1) {
    next.innerHTML = "Go To Last Wish <span>â†“</span>";
  } else {
    next.innerHTML = "Next Wish <span>â†’</span>";
  }
}
function showWish(n) {
  current = n;
  renderWish();
  document.getElementById("wishes").scrollIntoView({ behavior: "smooth" });
}
function nextWish() {
  if (current < wishes.length - 1) {
    current++;
    renderWish();
  } else {
    document.querySelector(".last").scrollIntoView({ behavior: "smooth" });
  }
}
function goToWishes() {
  document.getElementById("wishes").scrollIntoView({ behavior: "smooth" });
}

const petals = document.querySelector(".petals");
for (let n = 0; n < 24; n++) {
  const p = document.createElement("i");
  p.textContent = Math.random() > 0.45 ? "âœ¦" : "â™¡";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 6 + Math.random() * 8 + "s";
  p.style.animationDelay = -Math.random() * 10 + "s";
  p.style.fontSize = 10 + Math.random() * 15 + "px";
  petals.appendChild(p);
}
renderWish();

// Try to start the YouTube player automatically when the page loads.
// Modern browsers may block unmuted autoplay until the visitor interacts with the page.
window.addEventListener("load", () => {
  setTimeout(() => {
    const frame = document.querySelector(".youtube-card iframe");
    if (frame && !frame.src.includes("autoplay=1")) {
      frame.src +=
        (frame.src.includes("?") ? "&" : "?") + "autoplay=1&playsinline=1";
    }
  }, 500);
});