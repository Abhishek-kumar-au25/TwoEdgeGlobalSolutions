function loadWidget(targetId, filePath) {
  fetch(filePath)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load ${filePath}`);
      return res.text();
    })
    .then((html) => {
      const el = document.getElementById(targetId);
      if (el) el.innerHTML = html;
    })
    .catch(console.error);
}

document.addEventListener("DOMContentLoaded", () => {
  loadWidget("header-root", "Widgets/header.html");
  loadWidget("footer-root", "Widgets/footer.html");
  loadWidget("modal-root", "modals/get-started-modal.html");
  loadWidget("ud-loader", "modals/underdevelopment.html");
});
