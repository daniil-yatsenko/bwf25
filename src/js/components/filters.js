import { gsap } from "gsap";
import { lenisMain } from "../global/globalInit";

function scrollOffsets() {
  const navbar = document.querySelector(".navbar_navbar");

  let offset = navbar.offsetHeight + 4 || 0;

  if (window.innerWidth < 992) {
    const adjustments = [
      {
        selector: ".event-directory-grid",
        styles: { marginTop: "1.5rem", paddingTop: "6.5rem" },
      },
      { selector: ".person-card_grid", styles: { paddingTop: "7rem" } },
      {
        selector: ".session-list_list",
        styles: { marginTop: "1rem", paddingTop: "7rem" },
      },
    ];

    adjustments.forEach(({ selector, styles }) => {
      const element = document.querySelector(selector);
      if (element) {
        gsap.set(element, styles);
      }
    });
  }

  return offset;
}
let scrollOffset = scrollOffsets();

// handle mobile filters block
const filterButton = document.querySelector("[mobile-filter-button]");
const filters = document.querySelector("[mobile-filter-list]");
const activeTags = document.querySelector("[mobile-filter-active-tags]");
const mobileScrollAnchor = document.querySelector(
  '[fs-cmsfilter-element="list"]'
);
const navbar = document.querySelector(".navbar_navbar");
const overflow = document.querySelector(".mobile-filters-overflow");
const applyBtn = filters?.querySelector(".button-small") ?? null;

let isOpened = false;
function handleFilterClick() {
  if (!isOpened) {
    lenisMain.stop();
    lenisMain.scrollTo(mobileScrollAnchor, {
      offset: -scrollOffset,
      force: true,
    });
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

function mobileFiltersInit() {
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
}

// desktop - scroll to top when any new filter is applied
function scrollToTopDesktop() {
  const filterList = document.querySelector('[fs-cmsfilter-element="list"]');
  if (window.innerWidth > 992 && filterList) {
    let filterBtns = document.querySelectorAll(
      '.filter-checkbox-field:not([fs-cmsfilter-field="letter"]), .filter-interface .tag'
    ); // handling "Writers" filters correctly

    filterBtns.forEach((button) => {
      button.addEventListener("click", () => {
        lenisMain.scrollTo(filterList, { offset: -scrollOffset });
      });
    });
  }
}

// observer - updates lenis if the page length is also updated.
let triggered = false;
const observer = new MutationObserver((mutationsList) => {
  if (mutationsList.some((mutation) => mutation.type === "childList")) {
    if (!triggered) {
      triggered = true;
      setTimeout(() => {
        triggered = false;
        lenisMain.resize();
        console.log("session list updated");
      }, 10);
    }
  }
});

const filtersInit = () => {
  console.log("filters init");
  const list = document.querySelector(".w-dyn-items");
  if (!list) return;

  if (window.innerWidth < 992) {
    mobileFiltersInit();
  } else {
    scrollToTopDesktop();
  }

  observer.observe(list, { childList: true });
};

export { filtersInit };
