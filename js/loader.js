/* Load Header */
fetch("/widgets/header.html")
  .then((r) => r.text())
  .then((html) => (document.getElementById("header-root").innerHTML = html));

/* Load Footer */
fetch("/widgets/footer.html")
  .then((r) => r.text())
  .then((html) => (document.getElementById("footer-root").innerHTML = html));

/* Load Modals */
fetch("/modals/get-started-modal.html")
  .then((r) => r.text())
  .then((html) => (document.getElementById("modal-root").innerHTML = html));

fetch("/modals/underdevelopment.html")
  .then((r) => r.text())
  .then((html) => (document.getElementById("ud-loader").innerHTML = html));

/* Modal helpers */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* Global close */
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) {
    document.querySelectorAll(".modal.active").forEach((m) => m.classList.remove("active"));
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.active").forEach((m) => m.classList.remove("active"));
    document.body.style.overflow = "";
  }
});
