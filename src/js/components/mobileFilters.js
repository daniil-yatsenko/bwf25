import { gsap } from "gsap";
import { lenisMain } from "../global/globalInit";

const filterButton = document.querySelector("[mobile-filter-button]");
const filters = document.querySelector("[mobile-filter-list]");
const activeTags = document.querySelector("[mobile-filter-active-tags]");
const list = document.querySelector('[fs-cmsfilter-element="list"]');
const navbar = document.querySelector(".navbar_navbar");
const overflow = document.querySelector(".mobile-filters-overflow");
const applyBtn = filters?.querySelector(".button-small") ?? null;

let isOpened = false;
function handleFilterClick() {
  let scrollOffset = 0;
  if (navbar) {
    scrollOffset = navbar.offsetHeight || 0;
  }

  if (!isOpened) {
    lenisMain.stop();
    lenisMain.scrollTo(list, { offset: -scrollOffset, force: true });
    gsap.set(overflow, { display: "block" });
    gsap.set(filters, { display: "flex" });
    gsap.set(activeTags, { display: "none" });
    isOpened = true;
  } else {
    gsap.set(filters, { display: "none" });
    gsap.set(overflow, { display: "none" });
    gsap.set(activeTags, { display: "flex" });
    lenisMain.start();
    isOpened = false;
  }
}

const mobileFiltersInit = () => {
  if (filterButton) {
    filterButton.addEventListener("click", () => {
      handleFilterClick();
    });
  }
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      handleFilterClick();
    });
  }
  if (overflow) {
    overflow.addEventListener("click", () => {
      handleFilterClick();
    });
  }
};

export { mobileFiltersInit };
