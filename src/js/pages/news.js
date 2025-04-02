import { gsap } from "gsap";

function yearFilterBlocks() {
  const tags = document.querySelectorAll(
    '.filter-checkbox-field[fs-cmsfilter-field="year"]'
  );

  if (!tags) return;

  const date = new Date();
  const currentYear = parseInt(date.getFullYear());

  tags.forEach((tag) => {
    const label = parseInt(tag.textContent);

    if (label > currentYear) {
      gsap.set(tag, { display: "none" });
    }
  });
  return;
}

const newsInit = () => {
  yearFilterBlocks();
};

export { newsInit };
