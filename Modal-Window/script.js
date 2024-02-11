const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtn = document.querySelectorAll(".show-modal");

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

function closeModalAndOverlay() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModalAndOverlay);
overlay.addEventListener("click", closeModalAndOverlay);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModalAndOverlay();
  }
});
