// ============================================================
// Secure Terminal – Boot & Login Sequence
// Green phosphor on black – short version
// ============================================================

const lines = [
  "SECURE TERMINAL  v4.02",
  "",
  "LOGIN: treloar_b",
  "PASSWORD: ********",
  "",
  "Authenticating................. OK",
  "Clearance level: STUDENT",
  "",
  "  NAME      : BETHANY TRELOAR",
  "  ID        : 24738284",
  "",
  "Accessing personal log...",
  "Opening file: X-41827.LOG",
  "",
  "Loading interface..."
];

const terminal = document.getElementById("terminal");
const boot     = document.getElementById("boot");
const desktop  = document.getElementById("desktop");
const clock    = document.getElementById("clock");

let line = 0;
let char = 0;

function type() {
  if (line >= lines.length) {
    setTimeout(goDesktop, 800);
    return;
  }

  const current = lines[line];

  if (char < current.length) {
    terminal.textContent += current.charAt(char);
    char++;
    const speed = (current[char - 1] === " ") ? 10 : 18 + Math.random() * 22;
    setTimeout(type, speed);
  } else {
    terminal.textContent += "\n";
    line++;
    char = 0;
    setTimeout(type, 70 + Math.random() * 50);
  }
}

function goDesktop() {
  boot.classList.add("fade");
  setTimeout(() => {
    boot.style.display = "none";
    desktop.classList.add("show");
    updateClock();
    setInterval(updateClock, 20000);
  }, 1100);
}

function updateClock() {
  const d = new Date();
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  clock.textContent = `${h}:${m} ${ampm}`;
}

window.addEventListener("load", () => {
  setTimeout(type, 400);
});
