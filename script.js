const openBtn = document.getElementById("openBtn");
const mailInner = document.getElementById("mailInner");
const card = document.getElementById("card");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msg = document.getElementById("msg");
const buttonsArea = document.getElementById("buttonsArea");

let opened = false;
let noClicks = 0;

openBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  mailInner.classList.add("open");

  // después de la animación, mostramos la tarjeta final
  setTimeout(() => {
    document.querySelector(".mail").style.display = "none";
    card.classList.remove("hidden");
  }, 900);
});

// --- NO se escapa y se hace chiquito ---
function moveNoButton(){
  const maxX = buttonsArea.clientWidth - noBtn.offsetWidth;
  const maxY = buttonsArea.clientHeight - noBtn.offsetHeight;

  noBtn.style.left = (Math.random() * Math.max(maxX, 0)) + "px";
  noBtn.style.top  = (Math.random() * Math.max(maxY, 0)) + "px";
  noBtn.style.right = "auto";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
}, { passive:false });

noBtn.addEventListener("click", () => {
  noClicks++;
  noBtn.style.transform = `scale(${Math.max(0.4, 1 - noClicks * 0.15)})`;
  moveNoButton();
});

// --- SÍ ---
yesBtn.addEventListener("click", () => {
  msg.textContent = "💖🐰 Yeiiiiii un san Valentín más junto al amor de mi vida, te amo mi alesita 💘✨";
  yesBtn.disabled = true;
  noBtn.disabled = true;
});
