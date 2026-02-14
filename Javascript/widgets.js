function loadWidget(targetId, filePath, afterLoad) {
  fetch(filePath)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load ${filePath}`);
      return res.text();
    })
    .then((html) => {
      const el = document.getElementById(targetId);
      if (el) {
        el.innerHTML = html;
        if (typeof afterLoad === "function") afterLoad(el);
      }
    })
    .catch(console.error);
}

function getBasePath() {
  const path = window.location.pathname;
  return path.includes("/Pages/") ? "../" : "./";
}

document.addEventListener("DOMContentLoaded", () => {
  const base = getBasePath();
  const normalizeWidgetPaths = (root) => {
    if (base !== "./") return;

    root.querySelectorAll("[href^='../'], [src^='../']").forEach((node) => {
      const attr = node.hasAttribute("href") ? "href" : "src";
      const value = node.getAttribute(attr);
      if (!value || !value.startsWith("../")) return;
      node.setAttribute(attr, value.replace(/^\.\.\//, ""));
    });
  };

  const enableUnderDevLinks = (root) => {
    root
      .querySelectorAll(".dropdown-menu a[href='#']")
      .forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          if (typeof openModal === "function") {
            openModal("underDevelopmentModal");
          }
        });
      });
  };

  loadWidget("header-root", `${base}widgets/header.html`, (root) => {
    normalizeWidgetPaths(root);
    enableUnderDevLinks(root);
  });
  loadWidget("footer-root", `${base}widgets/footer.html`, normalizeWidgetPaths);
  loadWidget("modal-root", `${base}modals/get-started-modal.html`);
  loadWidget("ud-loader", `${base}modals/underdevelopment.html`);
  loadWidget("floating-button-root", `${base}modals/floatingbutton.html`);
});

document.addEventListener("click", (event) => {
  const btn = event.target.closest(".mobile-menu-btn");
  if (!btn) return;

  const nav = btn.closest(".navbar");
  const mobileNav = nav
    ? nav.querySelector(".mobile-nav")
    : document.querySelector(".mobile-nav");

  if (!mobileNav) return;

  const isOpen = mobileNav.classList.toggle("active");
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
