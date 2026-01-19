// ================= PATH HELPER =================
function getBasePath() {
  // If page is inside /Pages, go one level up
  return window.location.pathname.includes("/Pages/")
    ? ".."
    : ".";
}

const BASE = getBasePath();

// ================= LOAD HEADER =================
fetch(`${BASE}/Widgets/header.html`)
  .then((res) => {
    if (!res.ok) throw new Error("Header not found");
    return res.text();
  })
  .then((html) => {
    const header = document.getElementById("header-root");
    if (header) header.innerHTML = html;
  })
  .catch((err) => console.error("Header load failed:", err));

// ================= LOAD FOOTER =================
fetch(`${BASE}/Widgets/footer.html`)
  .then((res) => {
    if (!res.ok) throw new Error("Footer not found");
    return res.text();
  })
  .then((html) => {
    const footer = document.getElementById("footer-root");
    if (footer) footer.innerHTML = html;
  })
  .catch((err) => console.error("Footer load failed:", err));

// ================= LOAD MODALS =================
fetch(`${BASE}/modals/get-started-modal.html`)
  .then((res) => {
    if (!res.ok) throw new Error("Modal not found");
    return res.text();
  })
  .then((html) => {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) modalRoot.innerHTML = html;
  })
  .catch((err) => console.error("Modal load failed:", err));
