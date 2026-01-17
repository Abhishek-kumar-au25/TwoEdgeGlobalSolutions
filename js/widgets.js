function loadWidget(id, file) {
  fetch(file)
    .then(r => r.text())
    .then(html => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadWidget("header-root", "widgets/header.html");
  loadWidget("footer-root", "widgets/footer.html");
  loadWidget("ud-loader", "modals/underdevelopment.html");
  loadWidget("modal-root", "modals/get-started-modal.html");
});
