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

function loadFloatingButton() {
  fetch("../modals/floatingbutton.html")
    .then((res) => {
      if (!res.ok) throw new Error("Floating button not found");
      return res.text();
    })
    .then((html) => {
      const root = document.getElementById("floating-button-root");
      if (root) root.innerHTML = html;
    })
    .catch((err) => console.error(err));
}

document.addEventListener("DOMContentLoaded", loadFloatingButton);

document.addEventListener("DOMContentLoaded", () => {
  // Load Header
  fetch("../Widgets/header.html")
    .then((res) => res.text())
    .then((data) => {
      const header = document.getElementById("header-root");
      if (header) header.innerHTML = data;
    })
    .catch((err) => console.error("Header load failed", err));

  // Load Footer
  fetch("../Widgets/footer.html")
    .then((res) => res.text())
    .then((data) => {
      const footer = document.getElementById("footer-root");
      if (footer) footer.innerHTML = data;
    })
    .catch((err) => console.error("Footer load failed", err));
});


