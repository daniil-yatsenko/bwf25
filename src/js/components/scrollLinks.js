import { lenisMain } from "../global/globalInit.js";

function offset() {
  let offset = -120;

  if (window.innerWidth < 992) {
    offset = -80;
  }

  return offset;
}

const scrollLinksInit = () => {
  const allLinks = Array.from(document.querySelectorAll("a"));
  const scrollLinks = allLinks.filter((link) => {
    const href = link.getAttribute("href");
    return href && href.startsWith("#") && href.slice(1).length > 0;
  });

  scrollLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    link.setAttribute("href", "#");

    if (target) {
      link.addEventListener("click", () => {
        lenisMain.scrollTo(target, { offset: offset() });
      });
    }
  });
};

export { scrollLinksInit };
