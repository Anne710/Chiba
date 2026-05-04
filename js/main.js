const navToggle = document.querySelector(".nav-toggle");
const globalNav = document.querySelector(".global-nav");

if (navToggle && globalNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = globalNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  globalNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      globalNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}
