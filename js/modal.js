function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAllModals() {
  document.querySelectorAll(".modal.active").forEach(m => {
    m.classList.remove("active");
  });
  document.body.style.overflow = "";
}

document.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) {
    closeAllModals();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeAllModals();
  }
});
