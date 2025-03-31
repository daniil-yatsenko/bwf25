import { lenisMain } from "../global/globalInit";

const scrollToTop = () => {
  const filterList = document.querySelector('[fs-cmsfilter-element="list"]');
  if (window.innerWidth > 992 && filterList) {
    let filterBtns = document.querySelectorAll(
      '.filter-checkbox-field:not([fs-cmsfilter-field="letter"]), .filter-interface .tag'
    ); // handling "Writers" filters correctly

    filterBtns.forEach((button) => {
      button.addEventListener("click", () => {
        lenisMain.scrollTo(filterList, { offset: -90 });
      });
    });
  }
};

const desktopFiltersInit = () => {
  scrollToTop();
};

export { desktopFiltersInit };
