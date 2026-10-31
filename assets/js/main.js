// Footer copyright year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Close the language menu on outside click or Escape
const closeLangMenus = (except) => {
  document.querySelectorAll("details.lang-menu[open]").forEach((menu) => {
    if (menu !== except) menu.removeAttribute("open");
  });
};

document.addEventListener("click", (event) => {
  closeLangMenus(event.target.closest("details.lang-menu"));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLangMenus(null);
});
